var AppInstance = require("../Models/AppInstance");
exports.getAppInstance = async (req, res, next) => {
  try {
    let organization = req.query.organization
    let AppInstances
    if (organization) {AppInstances = await AppInstance.find({"app.organization":organization})} else {AppInstances = await AppInstance.find({})}
    res.json(AppInstances);
  } catch (err) {
    console.log(err);
  }
};

exports.postAppInstance = async (req, res, next) => {
    try {
      const newAppInstanceData = {
        zone: req.body.zone,
        app: req.body.app,
        organization: req.body.organization,
        cloudflavour: req.body.cloudflavour,
        networkflavour: req.body.networkflavour,
      };
      var newAppInstance = new AppInstance(newAppInstanceData);
      await newAppInstance.save();
      res.json(newAppInstance);
    } catch (err) {
      console.log(err);
    }
  };

  exports.putAppInstance = async (req, res, next) => {
    const _id = req.query.id;
    try {
        const appInstance = await AppInstance.findOneAndUpdate({_id:_id},req.body);
        if (!appInstance) return res.sendStatus(404);
        res.status(201);
        res.send();
        
      } catch (err) {
        console.log(err);
      }
  };

  exports.deleteAppInstance = async (req, res, next) => {
    const _id = req.query.id;
    try {
      const appInstance = await AppInstance.findByIdAndDelete(_id);
      if (!appInstance) return res.sendStatus(404);
      res.status(201);
      res.send();
    } catch (err) {
      console.log(err);
    }
  };