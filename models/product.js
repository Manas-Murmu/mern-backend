const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pleae provide product name"],
    trim: true,
    maxlength: [120, "Product name should not be more than 120 characters"],
  },
  price: {
    type: Number,
    required: [true, "Pleae provide product price"],
    maxlength: [6, "Product price should not be more than 6 digits"],
  },
  description: {
    type: String,
    required: [true, "Pleae provide product description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: [
      true,
      "Pleae select category from Electronics, Clothing, Footwear, Home & Furniture",
    ],
    enum: {
      values: ["electronics", "clothing", "footwear", "home & furniture"],
      message:
        "Pleae select category ONLY from electronics, clothing, footwear, home & furniture",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
