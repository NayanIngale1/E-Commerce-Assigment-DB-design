const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();

//fot getting all the products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("brand").lean().exec();

    res.status(200).send({ data: products, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

//for creating product

router.post("/create", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.status(201).send({ data: product, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

// for getting single product by id

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("brand").lean().exec();

    if (!product) {
      return res
        .status(404)
        .send({ data: product, message: "error", error: "User Not found.." });
    }
    return res.status(200).send({ data: product, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});
// for remove single product by id

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({ data: product, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

// for update product by id

router.patch("/:id/edit", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    )
      .populate("brand")
      .lean()
      .exec();

    return res.status(201).send({ data: product, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

module.exports = router;
