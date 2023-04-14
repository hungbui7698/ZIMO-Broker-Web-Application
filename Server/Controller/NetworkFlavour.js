var NetworkFlavour = require("../Models/NetworkFlavour");
exports.getNetworkFlavour = async (req, res, next) => {
  try {
    let organization = req.query.organization
    let NetworkFlavours = await NetworkFlavour.find({});
    if (organization) {NetworkFlavours = await NetworkFlavour.find({"organization":organization})} else {NetworkFlavours = await NetworkFlavour.find({})}
    res.json(NetworkFlavours);
  } catch (err) {
    console.log(err);
  }
};

exports.postNetworkFlavour = async (req, res, next) => {
    try {
      const newNetworkFlavourData = {
        name: req.body.name,
        organization: req.body.organization,
        flavourAttribute: req.body.flavourAttribute,
      };
      var newNetworkFlavour = new NetworkFlavour(newNetworkFlavourData);
      await newNetworkFlavour.save();
      res.json(newNetworkFlavour);
    } catch (err) {
      console.log(err);
    }
  };

  exports.putNetworkFlavour = async (req, res, next) => {
    const _id = req.query.id;
    try {
        const networkFlavour = await NetworkFlavour.findOneAndUpdate({_id:_id},req.body);
        if (!networkFlavour) return res.sendStatus(404);
        res.status(201);
        res.send();
        
      } catch (err) {
        console.log(err);
      }
  };

  exports.deleteNetworkFlavour = async (req, res, next) => {
    const _id = req.query.id;
    try {
      const networkFlavour = await NetworkFlavour.findByIdAndDelete(_id);
      if (!networkFlavour) return res.sendStatus(404);
      res.status(201);
      res.send();
    } catch (err) {
      console.log(err);
    }
  };