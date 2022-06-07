const express = require("express");
const Brand = require("../models/brand.model");
const router = express.Router();

//fot getting all the brands
router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find().lean().exec();

    res.status(200).send({ data: brands, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

//for creating brand

router.post("/create", async (req, res) => {
  try {
    const brand = await Brand.create(req.body);

    return res.status(201).send({ data: brand, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

// for getting single brand by id

router.get("/:id", async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id).lean().exec();

    if (!brand) {
      return res
        .status(404)
        .send({ data: brand, message: "error", error: "User Not found.." });
    }
    return res.status(200).send({ data: brand, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});
// for remove single brand by id

router.delete("/:id/delete", async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({ data: brand, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

// for update brand by id

router.patch("/:id/edit", async (req, res) => {
  try {
    const brand = await Brand.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
      })
      .lean()
      .exec();

    return res.status(201).send({ data: brand, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});


module.exports = router;
