const moment = require("moment");
const age = require("../ages").SpaceAgeMars.key;

module.exports = {
  key: "fusion_reactors",
  age: age,
  building: {
    resources: {
      coins: 1750000,
      supplies: 2100000
    },
    time: moment.duration({ hours: 2 }),
    size: {
      length: 4,
      width: 3
    },
    population: 817,
    connection: 1
  },
  unrefined: null
};
