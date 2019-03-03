import Utils from "./utils";
import Errors from "./errors";

/**
 * Check if a numeric parameter are valid. Throw an error if the value are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param value Value of this parameter
 */
function checkValidNumberInputParameter(paramName, funcName, value) {
  if (typeof value !== "number") {
    throw Errors.InvalidTypeError("number", typeof value, `for parameter "${paramName}" of ${funcName}`);
  } else if (value < 0) {
    throw Errors.BoundExceededError(
      Errors.AvailableBoundTypes["<"],
      value,
      0,
      `for parameter "${paramName}" of ${funcName}`
    );
  }
}

/**
 * Check if a numeric array are valid. Throw an error if the array are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param array Array of this parameter that should contains only numeric values >= 0
 */
function checkNumericArray(paramName, funcName, array) {
  if (!(array instanceof Array)) {
    throw Errors.InvalidTypeError("Array", typeof array, `for parameter "${paramName}" of ${funcName}`);
  }

  array.forEach((value, index) => {
    checkValidNumberInputParameter(`${paramName}[${index}]`, funcName, value);
  });
}

/**
 * Check if a gb array are valid. Throw an error if the gb array are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param gb GB array of this parameter
 */
function checkGbData(paramName, funcName, gb) {
  if (!(gb instanceof Array)) {
    throw Errors.InvalidTypeError("Array", typeof gb, `for parameter "${paramName}" of ${funcName}`);
  }

  gb.forEach((value, index) => {
    if (!("cost" in value)) {
      throw Errors.KeyNotFoundError("cost", `${paramName}[${index}]`, `in "checkGbData" called by ${funcName}`);
    }
    if (!("reward" in value)) {
      throw Errors.KeyNotFoundError("reward", `${paramName}[${index}]`, `in "checkGbData" called by ${funcName}`);
    }
    checkValidNumberInputParameter(`${paramName}[${index}].cost`, funcName, value.cost);
    checkNumericArray(`${paramName}[${index}].reward`, funcName, value.reward);
  });
}

/**
 * Compute the necessary amount of FP to secure a place.
 * @param levelCost {number}
 * @param currentDeposits {number}
 * @param yourParticipation {number}
 * @param otherParticipation {number}
 * @param yourArcBonus {number}
 * @param fpTargetReward {number}
 * @return {Object} Return an object that contains:
 *  - fp: fp needed to secure the a place
 *  - roi: Return of investment (if yourArcBonus >= 0 && fpTargetReward > 0), otherwise it is set to 0
 */
function securePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward) {
  let result =
    Math.ceil((levelCost - currentDeposits - (otherParticipation - yourParticipation)) / 2) + otherParticipation;

  if (result <= otherParticipation) {
    return {
      fp: -1,
      roi: 0
    };
  } else {
    let roi = 0;
    if (yourArcBonus >= 0 && fpTargetReward > 0) {
      const investment = result > yourParticipation ? result : yourParticipation;
      const factor = (100 + yourArcBonus) / 100;
      roi = Math.round(factor * fpTargetReward - investment);
    }
    return {
      fp: result,
      roi: roi
    };
  }
}

/**
 * Get all data from GB for a specific level
 *
 * @param gb {object} Pointer of Great Building
 * @param currentLevel {number} Current level
 * @param investorPercentage {Array} percentage of investors (Arc)
 * @param defaultParticipation {Array} Default participation used if reward of the place is equal to 0.
 * If null, all default place participation are set to 0.
 * @return {object}
 */
