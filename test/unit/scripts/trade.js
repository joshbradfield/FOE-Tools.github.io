import ages from "../../../lib/foe-data/ages";
import * as Trade from "../../../scripts/trade";
import * as Errors from "../../../scripts/errors";

describe("Trade", () => {
  describe("splitGoods", () => {
    const funcName = "splitGoods(toValue, splitValue, ratioFromTo, ratioToFrom)";
    const errorValues = [
      // toValue
      {
        isTypeError: true, // false for bound error
        value: { toValue: "a", splitValue: 10, ratioFromTo: 2, ratioToFrom: 0.5 },
        valueType: "string",
        paramName: "toValue"
      },
      {
        isTypeError: false,
        value: { toValue: -1, splitValue: 10, ratioFromTo: 2, ratioToFrom: 0.5 },
        valueType: "number",
        paramName: "toValue"
      },

      // splitValue
      {
        isTypeError: true,
        value: { toValue: 105, splitValue: {}, ratioFromTo: 2, ratioToFrom: 0.5 },
        valueType: "object",
        paramName: "splitValue"
      },
      {
        isTypeError: false,
        value: { toValue: 105, splitValue: 0, ratioFromTo: 2, ratioToFrom: 0.5 },
        valueType: "number",
        paramName: "splitValue"
      },

      // ratioFromTo
      {
        isTypeError: true,
        value: { toValue: 105, splitValue: 10, ratioFromTo: false, ratioToFrom: 0.5 },
        valueType: "boolean",
        paramName: "ratioFromTo"
      },
      {
        isTypeError: false,
        value: { toValue: 105, splitValue: 10, ratioFromTo: -1, ratioToFrom: 0.5 },
        valueType: "number",
        paramName: "ratioFromTo"
      },

      // ratioToFrom
      {
        isTypeError: true,
        value: { toValue: 105, splitValue: 10, ratioFromTo: 2, ratioToFrom: "a" },
        valueType: "string",
        paramName: "ratioToFrom"
      },
      {
        isTypeError: false,
        value: { toValue: 105, splitValue: 10, ratioFromTo: 2, ratioToFrom: -1 },
        valueType: "number",
        paramName: "ratioToFrom"
      }
    ];

    test("Valid value with to > from", () => {
      const result = Trade.splitGoods(105, 10, 2, 0.5);
      expect(result).toEqual([{ from: 5, to: 10, count: 10 }, { from: 3, to: 5 }]);
    });

    test("Valid value with to > from and should have 1 pack", () => {
      const result = Trade.splitGoods(10, 10, 2, 0.5);
      expect(result).toEqual([{ from: 5, to: 10, count: 1 }, { from: 0, to: 0 }]);
    });

    test("Valid value with from > to", () => {
      const result = Trade.splitGoods(105, 10, 0.5, 2);
      expect(result).toEqual([{ from: 10, to: 5, count: 21 }, { from: 0, to: 0 }]);
    });

    for (let errorValue of errorValues) {
      test(`Throw error when invalid ${errorValue.isTypeError ? "type" : "bound"} for ${errorValue.paramName}`, () => {
        if (errorValue.isTypeError) {
          expect(() =>
            Trade.splitGoods(
              errorValue.value.toValue,
              errorValue.value.splitValue,
              errorValue.value.ratioFromTo,
              errorValue.value.ratioToFrom
            )
          ).toThrow(
            new Errors.InvalidTypeError({
              expected: "number",
              actual: errorValue.valueType,
              additionalMessage: `for parameter "${errorValue.paramName}" of ${funcName}`
            })
          );
        } else {
          expect(() =>
            Trade.splitGoods(
              errorValue.value.toValue,
              errorValue.value.splitValue,
              errorValue.value.ratioFromTo,
              errorValue.value.ratioToFrom
            )
          ).toThrow(
            new Errors.BoundExceededError({
              type: Errors.AvailableBoundTypes["<="],
              value: errorValue.value[errorValue.paramName],
              boundValue: 0,
              additionalMessage: `for parameter "${errorValue.paramName}" of ${funcName}`
            })
          );
        }
      });
    }
  });

  describe("getBestOffersSplitted", () => {
    const validAges = Object.keys(ages).slice(1);
    const funcName = "getBestOffersSplitted(tradeInput, iHave, iWant, amount, splitValue)";

    const errorValues = [
      // amount
      {
        isTypeError: true, // false for bound error
        value: {
          tradeInput: Trade.TradeArrayType.FAIR,
          iHave: ages.BronzeAge.key,
          iWant: ages.IronAge.key,
          amount: "a",
          splitValue: 1000
        },
        valueType: "string",
        paramName: "amount"
      },
      {
        isTypeError: false,
        value: {
          tradeInput: Trade.TradeArrayType.FAIR,
          iHave: ages.BronzeAge.key,
          iWant: ages.IronAge.key,
          amount: -1,
          splitValue: 1000
        },
        valueType: "number",
        paramName: "amount"
      },

      // splitValue
      {
        isTypeError: true,
        value: {
          tradeInput: Trade.TradeArrayType.FAIR,
          iHave: ages.BronzeAge.key,
          iWant: ages.IronAge.key,
          amount: 100,
          splitValue: "a"
        },
        valueType: "string",
        paramName: "splitValue"
      },
      {
        isTypeError: false,
        value: {
          tradeInput: Trade.TradeArrayType.FAIR,
          iHave: ages.BronzeAge.key,
          iWant: ages.IronAge.key,
          amount: 100,
          splitValue: -1
        },
        valueType: "number",
        paramName: "splitValue"
      }
    ];

    test("Valid value", () => {
      const result = Trade.getBestOffersSplitted(
        Trade.TradeArrayType.FAIR,
        ages.BronzeAge.key,
        ages.IronAge.key,
        100,
        1000
      );
      expect(result).toEqual([
        {
          amount: 200,
          key: "BronzeAge",
          split: [{ count: 1, from: 200, to: 100 }, { from: 0, to: 0 }]
        },
        { amount: 100, key: "IronAge" }
      ]);
    });

    test("Valid value with same age", () => {
      const result = Trade.getBestOffersSplitted(
        Trade.TradeArrayType.FAIR,
        ages.BronzeAge.key,
        ages.BronzeAge.key,
        100,
        1000
      );
      expect(result).toEqual([
        {
          amount: 100,
          key: "BronzeAge",
          split: [{ count: 1, from: 1000, to: 1000 }, { from: 0, to: 0 }]
        }
      ]);
    });

    test(`Valid value with start from ${ages.BronzeAge.key} to ${ages.VirtualFuture.key}`, () => {
      const result = Trade.getBestOffersSplitted(
        Trade.TradeArrayType.FAIR,
        ages.BronzeAge.key,
        ages.VirtualFuture.key,
        100,
        1000
      );
      expect(result).toEqual([
        {
          amount: 16096,
          key: "BronzeAge",
          split: [{ count: 16, from: 1000, to: 500 }, { from: 96, to: 48 }]
        },
        {
          amount: 8048,
          key: "IronAge",
          split: [{ count: 8, from: 1000, to: 500 }, { from: 48, to: 24 }]
        },
        {
          amount: 4024,
          key: "EarlyMiddleAges",
          split: [{ count: 4, from: 1000, to: 500 }, { from: 24, to: 12 }]
        },
        {
          amount: 2012,
          key: "HighMiddleAges",
          split: [{ count: 2, from: 1000, to: 500 }, { from: 12, to: 6 }]
        },
        {
          amount: 1006,
          key: "LateMiddleAges",
          split: [{ count: 1, from: 1000, to: 500 }, { from: 6, to: 3 }]
        },
        {
          amount: 503,
          key: "IndustrialAge",
          split: [{ count: 1, from: 503, to: 268 }, { from: 0, to: 0 }]
        },
        {
          amount: 268,
          key: "PostmodernEra",
          split: [{ count: 1, from: 268, to: 137 }, { from: 0, to: 0 }]
        },
        {
          amount: 137,
          key: "ArcticFuture",
          split: [{ count: 1, from: 137, to: 100 }, { from: 0, to: 0 }]
        },
        { amount: 100, key: "VirtualFuture" }
      ]);
    });

    test(`Valid value with start from ${ages.VirtualFuture.key} to ${ages.BronzeAge.key}`, () => {
      const result = Trade.getBestOffersSplitted(
        Trade.TradeArrayType.FAIR,
        ages.VirtualFuture.key,
        ages.BronzeAge.key,
        100,
        1000
      );
      expect(result).toEqual([
        {
          amount: 2,
          key: "VirtualFuture",
          split: [{ count: 1, from: 2, to: 2 }, { from: 0, to: 0 }]
        },
        {
          amount: 2,
          key: "Tomorrow",
          split: [{ count: 1, from: 2, to: 3 }, { from: 0, to: 0 }]
        },
        {
          amount: 3,
          key: "ModernEra",
          split: [{ count: 1, from: 3, to: 5 }, { from: 0, to: 0 }]
        },
        {
          amount: 5,
          key: "ColonialAge",
          split: [{ count: 1, from: 5, to: 7 }, { from: 0, to: 0 }]
        },
        {
          amount: 7,
          key: "LateMiddleAges",
          split: [{ count: 1, from: 7, to: 13 }, { from: 0, to: 0 }]
        },
        {
          amount: 13,
          key: "HighMiddleAges",
          split: [{ count: 1, from: 13, to: 25 }, { from: 0, to: 0 }]
        },
        {
          amount: 25,
          key: "EarlyMiddleAges",
          split: [{ count: 1, from: 25, to: 50 }, { from: 0, to: 0 }]
        },
        {
          amount: 50,
          key: "IronAge",
          split: [{ count: 1, from: 50, to: 100 }, { from: 0, to: 0 }]
        },
        { amount: 100, key: "BronzeAge" }
      ]);
    });

    test("Throw error when invalid type for tradeInput", () => {
      expect(() => Trade.getBestOffersSplitted("a", ages.BronzeAge.key, ages.IronAge.key, 100, 1000)).toThrow(
        new Errors.InvalidTypeError({
          expected: "TradeArray",
          actual: "string",
          additionalMessage:
            'for parameter "tradeInput" of getBestOffersSplitted(tradeInput, iHave, iWant, amount, splitValue)'
        })
      );
    });

    test("Throw error when invalid type for iHave", () => {
      expect(() => Trade.getBestOffersSplitted(Trade.TradeArrayType.FAIR, "a", ages.IronAge.key, 100, 1000)).toThrow(
        new Errors.InvalidTypeError({
          expected: validAges,
          actual: "a",
          additionalMessage: `for parameter "iHave" of ${funcName}`
        })
      );
    });

    test("Throw error when invalid type for iWant", () => {
      expect(() => Trade.getBestOffersSplitted(Trade.TradeArrayType.FAIR, ages.BronzeAge.key, "a", 100, 1000)).toThrow(
        new Errors.InvalidTypeError({
          expected: validAges,
          actual: "a",
          additionalMessage: `for parameter "iWant" of ${funcName}`
        })
      );
    });

    for (let errorValue of errorValues) {
      test(`Throw error when invalid ${errorValue.isTypeError ? "type" : "bound"} for ${errorValue.paramName}`, () => {
        if (errorValue.isTypeError) {
          expect(() =>
            Trade.getBestOffersSplitted(
              errorValue.value.tradeInput,
              errorValue.value.iHave,
              errorValue.value.iWant,
              errorValue.value.amount,
              errorValue.value.splitValue
            )
          ).toThrow(
            new Errors.InvalidTypeError({
              expected: "number",
              actual: errorValue.valueType,
              additionalMessage: `for parameter "${errorValue.paramName}" of ${funcName}`
            })
          );
        } else {
          expect(() =>
            Trade.getBestOffersSplitted(
              errorValue.value.tradeInput,
              errorValue.value.iHave,
              errorValue.value.iWant,
              errorValue.value.amount,
              errorValue.value.splitValue
            )
          ).toThrow(
            new Errors.BoundExceededError({
              type: Errors.AvailableBoundTypes["<="],
              value: errorValue.value[errorValue.paramName],
              boundValue: 0,
              additionalMessage: `for parameter "${errorValue.paramName}" of ${funcName}`
            })
          );
        }
      });
    }
  });
});
