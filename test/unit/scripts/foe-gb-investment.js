import gbs from "../../../lib/foe-data/gbs";
import GbProcess from "../../../scripts/foe-gb-investment";
import Errors from "../../../scripts/errors";

describe("FoeGbInvestment", () => {
  describe("Submit", () => {
    const funcName = "Submit(currentLevel, investorPercentage, gb, defaultParticipation)";

    test("Valid value", () => {
      const result = GbProcess.Submit(10, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge, [0, 0, 0, 0, 0]);

      expect(result).toEqual({
        cost: 510,
        investment: [
          { cumulativeInvestment: 455, participation: 55, preparation: 400, reward: 55 },
          { cumulativeInvestment: 485, participation: 30, preparation: 400, reward: 30 },
          { cumulativeInvestment: 500, participation: 10, preparation: 405, reward: 10 },
          { cumulativeInvestment: 505, participation: 5, preparation: 405, reward: 5 },
          { cumulativeInvestment: 510, participation: 0, preparation: 410, reward: 0 }
        ],
        level: 10,
        totalPreparations: 410
      });
    });

    test("Throw error when invalid type for currentLevel", () => {
      expect(() => GbProcess.Submit("a", [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge, [0, 0, 0, 0, 0])).toThrow(
        Errors.InvalidTypeError("number", {
          value: "string",
          lowerBound: "number",
          upperBound: "number"
        })
      );
    });

    test("Throw error when invalid value for currentLevel", () => {
      expect(() => GbProcess.Submit(0, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge, [0, 0, 0, 0, 0])).toThrow(
        Errors.NotInBoundsError(0, 1, gbs.agesCost.BronzeAge.length, `for parameter "currentLevel" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for investorPercentage", () => {
      expect(() => GbProcess.Submit(10, "a", gbs.agesCost.BronzeAge, [0, 0, 0, 0, 0])).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "investorPercentage" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb", () => {
      expect(() => GbProcess.Submit(10, [0, 0, 0, 0, 0], "a", [0, 0, 0, 0, 0])).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "gb" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for defaultParticipation", () => {
      expect(() => GbProcess.Submit(10, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge, "a")).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "defaultParticipation" of ${funcName}`)
      );
    });

    test("Throw error when key gb[3].cost are not found", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      delete deepCopy[3].cost;
      expect(() => GbProcess.Submit(10, [0, 0, 0, 0, 0], deepCopy, [0, 0, 0, 0, 0])).toThrow(
        Errors.KeyNotFoundError("cost", "gb[3]", `in "checkGbData" called by ${funcName}`)
      );
    });

    test("Throw error when key gb[3].reward are not found", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      delete deepCopy[3].reward;
      expect(() => GbProcess.Submit(10, [0, 0, 0, 0, 0], deepCopy, [0, 0, 0, 0, 0])).toThrow(
        Errors.KeyNotFoundError("reward", "gb[3]", `in "checkGbData" called by ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb[3]", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      deepCopy[3].cost = "a";
      expect(() => GbProcess.Submit(10, [0, 0, 0, 0, 0], deepCopy, [0, 0, 0, 0, 0])).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "gb[3].cost" of ${funcName}`)
      );
    });

    test("Throw error when invalid value for gb[3]", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      deepCopy[3].cost = -1;
      expect(() => GbProcess.Submit(10, [0, 0, 0, 0, 0], deepCopy, [0, 0, 0, 0, 0])).toThrow(
        Errors.BoundExceededError(Errors.AvailableBoundTypes["<"], -1, 0, `for parameter "gb[3].cost" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb[3].reward", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      deepCopy[3].reward = "a";
      expect(() => GbProcess.Submit(10, [0, 0, 0, 0, 0], deepCopy, [0, 0, 0, 0, 0])).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "gb[3].reward" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb[3].reward[1]", () => {
      const deepCopy = JSON.parse(JSON.stringify(gbs.agesCost.BronzeAge));
      deepCopy[3].reward[1] = "a";
      expect(() => GbProcess.Submit(10, [0, 0, 0, 0, 0], deepCopy, [0, 0, 0, 0, 0])).toThrow(
        Errors.InvalidTypeError("number", "string", `for parameter "gb[3].reward[1]" of ${funcName}`)
      );
    });

    test("Throw error when defaultParticipation contains invalid value", () => {
      expect(() => GbProcess.Submit(1, [90, 90, 90, 90, 90], gbs.agesCost.VirtualFuture, [50, 50, 50, 50, 50])).toThrow(
        Errors.InvalidParticipationException(2)
      );
    });
  });

  describe("SubmitRange", () => {
    const funcName = "SubmitRange(from, to, investorPercentage, gb)";

    test("Valid value", () => {
      const result = GbProcess.SubmitRange(1, 10, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge);

      expect(result).toEqual({
        global: { cost: 2500, totalPreparations: 2025 },
        levels: [
          {
            cost: 40,
            investment: [
              { cumulativeInvestment: 35, participation: 5, preparation: 30, reward: 5 },
              { cumulativeInvestment: 40, participation: 5, preparation: 30, reward: 5 },
              { cumulativeInvestment: 40, participation: 0, preparation: 30, reward: 0 },
              { cumulativeInvestment: 40, participation: 0, preparation: 30, reward: 0 },
              { cumulativeInvestment: 40, participation: 0, preparation: 30, reward: 0 }
            ],
            level: 1,
            totalPreparations: 30
          },
          {
            cost: 60,
            investment: [
              { cumulativeInvestment: 50, participation: 10, preparation: 40, reward: 10 },
              { cumulativeInvestment: 55, participation: 5, preparation: 40, reward: 5 },
              { cumulativeInvestment: 60, participation: 0, preparation: 45, reward: 0 },
              { cumulativeInvestment: 60, participation: 0, preparation: 45, reward: 0 },
              { cumulativeInvestment: 60, participation: 0, preparation: 45, reward: 0 }
            ],
            level: 2,
            totalPreparations: 45
          },
          {
            cost: 100,
            investment: [
              { cumulativeInvestment: 90, participation: 10, preparation: 80, reward: 10 },
              { cumulativeInvestment: 95, participation: 5, preparation: 80, reward: 5 },
              { cumulativeInvestment: 100, participation: 0, preparation: 85, reward: 0 },
              { cumulativeInvestment: 100, participation: 0, preparation: 85, reward: 0 },
              { cumulativeInvestment: 100, participation: 0, preparation: 85, reward: 0 }
            ],
            level: 3,
            totalPreparations: 85
          },
          {
            cost: 150,
            investment: [
              { cumulativeInvestment: 135, participation: 15, preparation: 120, reward: 15 },
              { cumulativeInvestment: 145, participation: 10, preparation: 120, reward: 10 },
              { cumulativeInvestment: 150, participation: 5, preparation: 120, reward: 5 },
              { cumulativeInvestment: 150, participation: 0, preparation: 120, reward: 0 },
              { cumulativeInvestment: 150, participation: 0, preparation: 120, reward: 0 }
            ],
            level: 4,
            totalPreparations: 120
          },
          {
            cost: 210,
            investment: [
              { cumulativeInvestment: 185, participation: 25, preparation: 160, reward: 25 },
              { cumulativeInvestment: 200, participation: 15, preparation: 160, reward: 15 },
              { cumulativeInvestment: 205, participation: 5, preparation: 160, reward: 5 },
              { cumulativeInvestment: 210, participation: 0, preparation: 165, reward: 0 },
              { cumulativeInvestment: 210, participation: 0, preparation: 165, reward: 0 }
            ],
            level: 5,
            totalPreparations: 165
          },
          {
            cost: 270,
            investment: [
              { cumulativeInvestment: 240, participation: 30, preparation: 210, reward: 30 },
              { cumulativeInvestment: 255, participation: 15, preparation: 210, reward: 15 },
              { cumulativeInvestment: 265, participation: 5, preparation: 215, reward: 5 },
              { cumulativeInvestment: 270, participation: 0, preparation: 220, reward: 0 },
              { cumulativeInvestment: 270, participation: 0, preparation: 220, reward: 0 }
            ],
            level: 6,
            totalPreparations: 220
          },
          {
            cost: 330,
            investment: [
              { cumulativeInvestment: 295, participation: 35, preparation: 260, reward: 35 },
              { cumulativeInvestment: 315, participation: 20, preparation: 260, reward: 20 },
              { cumulativeInvestment: 325, participation: 5, preparation: 265, reward: 5 },
              { cumulativeInvestment: 330, participation: 0, preparation: 270, reward: 0 },
              { cumulativeInvestment: 330, participation: 0, preparation: 270, reward: 0 }
            ],
            level: 7,
            totalPreparations: 270
          },
          {
            cost: 380,
            investment: [
              { cumulativeInvestment: 340, participation: 40, preparation: 300, reward: 40 },
              { cumulativeInvestment: 360, participation: 20, preparation: 300, reward: 20 },
              { cumulativeInvestment: 375, participation: 5, preparation: 310, reward: 5 },
              { cumulativeInvestment: 380, participation: 0, preparation: 315, reward: 0 },
              { cumulativeInvestment: 380, participation: 0, preparation: 315, reward: 0 }
            ],
            level: 8,
            totalPreparations: 315
          },
          {
            cost: 450,
            investment: [
              { cumulativeInvestment: 405, participation: 45, preparation: 360, reward: 45 },
              { cumulativeInvestment: 430, participation: 25, preparation: 360, reward: 25 },
              { cumulativeInvestment: 440, participation: 10, preparation: 360, reward: 10 },
              { cumulativeInvestment: 445, participation: 5, preparation: 360, reward: 5 },
              { cumulativeInvestment: 450, participation: 0, preparation: 365, reward: 0 }
            ],
            level: 9,
            totalPreparations: 365
          },
          {
            cost: 510,
            investment: [
              { cumulativeInvestment: 455, participation: 55, preparation: 400, reward: 55 },
              { cumulativeInvestment: 485, participation: 30, preparation: 400, reward: 30 },
              { cumulativeInvestment: 500, participation: 10, preparation: 405, reward: 10 },
              { cumulativeInvestment: 505, participation: 5, preparation: 405, reward: 5 },
              { cumulativeInvestment: 510, participation: 0, preparation: 410, reward: 0 }
            ],
            level: 10,
            totalPreparations: 410
          }
        ]
      });
    });

    test("Valid value with from > to", () => {
      const result = GbProcess.SubmitRange(10, 1, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge);

      expect(result).toBeTruthy();
    });

    test("Throw error when invalid value for from", () => {
      expect(() => GbProcess.SubmitRange(0, 10, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge)).toThrow(
        Errors.NotInBoundsError(0, 1, gbs.agesCost.BronzeAge.length, `for parameter "from" of ${funcName}`)
      );
    });

    test("Throw error when invalid value for to", () => {
      expect(() => GbProcess.SubmitRange(1, 0, [0, 0, 0, 0, 0], gbs.agesCost.BronzeAge)).toThrow(
        Errors.NotInBoundsError(0, 1, gbs.agesCost.BronzeAge.length, `for parameter "to" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for gb", () => {
      expect(() => GbProcess.SubmitRange(1, 10, [0, 0, 0, 0, 0], "a")).toThrow(
        Errors.InvalidTypeError("Array", "string", `for parameter "gb" of ${funcName}`)
      );
    });

    test("Throw error when invalid type for investorPercentage", () => {
      expect(() => GbProcess.SubmitRange(1, 10, "a", gbs.agesCost.BronzeAge)).toThrow(
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
