const router = require("express").Router();
const multer = require("multer");

const Product = require("../model/product");
const Incident = require("../model/incident");

const { findProduct } = require("../function/findProduct");

//
//
// ------------------------ //
// Funkcja dodająca obrazy
// ------------------------ //
//
//
const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload an image."));
    }
    cb(undefined, true);
  },
});

router.post(
  "/upload",
  upload.single("upload"),
  async (req, res) => {
    try {
      // const incident = await Incident.findById(req.body.id);
      const incident = new Incident({
        image: req.file.buffer,
      });
      const newincident = await incident.save();
      res.send(newincident);
    } catch (e) {
      res.status(400).send(e);
    }
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.get("/:id/image", async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident || !incident.image) {
      throw new Error();
    }
    //response header, use set
    res.set("Content-Type", "image/png");
    res.send(incident.image);
  } catch (e) {
    res.status(404).send();
  }
});

//
//
// ------------------------ //
// Pozostałe funkcje
// ------------------------ //
//
//

router.post("/add", async (req, res) => {
  const data = req.body;

  const products = new Product({
    name: data.name,
    cash: data.cash,
    image: data.image,
    pictures: data.pictures,
    type: data.type,
    category: data.category,
    size: data.size,
  });
  try {
    const saveProducts = await products.save();
    res.send(saveProducts);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  const data = req.query.type;

  const products = await Product.find({ type: data });

  res.send(products);
});

router.get("/product", async (req, res) => {
  const id = req.query.id;
  const products = await Product.find({ _id: id });
  res.send(products);
});

router.get("/search", async (req, res) => {
  const data = req.query;

  const products = await Product.find({ type: data.type });

  if (!data.select) return res.send(products);
  const search = await findProduct(products, data);
  res.send(search);
});

module.exports = router;
