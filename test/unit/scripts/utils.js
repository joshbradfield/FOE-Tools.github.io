import { i18next } from "../../../scripts/i18n";
import Utils from "../../../scripts/utils";
import Errors from "../../../scripts/errors";
import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

describe("Utils", () => {
  describe("getFormatedDuration", () => {
    test("1 year 2 months 25 days", () => {
      const duration = moment.duration({
        seconds: 7,
        minutes: 6,
        hours: 5,
        days: 4,
        weeks: 3,
        months: 2,
        years: 1
      });

      const result = Utils.getFormatedDuration(duration, i18next);

      expect(result).toBe("1 year 2 months 25 days");
    });

    test("2 years 1 month 1 day", () => {
      const duration = moment.duration({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 1,
        weeks: 0,
        months: 1,
        years: 2
      });

      const result = Utils.getFormatedDuration(duration, i18next);

      expect(result).toBe("2 years 1 month 1 day");
    });

    test("3 years 2 days", () => {
      const duration = moment.duration({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 2,
        weeks: 0,
        months: 0,
        years: 3
      });

      const result = Utils.getFormatedDuration(duration, i18next);

      expect(result).toBe("3 years 2 days");
    });

    test("1 month", () => {
      const duration = moment.duration({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        weeks: 0,
        months: 1,
        years: 0
      });

      const result = Utils.getFormatedDuration(duration, i18next);

      expect(result).toBe("1 month");
    });

    test("21 days", () => {
      const duration = moment.duration({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 21,
        weeks: 0,
        months: 0,
        years: 0
      });

      const result = Utils.getFormatedDuration(duration, i18next);

      expect(result).toBe("21 days");
    });

    test("Throw error when null duration", () => {
      expect(() => Utils.getFormatedDuration(null, i18next)).toThrow(Errors.NullOrEmptyArgError);
    });

    test("Throw error when empty duration string", () => {
      expect(() => Utils.getFormatedDuration("", i18next)).toThrow(Errors.NullOrEmptyArgError);
    });

    test("Throw error when empty duration object", () => {
      expect(() => Utils.getFormatedDuration({}, i18next)).toThrow(Errors.NullOrEmptyArgError);
    });

    test("Throw error when duration is an invalid object", () => {
      expect(() =>
        Utils.getFormatedDuration(
          {
            seconds: 7,
            minutes: 6,
            hours: 5,
            days: 4,
            weeks: 3,
            months: 2,
            years: 1
          },
          i18next
        )
      ).toThrow(Errors.InvalidTypeError("Duration", "Object"));
    });

    test("Throw error when null i18next", () => {
      expect(() => Utils.getFormatedDuration(null, i18next)).toThrow(Errors.NullOrEmptyArgError);
    });

    test("Throw error when empty i18next string", () => {
      expect(() => Utils.getFormatedDuration("", i18next)).toThrow(Errors.NullOrEmptyArgError);
    });

    test("Throw error when empty i18next object", () => {
      expect(() => Utils.getFormatedDuration({}, i18next)).toThrow(Errors.NullOrEmptyArgError);
    });
  });

  describe("inRange", () => {
    test("2 in range [1;3]", () => {
      expect(Utils.inRange(2, 1, 3)).toBe(true);
    });

    test("2 in range [3;1]", () => {
      expect(Utils.inRange(2, 3, 1)).toBe(true);
    });

    test("4 not in range [1;3]", () => {
      expect(Utils.inRange(4, 1, 3)).toBe(false);
    });

    test("Throw invalid type error when value is not a number", () => {
      expect(() => Utils.inRange("1", 2, 3)).toThrow(
        Errors.InvalidTypeError("number", {
          value: "string",
          lowerBound: "number",
          upperBound: "number"
        })
      );
    });

    test("Throw invalid type error when lowerBound is null", () => {
      expect(() => Utils.inRange(1, null, 3)).toThrow(
        Errors.InvalidTypeError("number", {
          value: "number",
          lowerBound: "object",
          upperBound: "number"
        })
      );
    });

    test("Throw invalid type error when upperBound is not a number", () => {
      expect(() => Utils.inRange(1, 2, () => false)).toThrow(
        Errors.InvalidTypeError("number", {
          value: "number",
          lowerBound: "number",
          upperBound: "function"
        })
      );
    });
  });

  describe("checkFormNumeric", () => {
    const inputComparatorValues = [["<", 6], ["<=", 5], [">", 4], [">=", 5], ["==", 5], ["===", 5]];

    for (const value of inputComparatorValues) {
      test(`[LOOP] Valid value with change, checkFormNumeric(5, 4, ${JSON.stringify(value)})`, () => {
        const result = Utils.checkFormNumeric(5, 4, value);

        expect(result).toMatchObject({
          value: 5,
          state: Utils.FormCheck.VALID
        });
      });
    }

    test("Valid float value with change", () => {
      const result = Utils.checkFormNumeric(5.3, 4, [">", 2], "float");

      expect(result).toMatchObject({
        value: 5.3,
        state: Utils.FormCheck.VALID
      });
    });

    test("Valid value with string value", () => {
      const result = Utils.checkFormNumeric("5", 4, [">", 2]);

      expect(result).toMatchObject({
        value: 5,
        state: Utils.FormCheck.VALID
      });
    });

    test("Valid value with value between bounds", () => {
      const result = Utils.checkFormNumeric(5, 4, [3, 7]);

      expect(result).toMatchObject({
        value: 5,
        state: Utils.FormCheck.VALID
      });
    });

    test("Valid value with string value and value between bounds", () => {
      const result = Utils.checkFormNumeric("5", 4, [3, 7]);

      expect(result).toMatchObject({
        value: 5,
        state: Utils.FormCheck.VALID
      });
    });

    test("Valid value with no change", () => {
      const result = Utils.checkFormNumeric(5, 5, [">", 2]);

      expect(result).toMatchObject({
        state: Utils.FormCheck.NO_CHANGE
      });
    });

    test("Invalid value", () => {
      const result = Utils.checkFormNumeric("a", 4, [">", 2]);

      expect(result).toMatchObject({
        state: Utils.FormCheck.INVALID
      });
    });

    test("Invalid current value", () => {
      const result = Utils.checkFormNumeric(5, "a", [">", 2]);

      expect(result).toMatchObject({
        state: Utils.FormCheck.INVALID
      });
    });

    test("Throw invalid comparator size when size of comparator array is not equal to 2", () => {
      expect(() => Utils.checkFormNumeric(5, 4, [">", ">", 2])).toThrow(Errors.InvalidComparatorSize);
    });

    test("Throw invalid comparator error when first parameter of comparator is not a valid string", () => {
      expect(() => Utils.checkFormNumeric(5, 4, ["a", 2])).toThrow(Errors.InvalidComparatorError(true, "a"));
    });

    test("Throw invalid comparator error when first parameter of comparator is not a number or a string", () => {
      expect(() => Utils.checkFormNumeric(5, 4, [[], 2])).toThrow(Errors.InvalidComparatorError(true, "object"));
    });

    test("Throw invalid comparator error when second parameter of comparator is not a number", () => {
      expect(() => Utils.checkFormNumeric(5, 4, [">", "a"])).toThrow(Errors.InvalidComparatorError(false, "string"));
    });

    test("Throw error when comparator is not an Array", () => {
      expect(() => Utils.checkFormNumeric(5, 4, 3)).toThrow(
        Errors.InvalidTypeError(
          "Array",
          "number",
          'for parameter "comparator" of checkFormNumeric(value, currentValue, comparator, type = "int")'
        )
      );
    });

    test("Throw invalid error type when type is invalid", () => {
      expect(() => Utils.checkFormNumeric(5, 4, [">", 2], "string")).toThrow(
        Errors.InvalidTypeError(["int", "float"], "string")
      );
    });
  });

  describe("splitArray", () => {
    test("Valid value split [1, 2, 3, 4, 5] into arrays with max size of 3", () => {
      const result = Utils.splitArray([1, 2, 3, 4, 5], 3);

      expect(result).toEqual([[1, 2, 3], [4, 5]]);
    });

    test(
      "Valid value split [1, 2, 3, 4, 5] into arrays with max size of 3 with " + "all arrays have the same length",
      () => {
        const result = Utils.splitArray([1, 2, 3, 4, 5], 3, true);

        expect(result).toEqual([[1, 2, 3], [4, 5, null]]);
      }
    );

    test("Throw invalid type error when arrayList is not an array", () => {
      expect(() => Utils.splitArray("a", 3)).toThrow(
        Errors.InvalidTypeError(
          "Array",
          "string",
          'for parameter "arrayList" of splitArray(arrayList, chunk, sameSize = false)'
        )
      );
    });

    test("Throw invalid type error when chunk is not a number", () => {
      expect(() => Utils.splitArray([1, 2, 3, 4, 5], "a")).toThrow(
        Errors.InvalidTypeError(
          "number",
          "string",
          'for parameter "chunk" of splitArray(arrayList, chunk, sameSize = false)'
        )
      );
    });
  });

  // For coverage
  describe("getDefaultCookieExpireTime", () => {
    test("Call for coverage", () => {
      const result = Utils.getDefaultCookieExpireTime();

      expect(result.constructor.name).toEqual("Date");
      expect(result.getFullYear()).toEqual(new Date().getFullYear() + 1);
    });
  });

  describe("handlerForm", () => {
    let cookies;
    let ctx;

    beforeEach(() => {
      cookies = [];
      ctx = {
        $data: {
          errors: []
        },
        $cookies: {
          set: jest.fn((key, value, param) => {
            cookies.push({ key, value, param });
          })
        }
      };
    });

    test("Valid value", () => {
      const result = Utils.handlerForm(ctx, "myKey", 5, 4, [">", 3]);

      expect(result).toEqual(Utils.FormCheck.VALID);
      expect(ctx.$data.errors.myKey).toBeFalsy();
      expect(ctx.$cookies.set.mock.calls.length).toBe(0);
      expect(cookies).toEqual([]);
    });

    test("Valid value and save in cookie", () => {
      const result = Utils.handlerForm(ctx, "myKey", 5, 4, [">", 3], true, "myKey");

      expect(result).toEqual(Utils.FormCheck.VALID);
      expect(ctx.$data.errors.myKey).toBeFalsy();
      expect(ctx.$cookies.set.mock.calls.length).toBe(1);
      expect(cookies).toEqual([
        {
          key: "myKey",
          param: {
            expires: cookies[0].param.expires, // We don't care
            path: "/"
          },
          value: 5
        }
      ]);
    });

    test("Valid value and save in cookie with key 'foo'", () => {
      const result = Utils.handlerForm(ctx, "myKey", 5, 4, [">", 3], true, "foo");

      expect(result).toEqual(Utils.FormCheck.VALID);
      expect(ctx.$data.errors.myKey).toBeFalsy();
      expect(ctx.$cookies.set.mock.calls.length).toBe(1);
      expect(cookies).toEqual([
        {
          key: "foo",
          param: {
            expires: cookies[0].param.expires, // We don't care
            path: "/"
          },
          value: 5
        }
      ]);
    });

    test("Valid value with float value and save in cookie with path '/foo'", () => {
      const result = Utils.handlerForm(ctx, "myKey", 5.3, 4, [">", 3], true, "foo", "float");

      expect(result).toEqual(Utils.FormCheck.VALID);
      expect(ctx.$data.errors.myKey).toBeFalsy();
      expect(ctx.$cookies.set.mock.calls.length).toBe(1);
      expect(cookies).toEqual([
        {
          key: "foo",
          param: {
            expires: cookies[0].param.expires, // We don't care
            path: "/"
          },
          value: 5.3
        }
      ]);
    });

    test("Throw invalid type error when ctx is not a valid object", () => {
      expect(() => Utils.handlerForm("a", "myKey", 5, 4, [">", 3])).toThrow(
        Errors.FieldNullError("ctx", "handlerForm")
      );
    });

    test("Throw field null error when ctx is null", () => {
      expect(() => Utils.handlerForm(null, "myKey", 5, 4, [">", 3])).toThrow(
        Errors.FieldNullError("ctx", "handlerForm")
      );
    });

    test("Throw invalid type error when cookieKey is not a string", () => {
      expect(() => Utils.handlerForm(ctx, "myKey", 5, 4, [">", 3], true, 2)).toThrow(
        Errors.InvalidTypeError(
          "string",
          "number",
          'for parameter "cookieKey" of handlerForm(ctx, key, value, currentValue, comparator, saveCookie = false, ' +
            'cookieKey = "", type = "int")'
        )
      );
    });
  });

  // For coverage
  describe("shadeRGBColor", () => {
    test("Valid value", () => {
      const result = Utils.shadeRGBColor("rgb(0, 12, 123)", 0.3);
      expect(result).toBe("rgb(77,85,163)");
    });

    test("Throw invalid color error when color is not in format rgb(0, 12, 123)", () => {
      expect(() => Utils.shadeRGBColor("rgb(0, 12, red)", 0.3)).toThrow(
        Errors.InvalidRegexMatchError("rgb(0, 12, red)", /rgb\s*\(\s*[0-9]+,\s*[0-9]+,\s*[0-9]+\s*\)/.toString())
      );
    });

    test("Throw not in bounds error when percent is not between -1.0 and 1.0", () => {
      expect(() => Utils.shadeRGBColor("rgb(0, 12, 123)", 10.3)).toThrow(
        Errors.NotInBoundsError(10.3, -1.0, 1.0, 'for parameter "percent" of shadeRGBColor(color, percent)')
      );
    });
  });

  describe("roundTo", () => {
    test("Valid value", () => {
      const result = Utils.roundTo(1 / 3, 2);
      expect(result).toStrictEqual(0.33);
    });

    test("Valid value with string value", () => {
      const result = Utils.roundTo("3e-1", 2);
      expect(result).toStrictEqual(0.3);
    });

    test("Valid value with scientific notation", () => {
      const result = Utils.roundTo(2e-2, 2);
      expect(result).toStrictEqual(0.02);
    });

    test("Throw invalid type error when num is not a number or string", () => {
      expect(() => Utils.roundTo({}, 2)).toThrow(Errors.InvalidTypeError(["number", "string"], "object"));
    });

    test("Throw invalid type error when num is not a valid string", () => {
      expect(() => Utils.roundTo("a", 2)).toThrow(
        Errors.InvalidRegexMatchError("a", /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/.toString())
      );
    });

    test("Throw invalid type error when scale is not a number", () => {
      expect(() => Utils.roundTo(1 / 3, "a")).toThrow(Errors.InvalidTypeError("number", "string"));
    });
  });

  describe("normalizeNumberValue", () => {
    test("Valid value", () => {
      const result = Utils.normalizeNumberValue(42);
      expect(result).toStrictEqual(42);
    });

    test("Valid value with non number", () => {
      const result = Utils.normalizeNumberValue("foo");
      expect(result).toStrictEqual(0);
    });

    test("Valid value with empty char", () => {
      const result = Utils.normalizeNumberValue("");
      expect(result).toStrictEqual(0);
    });

    test("Valid value with null", () => {
      const result = Utils.normalizeNumberValue(null);
      expect(result).toStrictEqual(0);
    });

    test("Valid value with null and custom default value", () => {
      const result = Utils.normalizeNumberValue(null, 42);
      expect(result).toStrictEqual(42);
    });

    test("Throw invalid type error when default value is not a number", () => {
      expect(() => Utils.normalizeNumberValue("foo", {})).toThrow(Errors.InvalidTypeError("number", "object"));
    });
  });

  describe("normalizeNumberArray", () => {
    test("Valid value", () => {
      const result = Utils.normalizeNumberArray([42, 42]);
      expect(result).toStrictEqual([42, 42]);
    });

    test("Valid value with non number", () => {
      const result = Utils.normalizeNumberArray([42, "foo"]);
      expect(result).toStrictEqual([42, 0]);
    });

    test("Valid value with empty char", () => {
      const result = Utils.normalizeNumberArray([42, ""]);
      expect(result).toStrictEqual([42, 0]);
    });

    test("Valid value with null", () => {
      const result = Utils.normalizeNumberArray([42, null]);
      expect(result).toStrictEqual([42, 0]);
    });

    test("Valid value with null and custom default value", () => {
      const result = Utils.normalizeNumberArray([42, null], 42);
      expect(result).toStrictEqual([42, 42]);
    });

    test("Throw invalid type error when value is not an array", () => {
      expect(() => Utils.normalizeNumberArray("foo")).toThrow(Errors.InvalidTypeError("Array", "string"));
    });

    test("Throw invalid type error when default value is not a number", () => {
      expect(() => Utils.normalizeNumberArray([42, null], {})).toThrow(Errors.InvalidTypeError("number", "object"));
    });
  });
});