function levelInvestment(gb, currentLevel, investorPercentage, defaultParticipation = []) {
  const result = {};
  result.cost = gb[currentLevel - 1].cost;
  result.investment = [];
  result.otherInvestment = [];

  let normalizedDefaultParticipation = [];
  normalizedDefaultParticipation.splice(0, defaultParticipation.length, ...defaultParticipation);
  let defaultParticipationIndex = 0;
  let levelCostReached = false;
  let cumulativeParticipation = 0;
  let maxPreparation = 0;
  let cumulativeInvestment = 0;

  for (let i = 0; i < gb[currentLevel - 1].reward.length && !levelCostReached; i++) {
    const investment = {
      reward: gb[currentLevel - 1].reward[i],
      expectedParticipation: Math.round(gb[currentLevel - 1].reward[i] * (1 + investorPercentage[i] / 100)),
      isInvestorParticipation: false
    };
    const securePlaceValue = securePlace(
      result.cost,
      cumulativeInvestment,
      0,
      0,
      investorPercentage[i],
      investment.reward
    );

    // Compute the participation of the investor
    if (
      normalizedDefaultParticipation[defaultParticipationIndex] >= investment.expectedParticipation ||
      normalizedDefaultParticipation[defaultParticipationIndex] >= securePlaceValue.fp
    ) {
      investment.participation = normalizedDefaultParticipation[defaultParticipationIndex];
      investment.isInvestorParticipation = true;
      defaultParticipationIndex++;
    } else {
      let preparation = investment.expectedParticipation;
      const localCumulativeParticipation =
        result.investment.map(elt => elt.participation).reduce((i, j) => i + j, 0) +
        normalizedDefaultParticipation.slice(defaultParticipationIndex).reduce((i, j) => i + j, 0);
      const localMaxPreparation = Math.max(maxPreparation, preparation);
      const localCumulativeInvestment = localCumulativeParticipation + localMaxPreparation;
      investment.participation = investment.expectedParticipation;
      if (localCumulativeInvestment >= result.cost) {
        investment.participation += result.cost - localCumulativeInvestment;
      }
    }

    if (investment.participation === 0) {
      levelCostReached = true;
      continue;
    }

    // Compute the cost to secure the place
    investment.preparation = Math.max(0, result.cost - (cumulativeParticipation + 2 * investment.participation));
    if (
      result.investment.length > 0 &&
      investment.preparation < result.investment[result.investment.length - 1].preparation
    ) {
      investment.preparation = result.investment[result.investment.length - 1].preparation;
    }

    cumulativeParticipation += investment.participation;
    maxPreparation = Math.max(maxPreparation, investment.preparation);
    cumulativeInvestment = cumulativeParticipation + maxPreparation;
    investment.cumulativeInvestment = cumulativeInvestment;
    result.investment[result.investment.length] = investment;

    if (!levelCostReached && cumulativeInvestment >= result.cost) {
      levelCostReached = true;
    }
  }

  result.totalPreparations = Math.max(
    0,
    result.cost -
      cumulativeParticipation -
      normalizedDefaultParticipation.slice(defaultParticipationIndex).reduce((i, j) => i + j, 0)
  );
  result.level = currentLevel;

  for (let i = result.investment.length; i < gb[currentLevel - 1].reward.length; i++) {
    result.investment.push({
      reward: gb[currentLevel - 1].reward[i],
      expectedParticipation: Math.round(gb[currentLevel - 1].reward[i] * (1 + investorPercentage[i] / 100)),
      preparation: result.totalPreparations,
      isInvestorParticipation: false
    });
    if (defaultParticipationIndex < normalizedDefaultParticipation.length) {
      result.investment[result.investment.length - 1].isInvestorParticipation = true;
      result.investment[result.investment.length - 1].participation =
        normalizedDefaultParticipation[defaultParticipationIndex];
      defaultParticipationIndex++;
    }
  }

  for (let i = defaultParticipationIndex; i < normalizedDefaultParticipation.length; i++) {
    result.otherInvestment.push({
      reward: 0,
      expectedParticipation: 0,
      preparation: 0,
      participation: normalizedDefaultParticipation[i],
      isInvestorParticipation: true
    });
  }

  return result;
}

