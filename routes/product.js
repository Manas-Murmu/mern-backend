const express = require("express");
const router = express.Router();

const { addProduct, allProducts } = require("../controllers/productController");

//User Routes
router.route("/product/add").post(addProduct);
router.route("/products").get(allProducts);

module.exports = router;
