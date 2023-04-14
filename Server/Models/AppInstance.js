const mongoose = require("mongoose");

const appInstanceSchema = mongoose.Schema({
  zone: {
    type: String,
    required: true,
  },
  app: {
    type: Object,
 
  },
  cloudflavour: {
    type: Object,
  },
  networkflavour: {
    type: Object,
  }
});

module.exports = mongoose.model("AppInstance", appInstanceSchema);
