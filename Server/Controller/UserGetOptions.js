exports.postUserGetOptions = async (req, res, next) => {
  try {
    var op1 = [];
    req.body.appGroup.apps.map((elem) =>
      op1.push({
        _id: elem._id,
        name: elem.name,
        network: {
          _id: 2,
          provider: "Private 5G",
          delay: "0b11",
          uplink: 5000,
          downlink: 5000,
        },
        cloud: { _id: 2, provider: "Private Edge" },
        qos: { latency: 5, throughput: 5, jitter: 5 },
        nonFunctional: {
          reliability: 5,
          availability: 5,
          portability: 5,
          security: 5,
          usability: 5,
          cost: 5,
        },
        functional: {
          numberOfUser: 100,
        },
      })
    );
    var op2 = [];
    req.body.appGroup.apps.map((elem) =>
      op2.push({
        _id: elem._id,
        name: elem.name,
        network: {
          _id: 2,
          provider: "Vodafone 5G",
          delay: "0b11",
          uplink: 3000,
          downlink: 3000,
        },
        cloud: { _id: 2, provider: "Private Edge" },
        qos: { latency: 2, throughput: 3, jitter: 3 },
        nonFunctional: {
          reliability: 3,
          availability: 3,
          portability: 5,
          security: 5,
          usability: 5,
          cost: 5,
        },
        functional: {
          numberOfUser: 10,
        },
      })
    );
    var options = [];
    options.push({ _id: 1, apps: op1 });
    options.push({ _id: 2, apps: op2 });

    res.json(options);
  } catch (err) {
    console.log(err);
  }
};
