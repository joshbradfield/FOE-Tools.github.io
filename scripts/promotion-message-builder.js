/**
 * Build a place for the promotion message.
 *
 * @param placeBuilder {string} Place pattern, that should contains placeInterpolationValues
 * @param interpolationValues {array} An array that must contains object value that have a key and a value.
 * Accepted interpolations:
 * - PI {number}: place index (1, 2, 3, 4, 5)
 * - PV {number}: place value (number of FPs)
 * @returns {string} Return the place created for the promotion message
 */
export function buildPlace(placeBuilder, interpolationValues) {
  let result = placeBuilder;
  for (const interpolation of interpolationValues) {
    result = result.replace(new RegExp(`\\\${${interpolation.key}}`, "gi"), interpolation.value);
  }
  return result;
}

/**
 * Build a GB promotion message.
 *
 * @param gbKey {string} Key of the GB
 * @param data {object} An object that must contains:
 * - prefix {string}: default prefix,
 * - suffix {string}: default suffix,
 * - useShortGbName {boolean}: use short name when display the name of the GB,
 * - reversePlacesOrder {boolean}: reverse place (5,4,3,3,1) instead of (1,2,3,4,5)
 * - placeSeparator {string}: separator used to separate places
 * - place {string}: place pattern, that should contains placeInterpolationValues
 * - message {string}: message pattern, that should contains interpolationValues
 * @param interpolationValues {array} An array that must contains object value that have a key and a value.
 * Accepted interpolations:
 * - PI {number}: place index (1, 2, 3, 4, 5)
 * - PV {number}: place value (number of FPs)
 * @param placeInterpolationValues {array} An array that must contains object value that have a key and a value.
 * Accepted interpolations for interpolationValues:
 * - FLVL {number}: from level
 * - TLVL {number}: to level
 * - GBN {string}: GB name (managed internally, depending on useGbShort)
 * - P {string}: place (managed internally)
 * @returns {string} Return the promotion message created
 * @see buildPlace
 */
export function buildMessage(gbKey, data, interpolationValues, placeInterpolationValues) {
  let result = data.message;
  const findLevelRange = /\s?\${(?:FLVL|TLVL)}[^(?<!${(?:FLVL|TLVL)})]*\${(?:FLVL|TLVL)}/gi;
  if (!data.showLevel) {
    if (findLevelRange.test(data.message)) {
      result = result.replace(findLevelRange, "");
    } else {
      result = result.replace(/\s?\${(?:FLVL|TLVL)}/gi, "");
    }
  }

  let places = "";
  const goodPlaceInterpolationValues = data.reversePlacesOrder
    ? [...placeInterpolationValues].reverse()
    : placeInterpolationValues;
  goodPlaceInterpolationValues.forEach(interpolation => {
    if (interpolation[1].free) {
      places += (places.length > 0 ? data.placeSeparator : "") + buildPlace(data.place, interpolation);
    }
  });

  const goodInterpolationValues = [...interpolationValues, { key: "P", value: places }];

  if (data.displayGbName) {
    goodInterpolationValues.push({
      key: "GBN",
      value: data.useShortGbName ? this.$t(`foe_data.gb_short.${gbKey}`) : this.$t(`foe_data.gb.${gbKey}`)
    });
  } else {
    result = result.replace(/\${GBN}\s?/gi, "");
  }

  goodInterpolationValues.forEach(interpolation => {
    result = result.replace(new RegExp(`\\\${${interpolation.key}}`, "gi"), interpolation.value);
  });

  if (data.prefix && data.prefix.length) {
    result = `${data.prefix} ${result}`;
  }

  if (data.suffix && data.suffix.length) {
    result = `${result} ${data.suffix}`;
  }

  return result;
}

export const defaultPromotionMessages = [
  {
    name: "Default 1",
    config: {
      prefix: "",
      suffix: "",
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
      prefix: "",
      suffix: "",
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
      prefix: "",
      suffix: "",
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
      prefix: "",
      suffix: "",
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
      prefix: "",
      suffix: "",
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
      prefix: "",
      suffix: "",
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
      prefix: "",
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
      prefix: "",
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
    name: "Default 9",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: false,
      showLevel: false,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}"
    }
  },
  {
    name: "Default 10",
    config: {
      prefix: "",
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
  }
];
