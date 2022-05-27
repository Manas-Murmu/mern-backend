const Product = require("../models/product");
const BigPromise = require("../middlewares/bigPromise");

exports.addProduct = BigPromise(async (req, res, next) => {
  const { name, description, price, ratings, category } = req.body;
  console.log(req.body);

  const product = await Product.create({
    name,
    description,
    price,
    ratings,
    category,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

exports.allProducts = BigPromise(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json(products);
});
