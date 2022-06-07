const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: false },
    rating: { type: Number, required: false },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brand",
      required: false,
    },
    categories: [],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
