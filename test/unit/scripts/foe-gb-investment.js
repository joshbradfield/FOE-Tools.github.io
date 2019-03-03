import gbs from "../../../lib/foe-data/gbs";
import GbProcess from "../../../scripts/foe-gb-investment";
import Errors from "../../../scripts/errors";

describe("FoeGbInvestment", () => {
  describe("ComputeLevelInvestment", () => {
    const funcName = "ComputeLevelInvestment(currentLevel, investorPercentage, gb, defaultParticipation)";

    test("Valid value", () => {
      const result = GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge, []);

      expect(result).toMatchSnapshot();
    });

    test("Throw error when invalid type for currentLevel", () => {
      expect(() => GbProcess.ComputeLevelInvestment("a", [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge, [])).toThrow(
        Errors.InvalidTypeError("number", {
          value: "string",
          lowerBound: "number",
          upperBound: "number"
        })
      );
    });

    test("Throw error when invalid value for currentLevel", () => {
      expect(() => GbProcess.ComputeLevelInvestment(0, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge, [])).toThrow(
        Errors.NotInBoundsError(0, 1, gbs.agesCost.BronzeAge.length, `for parameter "currentLevel" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for investorPercentage", () => {
      expect(() => GbProcess.ComputeLevelInvestment(10, "a", gbs.agesCost.BronzeAge, [])).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "investorPercentage" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb", () => {
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], "a", [])).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "gb" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for defaultParticipation", () => {
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge, "a")).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "defaultParticipation" of ${funcName}`)
      );
    });

    test("Throw error when key gb[3].cost are not found", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      delete deepCopy[3].cost;
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], deepCopy, [])).toThrow(
        Errors.KeyNotFoundError("cost", "gb[3]", `in "checkGbData" called by ${funcName}`)
      );
    });

    test("Throw error when key gb[3].reward are not found", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      delete deepCopy[3].reward;
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], deepCopy, [])).toThrow(
        Errors.KeyNotFoundError("reward", "gb[3]", `in "checkGbData" called by ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb[3]", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      deepCopy[3].cost = "a";
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], deepCopy, [])).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "gb[3].cost" of ${funcName}`)
      );
    });

    test("Throw error when invalid value for gb[3]", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      deepCopy[3].cost = -1;
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], deepCopy, [])).toThrow(
        Errors.BoundExceededError(Errors.AvailableBoundTypes["<"], -1, 0, `for parameter "gb[3].cost" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb[3].reward", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      deepCopy[3].reward = "a";
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], deepCopy, [])).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "gb[3].reward" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb[3].reward[1]", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      deepCopy[3].reward[1] = "a";
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], deepCopy, [])).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "gb[3].reward[1]" of ${funcName}`)
      );
    });

    test("Valid value with extra investors (2 snip for P1 and P2)", () => {
      const extraInvestors = [1069, 537];
      const result = GbProcess.ComputeLevelInvestment(42, [90, 90, 90, 90, 90], gbs.agesCost.TheFuture, extraInvestors);

      expect(result).toMatchSnapshot();
    });

    test("Valid value with extra investors", () => {
      const extraInvestors = [1, 75, 1];
      const result = GbProcess.ComputeLevelInvestment(
        56,
        [90, 90, 90, 90, 90],
        gbs.agesCost.PostmodernEra,
        extraInvestors
      );

      expect(result).toMatchSnapshot();
    });

    test("Valid value with investor that secure place", () => {
      const extraInvestors = [500];
      const result = GbProcess.ComputeLevelInvestment(
        18,
        [90, 90, 90, 90, 90],
        gbs.agesCost.PostmodernEra,
        extraInvestors
      );

      expect(result).toMatchSnapshot();
    });

    test("Valid value with investor that secure place with P1 780 instead of 181 and P3 10 instead of 29", () => {
      const extraInvestors = [780, 10];
      const result = GbProcess.ComputeLevelInvestment(
        10,
        [90, 90, 90, 90, 90],
        gbs.agesCost.PostmodernEra,
        extraInvestors
      );

      expect(result).toMatchSnapshot();
    });

    test("Throw error when sum of investment > level cost", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      expect(() => GbProcess.ComputeLevelInvestment(10, [0, 0, 0, 0, 0], deepCopy, [deepCopy[9].cost, 1, 1])).toThrow(
        Errors.BoundExceededError(
          Errors.AvailableBoundTypes[">"],
          deepCopy[9].cost + 2,
          deepCopy[9].cost,
          'for the sum of values of parameter "defaultParticipation" of ' +
            "ComputeLevelInvestment(currentLevel, investorPercentage, gb, defaultParticipation)"
        )
      );
    });
  });

  describe("ComputeLevelInvestmentRange", () => {
    const funcName = "ComputeLevelInvestmentRange(from, to, investorPercentage, gb)";

    test("Valid value", () => {
      const result = GbProcess.ComputeLevelInvestmentRange(1, 10, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge);

      expect(result).toMatchSnapshot();
    });

    test("Valid value with from > to", () => {
      const result = GbProcess.ComputeLevelInvestmentRange(10, 1, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge);

      expect(result).toBeTruthy();
    });

    test("Throw error when invalid value for from", () => {
      expect(() => GbProcess.ComputeLevelInvestmentRange(0, 10, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge)).toThrow(
        Errors.NotInBoundsError(0, 1, gbs.agesCost.BronzeAge.length, `for parameter "from" of ${funcName}`)
      );
    });

    test("Throw error when invalid value for to", () => {
      expect(() => GbProcess.ComputeLevelInvestmentRange(1, 0, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge)).toThrow(
        Errors.NotInBoundsError(0, 1, gbs.agesCost.BronzeAge.length, `for parameter "to" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb", () => {
      expect(() => GbProcess.ComputeLevelInvestmentRange(1, 10, [0, 0, 0, 0, 0], "a")).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "gb" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for investorPercentage", () => {
      expect(() => GbProcess.ComputeLevelInvestmentRange(1, 10, "a", gbs.agesCost.BronzeAge)).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "investorPercentage" of ${funcName}`)
      );
    });
  });

  describe("ComputeSecurePlace", () => {
    const funcName =
      "ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, " +
      "yourArcBonus, fpTargetReward)";

    test("Valid value", () => {
      const result = GbProcess.ComputeSecurePlace(1720, 860, 10, 50, 90, 245);

      expect(result).toEqual({ fp: 460, roi: 6 });
    });

    test("Valid value with unreachable place", () => {
      const result = GbProcess.ComputeSecurePlace(1720, 860, 0, 860, 90, 245);

      expect(result).toEqual({ fp: -1, roi: 0 });
    });

    test("Throw error when invalid type for levelCost", () => {
      expect(() => GbProcess.ComputeSecurePlace("a", 860, 10, 50, 90, 245)).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "levelCost" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for currentDeposits", () => {
      expect(() => GbProcess.ComputeSecurePlace(1720, "a", 10, 50, 90, 245)).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "currentDeposits" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for yourParticipation", () => {
      expect(() => GbProcess.ComputeSecurePlace(1720, 860, "a", 50, 90, 245)).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "yourParticipation" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for otherParticipation", () => {
      expect(() => GbProcess.ComputeSecurePlace(1720, 860, 10, "a", 90, 245)).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "otherParticipation" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for yourArcBonus", () => {
      expect(() => GbProcess.ComputeSecurePlace(1720, 860, 10, 50, "a", 245)).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "yourArcBonus" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for fpTargetReward", () => {
      expect(() => GbProcess.ComputeSecurePlace(1720, 860, 10, 50, 90, "a")).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "fpTargetReward" of ${funcName}`)
      );
    });
  });
});
