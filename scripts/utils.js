import moment from "moment";
import { Enum } from "enumify";
import Errors from "./errors";

class FormCheck extends Enum {}
FormCheck.initEnum(["VALID", "INVALID", "NO_CHANGE"]);

class MenuRecordType extends Enum {}
MenuRecordType.initEnum(["PAGE", "SEPARATOR", "MENU_ENTRY"]);

export default {
  /**
   * Enum of the different results of check
   */
  FormCheck,

  /**
   * Enum of the different type of menu record
   */
  MenuRecordType,

  /**
   * Regex used to get duration. Groups:
   * - 2: years
   * - 4: months
   * - 6: days
   */
  regex_duration: /((\d+) years?)?\s*((\d+) months?)?\s*((\d+) days?)?/,

  /**
   * Convert a moment duration in string
   * @param duration {Duration} Duration to convert
   * @param i18next {i18next} Reference of i18next instance to translate in good locale
   */
  getFormatedDuration(duration, i18next) {
    if (!duration || Object.keys(duration).length === 0 || !i18next || !i18next.t) {
      throw Errors.NullOrEmptyArgError;
    }

    if (!moment.isDuration(duration)) {
      throw Errors.InvalidTypeError("Duration", duration.constructor.name);
    }

    let match = this.regex_duration.exec(
      duration.format("y [years] M [months] d [days]", 0, {
        useToLocaleString: false
      })
    );

    let result = "";
    let value;
    if (match[2] !== undefined) {
      value = parseInt(match[2]);
      if (value > 0) {
        result += i18next.t("utils.moment.year", { count: value });
      }
    }

    if (match[4] !== undefined) {
      value = parseInt(match[4]);
      if (value > 0) {
        result += result.length > 0 ? " " : "";
        result += i18next.t("utils.moment.month", { count: value });
      }
    }

    if (match[6] !== undefined) {
      value = parseInt(match[6]);
      if (value > 0) {
        result += result.length > 0 ? " " : "";
        result += i18next.t("utils.moment.day", { count: value });
      }
    }

    return result;
  },

  /**
   * Check if a value it's in range. Bound are include.
   *
   * @param value {number} Value to check
   * @param lowerBound {number} Lower bound
   * @param upperBound {number} Upper bound
   * @returns {boolean} Return true if the value it's in range, false otherwise
   */
  inRange(value, lowerBound, upperBound) {
    if (typeof value !== "number" || typeof lowerBound !== "number" || typeof upperBound !== "number") {
      throw Errors.InvalidTypeError("number", {
        value: typeof value,
        lowerBound: typeof lowerBound,
        upperBound: typeof upperBound
      });
    }

    if (lowerBound > upperBound) {
      return value >= upperBound && value <= lowerBound;
    }
    return value >= lowerBound && value <= upperBound;
  },

  /**
   * Check if an value is valid
   *
   * @param value {number} Value to check
   * ("<", "<=", ">", ">=", "==" or "===") or a number. The second is a number.
   * @param currentValue {number} The current value
   * @param comparator {Array} Array that contains two elements. The first is a string that corresponding to an operator
   * which can be "<", "<=", ">", ">=", "==" or "===".
   * It can also be a number that corresponding to the lower bound (included).
   * The second parameter is always an Integer, if the first parameter is a string, this parameter corresponding to
   * the value to check. If the first parameter is a number, this parameter corresponding to the upper bound (included)
   * @param type {string} Type of the result value (must be 'int' or 'float')
   * @returns {object} Return an object that contains a "state" attribute for every cases (the type is {#FormCheck}),
   * and for VALID state, it return a "value" attribute.
   */
  checkFormNumeric(value, currentValue, comparator, type = "int") {
    let valid = false;

    if (!(comparator instanceof Array)) {
      throw Errors.InvalidTypeError(
        "Array",
        typeof comparator,
        'for parameter "comparator" of checkFormNumeric(value, currentValue, comparator, type = "int")'
      );
    } else if (comparator.length !== 2) {
      throw Errors.InvalidComparatorSize;
    }

    if (typeof comparator[0] === "string") {
      if (["<", "<=", ">", ">=", "==", "==="].indexOf(comparator[0]) < 0) {
        throw Errors.InvalidComparatorError(true, comparator[0]);
      }
    } else if (typeof comparator[0] !== "number") {
      throw Errors.InvalidComparatorError(true, typeof comparator[0]);
    }

    if (typeof comparator[1] !== "number") {
      throw Errors.InvalidComparatorError(false, typeof comparator[1]);
    }

    if (["int", "float"].indexOf(type) < 0) {
      throw Errors.InvalidTypeError(["int", "float"], type);
    }

    if (!isNaN(value) && !isNaN(currentValue)) {
      let resultValue;
      switch (type.toLowerCase()) {
        case "int":
          resultValue = parseInt(value);
          break;
        case "float":
          resultValue = parseFloat(value);
          break;
      }

      if (typeof comparator[0] === typeof comparator[1] && typeof comparator[0] === "number") {
        valid = this.inRange(resultValue, comparator[0], comparator[1]);
      } else {
        switch (comparator[0]) {
          case "<":
            valid = resultValue < comparator[1];
            break;
          case "<=":
            valid = resultValue <= comparator[1];
            break;
          case ">":
            valid = resultValue > comparator[1];
            break;
          case ">=":
            valid = resultValue >= comparator[1];
            break;
          case "==":
            valid = resultValue == comparator[1];
            break;
          case "===":
            valid = resultValue === comparator[1];
            break;
        }
      }

      if (valid) {
        if (resultValue !== currentValue) {
          return { state: FormCheck.VALID, value: resultValue };
        }
      }
    }

    if (!valid) {
      return { state: FormCheck.INVALID };
    }

    return { state: FormCheck.NO_CHANGE };
  },

  /**
   * Split an array into sub-array
   * @param arrayList {Array} Array to split
   * @param chunk {number} Number of elements by sub-array
   * @param sameSize {boolean} True to fill the last sub-array with 'null' value to have the same size of others,
   * False otherwise (default: False)
   * @returns {Array} Return an Array that contains @chunk sub-array
   */
  splitArray(arrayList, chunk, sameSize = false) {
    if (!(arrayList instanceof Array)) {
      throw Errors.InvalidTypeError(
        "Array",
        typeof arrayList,
        'for parameter "arrayList" of splitArray(arrayList, chunk, sameSize = false)'
      );
    }

    if (typeof chunk !== "number") {
      throw Errors.InvalidTypeError(
        "number",
        typeof chunk,
        'for parameter "chunk" of splitArray(arrayList, chunk, sameSize = false)'
      );
    }

    let result = [];

    for (let i = 0, j = arrayList.length; i < j; i += chunk) {
      result.push(arrayList.slice(i, i + chunk));
    }

    if (sameSize) {
      while (result[result.length - 1].length < chunk) {
        result[result.length - 1].push(null);
      }
    }

    return result;
  },

  /**
   * Get the date in a year
   * @returns {Date} Return current date plus one year
   */
  getDefaultCookieExpireTime() {
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date;
  },

  /**
   * Check if an form numeric element are valid.
   * @param ctx {object} Reference of the Vue context
   * @param key {string} Key of the element
   * @param value {number} Value to check
   * ("<", "<=", ">", ">=", "==" or "===") or a number. The second is a number.
   * @param currentValue {number} The current value
   * @param comparator {Array} Array that contains two elements. The first is a string that corresponding to an operator
   * @param saveCookie {boolean} Key used to save value in a cookie if valid
   * @param cookiePath {string} Path of the cookie
   * @param type {string} Type of the result value (must be 'int' or 'float')
   * @return {FormCheck} Return the state of the data ("VALID", "INVALID", "NO_CHANGE")
   */
  handlerForm(ctx, key, value, currentValue, comparator, saveCookie = false, cookiePath = "", type = "int") {
    if (
      !ctx ||
      ctx === null ||
      !ctx.$data ||
      ctx.$data === null ||
      !ctx.$data.errors ||
      ctx.$data.errors === null ||
      !ctx.$cookies ||
      ctx.$cookies === null ||
      !ctx.$cookies.set ||
      ctx.$data.$cookies === null
    ) {
      throw Errors.FieldNullError("ctx", "handlerForm");
    }

    if (typeof cookiePath !== "string") {
      throw Errors.InvalidTypeError(
        "string",
        typeof cookiePath,
        'for parameter "cookiePath" of handlerForm(ctx, key, value, currentValue, comparator, saveCookie = false, ' +
          'cookiePath = "", type = "int")'
      );
    }

    let result = this.checkFormNumeric(value, currentValue, comparator, type);
    ctx.$data.errors[key] = result.state === FormCheck.INVALID;
    if (saveCookie && result.state === FormCheck.VALID) {
      ctx.$cookies.set(key, result.value, {
        path: cookiePath,
        expires: this.getDefaultCookieExpireTime()
      });
    }
    return result.state;
  },

  /**
   * Copied here: https://stackoverflow.com/a/13542669
   * @param color {string} Color to shade/light with format: rgb(red,green,blue)
   * @param {number} percent Percent to shade (between -1.0 (dark) and 1.0 (light))
   * @returns {string} Return shade color in same format that input
   */
  shadeRGBColor(color, percent) {
    const regexColor = /rgb\s*\(\s*[0-9]+,\s*[0-9]+,\s*[0-9]+\s*\)/;
    if (!regexColor.test(color)) {
      throw Errors.InvalidRegexMatchError(color, regexColor.toString());
    }

    if (!this.inRange(percent, -1.0, 1.0)) {
      throw Errors.NotInBoundsError(percent, -1.0, 1.0, 'for parameter "percent" of shadeRGBColor(color, percent)');
    }

    const f = color.split(",");
    const t = percent < 0 ? 0 : 255;
    const p = percent < 0 ? percent * -1 : percent;
    const R = parseInt(f[0].slice(4), 10);
    const G = parseInt(f[1], 10);
    const B = parseInt(f[2], 10);
    return `rgb(${Math.round((t - R) * p) + R},${Math.round((t - G) * p) + G},${Math.round((t - B) * p) + B})`;
  },

  /**
   * Round a number to n digits.
   * Copyed here: https://stackoverflow.com/a/12830454
   * @param {number} num Number to round
   * @param {number} scale Number of digits
   * @returns {number} Return the number rounded
   */
  roundTo(num, scale) {
    if (["number", "string"].indexOf(typeof num) < 0) {
      throw Errors.InvalidTypeError(["number", "string"], typeof num);
    }

    if (typeof scale !== "number") {
      throw Errors.InvalidTypeError("number", typeof scale);
    }

    const inputNumRegex = /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/;
    if (!inputNumRegex.test(num)) {
      throw Errors.InvalidRegexMatchError(num, inputNumRegex.toString());
    }

    if (!("" + num).includes("e")) {
      return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
      let arr = ("" + num).split("e");
      let sig = "";
      if (+arr[1] + scale > 0) {
        sig = "+";
      }
      return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
  },

  /**
   * Normalize a value that should be a number. If it is not a number, it be replaced by a default value.
   * @param value Value to check
   * @param {number} defaultValue Default value to use if #value are not a valid number
   * @returns {number} Return a number "normalized"
   */
  normalizeNumberValue(value, defaultValue = 0) {
    if (typeof defaultValue !== "number") {
      throw Errors.InvalidTypeError("number", typeof defaultValue);
    }
    return !value || value.length === 0 || typeof value !== "number" ? defaultValue : value;
  },

  /**
   * Normalize an array that should contains number. if its values are not a number, it be replaced bad values
   * by a default array.
   * @param {array} array Array to check
   * @param {number} defaultValue Default array to use if #array are not a valid number
   * @returns {array} Return a number "normalized"
   */
  normalizeNumberArray(array, defaultValue = 0) {
    if (!(array instanceof Array)) {
      throw Errors.InvalidTypeError("Array", typeof array);
    }
    if (typeof defaultValue !== "number") {
      throw Errors.InvalidTypeError("number", typeof defaultValue);
    }

    return array.map(k => this.normalizeNumberValue(k, defaultValue));
  },

  /* istanbul ignore next */
  /**
   * Copied from: https://gist.github.com/eloone/11342252#file-binaryinsert-js
   * @param value {number} Value to insert
   * @param array {array} Array where insert value
   * @param startVal {number} Index where we start
   * @param endVal {number} Index where we end
   */
  binaryInsert: /* istanbul ignore next */ function(value, array, startVal, endVal) {
    let length = array.length;
    let start = typeof startVal !== "undefined" ? startVal : 0;
    let end = typeof endVal !== "undefined" ? endVal : length - 1; //!! endVal could be 0 don't use || syntax
    let m = start + Math.floor((end - start) / 2);

    if (length === 0) {
      array.push(value);
      return;
    }

    if (value > array[end]) {
      array.splice(end + 1, 0, value);
      return;
    }

    if (value < array[start]) {
      //!!
      array.splice(start, 0, value);
      return;
    }

    if (start >= end) {
      return;
    }

    if (value < array[m]) {
      this.binaryInsert(value, array, start, m - 1);
      return;
    }

    if (value > array[m]) {
      this.binaryInsert(value, array, m + 1, end);
      return;
    }

    //we don't insert duplicates
  }
};
