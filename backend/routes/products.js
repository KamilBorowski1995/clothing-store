const router = require("express").Router();
const Product = require("../model/product");

router.post("/add", async (req, res) => {
  const data = req.body;

  const products = new Product({
    name: data.name,
    cash: data.cash,
    image: data.image,
  });
  try {
    const saveProducts = await products.save();
    res.send(saveProducts);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  const products = await Product.find({});

  res.send(products);
});

module.exports = router;
