const mongoose = require("mongoose");

const cloudFlavourSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  CPU: {
    type: Number,
    required: true,
  },
  RAM: {
    type: Number,
    required: true,
  },
  storage: {
    type: Number,
    required: true,
  },
  nwMbps: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CloudFlavour", cloudFlavourSchema);