export default {
  /**
   * Get all data from GB for a range of levels
   *
   * @param from {number} From this level
   * @param to {number} To this level
   * @param investorPercentage {Array} percentage of investors (Arc)
   * @param gb {object} Pointer of Great Building
   * @return {object}
   */
  ComputeLevelInvestmentRange(from, to, investorPercentage, gb) {
    const funcName = "ComputeLevelInvestmentRange(from, to, investorPercentage, gb)";
    checkGbData("gb", funcName, gb);
    if (!Utils.inRange(from, 1, gb.length)) {
      throw Errors.NotInBoundsError(from, 1, gb.length, `for parameter "from" of ${funcName}`);
    }
    if (!Utils.inRange(to, 1, gb.length)) {
      throw Errors.NotInBoundsError(to, 1, gb.length, `for parameter "to" of ${funcName}`);
    }
    checkNumericArray("investorPercentage", funcName, investorPercentage);

    let start;
    let end;

    if (from > to) {
      start = to;
      end = from;
    } else {
      start = from;
      end = to;
    }

    let result = {
      global: {
        cost: 0,
        totalPreparations: 0
      },
      levels: []
    };

    for (let i = start; i <= end; i++) {
      result.levels.push(levelInvestment(gb, i, investorPercentage));
      result.global.cost += result.levels[result.levels.length - 1].cost;
      result.global.totalPreparations += result.levels[result.levels.length - 1].totalPreparations;
    }

    return result;
  },

  /**
   * Compute the necessary amount of FP to secure a place.
   * @param levelCost {number}
   * @param currentDeposits {number}
   * @param yourParticipation {number}
   * @param otherParticipation {number}
   * @param yourArcBonus {number}
   * @param fpTargetReward {number}
   * @return {Object} Return an object that contains:
   *  - fp: fp needed to secure the a place
   *  - roi: Return of investment (if yourArcBonus >= 0 && fpTargetReward > 0), otherwise it is set to 0
   */
  ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward) {
    const funcName =
      "ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, " +
      "yourArcBonus, fpTargetReward)";
    checkValidNumberInputParameter("levelCost", funcName, levelCost);
    checkValidNumberInputParameter("currentDeposits", funcName, currentDeposits);
    checkValidNumberInputParameter("yourParticipation", funcName, yourParticipation);
    checkValidNumberInputParameter("otherParticipation", funcName, otherParticipation);
    checkValidNumberInputParameter("yourArcBonus", funcName, yourArcBonus);
    checkValidNumberInputParameter("fpTargetReward", funcName, fpTargetReward);

    return securePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward);
  },

  /**
   * Get all data from GB for a specific level
   *
   * @param currentLevel {number} Current level
   * @param investorPercentage {Array} percentage of investors (Arc)
   * @param gb {object} Pointer of Great Building
   * @param defaultParticipation {Array} Participation of investors. This array should be sorted with greater first.
   * By default, all default place participation are set to 0.
   * @return {object}
   */
  ComputeLevelInvestment(currentLevel, investorPercentage, gb, defaultParticipation = []) {
    const funcName = "ComputeLevelInvestment(currentLevel, investorPercentage, gb, defaultParticipation)";

    checkGbData("gb", funcName, gb);
    if (!Utils.inRange(currentLevel, 1, gb.length)) {
      throw Errors.NotInBoundsError(currentLevel, 1, gb.length, `for parameter "currentLevel" of ${funcName}`);
    }
    checkNumericArray("investorPercentage", funcName, investorPercentage);
    checkNumericArray("defaultParticipation", funcName, defaultParticipation);
    const participationSum = defaultParticipation.reduce((i, j) => i + j, 0);
    if (participationSum > gb[currentLevel - 1].cost) {
      throw Errors.BoundExceededError(
        Errors.AvailableBoundTypes[">"],
        participationSum,
        gb[currentLevel - 1].cost,
        `for the sum of values of parameter "defaultParticipation" of ${funcName}`
      );
    }

    return levelInvestment(gb, currentLevel, investorPercentage, defaultParticipation.sort((a, b) => b - a));
  }
};
