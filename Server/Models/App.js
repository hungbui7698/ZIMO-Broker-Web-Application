const mongoose = require("mongoose");

const appSchema = mongoose.Schema({
  region: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  description:{
    type:String,
  },
  cloudflavour: {
    type: Object,
  },
  networkflavour: {
    type: Object,
  },
  name: {
    type: String,
    required: true,
  },
  version: {
    type: Number,
    required: true,
  },
  deploymentType: {
    type: String,

  },
  imageType: {
    type: String,

  },
  path: {
    type: String,
  },
});

module.exports = mongoose.model("App", appSchema);
