var CloudFlavour = require("../Models/CloudFlavour");
exports.getCloudFlavour = async (req, res, next) => {
  try {
    let CloudFlavours = await CloudFlavour.find({});
    res.json(CloudFlavours);
  } catch (err) {
    console.log(err);
  }
};

exports.postCloudFlavour = async (req, res, next) => {
    try {
      const newCloudFlavourData = {
        name: req.body.name,
        user: req.body.user,
        CPU: req.body.CPU,
        RAM: req.body.RAM,
        storage: req.body.storage,
        nwMbps: req.body.nwMbps,
      };
      var newCloudFlavour = new CloudFlavour(newCloudFlavourData);
      await newCloudFlavour.save();
      res.json(newCloudFlavour);
    } catch (err) {
      console.log(err);
    }
  };