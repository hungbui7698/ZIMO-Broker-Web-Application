var App = require("../Models/App");
exports.getApp = async (req, res, next) => {
  try {
    let organization = req.query.organization
    let Apps
    if (organization) {Apps = await App.find({organization:organization})} else {Apps = await App.find({})}
    res.json(Apps);
  } catch (err) {
    console.log(err);
  }
};

exports.postApp = async (req, res, next) => {
    try {
      const newAppData = {
        region: req.body.Region,
        organization: req.body.Organization,
        description: req.body.Description,
        cloudflavour: req.body.CloudFlavour,
        networkflavour: req.body.NetworkFlavour,
        name: req.body.Name,
        version: req.body.Version,
        deploymentType: req.body.DeploymentType,
        imageType: req.body.ImageType,
        path: req.body.Path,
      };
      var newApp = new App(newAppData);
      await newApp.save();
      res.json(newApp);
    } catch (err) {
      console.log(err);
    }
  };

  exports.putApp = async (req, res, next) => {
    const _id = req.query.id;
    try {
        const app = await App.findOneAndUpdate({_id:_id},req.body);
        if (!app) return res.sendStatus(404);
        res.status(201);
        res.send();
        
      } catch (err) {
        console.log(err);
      }
  };

  exports.deleteApp = async (req, res, next) => {
    const _id = req.query.id;
    try {
      const app = await App.findByIdAndDelete(_id);
      if (!app) return res.sendStatus(404);
      res.status(201);
      res.send();
    } catch (err) {
      console.log(err);
    }
  };