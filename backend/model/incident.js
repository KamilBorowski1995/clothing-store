const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  image: {
    type: Buffer,
  },
});

module.exports = mongoose.model("Incident", incidentSchema);
