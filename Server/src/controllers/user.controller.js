const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

//fot getting all the users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    res.status(200).send({ data: users, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

//for creating user

router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

// for getting single user by id

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();

    if (!user) {
      return res
        .status(404)
        .send({ data: user, message: "error", error: "User Not found.." });
    }
    return res.status(200).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});
// for remove single user by id

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

// for update user by id

router.patch("/:id/edit", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send({ data: user, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

// for getting all addresses of particular user

router.get("/:id/addresses", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const addresses = user.addresses;

    return res.status(201).send({ data: addresses, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

// for adding the new address for user

router.patch("/:id/addresses/create", async (req, res) => {
  try {
    const test = await User.updateOne(
      { _id: req.params.id },
      { $push: { addresses: req.body } }
    );
    if (test.acknowledged === true) {
      const user = await User.findById(req.params.id).lean().exec();
      return res.status(201).send({ data: user.addresses, message: "success" });
    }
    return res
      .status(404)
      .send({ data: test, message: "error", error: "something went wrong" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

router.patch("/:id/addresses/:idx/edit", async (req, res) => {
  try {
    const test = await User.updateOne(
      { _id: req.params.id, "addresses._id": req.params.idx },
      { $set: { "addresses.$": req.body } }
    );

    let idx = req.params.idx;
    if (test.acknowledged === true) {
      const user = await User.findById(req.params.id).lean().exec();

      return res.status(201).send({ data: user.addresses, message: "success" });
    }
    return res
      .status(404)
      .send({ data: test, message: "error", error: "something went wrong" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

module.exports = router;
