import { buildMessage } from "../../../scripts/promotion-message-builder";

function $t(key) {
  if (key === "gb_short_name.result.Observatory") {
    return "Obs";
  } else if (key === "gb_name.result.Observatory") {
    return "Observatory";
  }
  return key;
}

const rewards = [185, 100, 30, 10];
const preparation = [200, 220, 240, 300];

const placesInterpolationValues = [];
for (let i = 0; i < rewards.length; i++) {
  placesInterpolationValues.push([
    { key: "PI", value: i + 1 },
    { key: "PV", value: rewards[i], free: true },
    { key: "PP", value: preparation[i] }
  ]);
}

const messageInterpolation = [
  { key: "FLVL", value: 9 },
  { key: "TLVL", value: 10 },
  { key: "LC", value: 650 }
];

const results = [
  {
    name: "Default 1",
    config: {
      prefix: "Your pseudo",
      suffix: "up in half hour",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: " ",
      place: "P${PI}(${PV})",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}"
    }
  },
  {
    name: "Default 2",
    config: {
      prefix: "Yoratheon",
      suffix: "up dans 30 min",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: " ",
      place: "P${PI}(${PV})",
      message: "${P} ${GBN} ${FLVL} → ${TLVL}"
    }
  },
  {
    name: "Default 3",
    config: {
      prefix: "Your pseudo",
      suffix: "up in half hour",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: " ",
      place: "P${PI}(${PV})",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}"
    }
  },
  {
    name: "Default 4",
    config: {
      prefix: "Yoratheon",
      suffix: "up dans 30 min",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: " ",
      place: "P${PI}(${PV})",
      message: "${P} ${GBN} ${FLVL} → ${TLVL}"
    }
  },
  {
    name: "Default 5",
    config: {
      prefix: "Yoratheon",
      suffix: "up dans 30 min",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: " ",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}"
    }
  },
  {
    name: "Default 6",
    config: {
      prefix: "Yoratheon",
      suffix: "up dans 30 min",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: " ",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}"
    }
  },
  {
    name: "Default 7",
    config: {
      prefix: "псевдонимы",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}"
    }
  },
  {
    name: "Default 8",
    config: {
      prefix: "إسم مستعار",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}"
    }
  },
  {
    name: "Custom 11",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} < ${P} > ${TLVL}"
    }
  },
  {
    name: "Default 11",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: "${LF}",
      place: "${Your pseudo} - ${GBN} ${PI}",
      message: "${P}",
      customFields: {
        "Your pseudo": {
          key: "Your pseudo",
          value: "My pseudo"
        }
      }
    }
  },
  {
    name: "Custom 0",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: " 👈 ",
      place: "${PI} (${PV})",
      message: "${Your pseudo} ${GBN} {${LC}} ${Msg} ${P}",
      customFields: {
        "Your pseudo": {
          key: "Your pseudo",
          value: "Yoratheon",
          placeholder: "My pseudo",
          show: true
        },
        Msg: {
          key: "Msg",
          value: "🆙",
          placeholder: "And up ?",
          show: true
        },
        Foo: {
          key: "Foo",
          value: "Bar",
          placeholder: "Baz",
          show: true
        }
      }
    }
  }
];

describe("Promotion Message Builder", () => {
  for (let i = 0; i < results.length; i++) {
    test(`Valid value with "${results[i].name}"`, () => {
      expect(
        buildMessage.call({ $t }, "Observatory", results[i].config, messageInterpolation, placesInterpolationValues)
      ).toMatchSnapshot();
    });
  }
});
