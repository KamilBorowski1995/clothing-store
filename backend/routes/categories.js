const router = require("express").Router();

const Category = require("../model/category");
const ProductsCategory = require("../model/ProductsCategory");

const Product = require("../model/product");

router.get("/", async (req, res) => {
  const category = await Category.find({});

  res.send(category);
});

router.get("/product", async (req, res) => {
  const productsCategory = await ProductsCategory.find({});

  res.send(productsCategory);
});

module.exports = router;
