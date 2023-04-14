const io = require("../SocketIo/socketIo");
var Infrastructure = require("../Models/Infrastructure");

exports.getInfrastructure = async (req, res, next) => {
  try {

    let provider = req.query.organization
    let Infras
    if (provider) {Infras = await Infrastructure.find({provider:provider})} else {Infras = await Infrastructure.find({})}
    res.json(Infras);
  } catch (err) {
    console.log(err);
  }
};

exports.postInfrastructure = async (req, res, next) => {
  try {
    const newInfraData = req.body;
    var newInfra = new Infrastructure(newInfraData);
    await newInfra.save();
    res.json(newInfraData);
  } catch (err) {
    console.log(err);
  }
};
exports.deleteInfrastructure = async (req, res, next) => {
  const _id = req.query.id;
  try {
    const Infra = await Infrastructure.findByIdAndDelete(_id);
    if (!Infra) return res.sendStatus(404);
    res.status(201);
    res.send();
  } catch (err) {
    console.log(err);
  }
};
exports.putInfrastructure = async (req, res, next) => {
    const _id = req.query.id;
    try {
        const Infra = await Infrastructure.findOneAndUpdate({_id:_id},req.body);
        if (!Infra) return res.sendStatus(404);
        res.status(201);
        res.send();
      } catch (err) {
        console.log(err);
      }
  };