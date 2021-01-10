const mongoose = require("mongoose");

const productsCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  _pl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProductsCategory", productsCategorySchema);
