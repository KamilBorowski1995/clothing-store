const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  image: {
    type: Buffer,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Incident", incidentSchema);
