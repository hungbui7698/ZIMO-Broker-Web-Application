var AppGroup = require("../Models/AppGroup");
exports.getAppGroup = async (req, res, next) => {
  try {
    let user = req.query.user
    let AppGroups
    if (user) {AppGroups = await AppGroup.find({user:user})} else {AppGroups = await AppGroup.find({})}
    res.json(AppGroups);
  } catch (err) {
    console.log(err);
  }
};

exports.postAppGroup = async (req, res, next) => {
    try {
      const newAppGroupData = {
        user: req.body.user,
        name: req.body.name,
        apps: req.body.apps,
      };
      var newAppGroup = new AppGroup(newAppGroupData);
      await newAppGroup.save();
      res.json(newAppGroup);
    } catch (err) {
      console.log(err);
    }
  };

exports.deleteAppGroup = async (req, res, next) => {
    const _id = req.query.id;
    try {
      const appGroup = await AppGroup.findByIdAndDelete(_id);
      if (!appGroup) return res.sendStatus(404);
      res.status(201);
      res.send();
    } catch (err) {
      console.log(err);
    }
  };

  exports.putAppGroup = async (req, res, next) => {
    const _id = req.query.id;
    try {
        const appGroup = await AppGroup.findOneAndUpdate({_id:_id},req.body);
        if (!appGroup) return res.sendStatus(404);
        res.status(201);
        res.send();
      } catch (err) {
        console.log(err);
      }
  };