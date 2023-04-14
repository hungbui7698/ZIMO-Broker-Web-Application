const mongoose = require("mongoose");

const networkFlavourSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  flavourAttribute:{
    type: Object,
    required: true,
},
});

module.exports = mongoose.model("NetworkFlavour", networkFlavourSchema);
