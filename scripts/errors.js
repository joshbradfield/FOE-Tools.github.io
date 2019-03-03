const { Enum } = require("enumify");

class AvailableBoundTypes extends Enum {}
AvailableBoundTypes.initEnum(["<", "<=", "=", "!=", ">", ">="]);

export default {
  /**
   * Enum of the different available values for BoundExceededError
   *
   * @see {#BoundExceededError}
   */
  AvailableBoundTypes,

  /**
   * Error throw when argument are null or empty
   */
  NullOrEmptyArgError: { name: "NullOrEmptyArgError", message: "At least one argument is null or empty" },

  /**
   * Error throw when the type are invalid
   *
   * @param expected {array|string} Expected type
   * @param actual Current type
   * @param additionalMessage Additional message to provide more detail about the error (like parameter or methods name)
   * @returns {{name: string, message: string}}
   */
  InvalidTypeError(expected, actual, additionalMessage = undefined) {
    let expectedType;
    if (expected.constructor.name === "Array") {
      expectedType = '["' + expected.join('","') + '"]';
    } else {
      expectedType = `"${expected}"`;
    }
    return {
      name: "InvalidTypeError",
      message: `Invalid type${additionalMessage ? " " + additionalMessage : ""}, expected ${expectedType} but was "${
        typeof actual === "object" ? JSON.stringify(actual) : actual
      }"`
    };
  },

  /**
   * Error throw when the comparator size are invalid
   *
   * @see {utils#checkFormNumeric}
   */
  InvalidComparatorSize: {
    name: "InvalidComparatorSize",
    message: "Comparator should contains only two values"
  },

  /**
   * Error throw when the comparator are invalid
   *
   * @param firstParam {boolean} True if the error concerns the first parameter, false otherwise
   * @param value Value that cause the error
   * @returns {{name: string, message: string}}
   *
   * @see {utils#checkFormNumeric}
   */
  InvalidComparatorError(firstParam, value) {
    let message;
    if (firstParam) {
      message =
        "Invalid value or type for the first comparator value, " +
        'expected string with value "<", "<=", ">", ">=", "==" or "===" or a number but was "' +
        value +
        '"';
    } else {
      message = `Invalid type for the second comparator value, expected "number" but was "${value}"`;
    }

    return {
      name: "InvalidComparatorError",
      message
    };
  },

  /**
   * Error throw when a field is null
   *
   * @param field Parameter name in the function
   * @param funcName Name of the function
   * @returns {{name: string, message: string}}
   */
  FieldNullError(field, funcName) {
    return {
      name: "FieldNullError",
      message: `The field "${field}" in "${funcName}" cannot be null`
    };
  },

  /**
   * Error throw when a value is not between bounds
   *
   * @param value Value that cause the error
   * @param lowerBound Lower bound
   * @param upperBound Upper bound
   * @param additionalMessage Additional message to provide more detail about the error (like parameter or methods name)
   * @returns {{name: string, message: string}}
   */
  NotInBoundsError(value, lowerBound, upperBound, additionalMessage = undefined) {
    return {
      name: "NotInBoundsError",
      message: `Value "${value}" is not between ${lowerBound} and ${upperBound}${
        additionalMessage ? " " + additionalMessage : ""
      }`
    };
  },

  /**
   * Error throw when a value are not matched by a regex test.
   *
   * @param value Value that cause the error
   * @param regex The regular expression that value should match
   * @param additionalMessage Additional message to provide more detail about the error (like parameter or methods name)
   * @returns {{name: string, message: string}}
   */
  InvalidRegexMatchError(value, regex, additionalMessage = undefined) {
    return {
      name: "InvalidRegexMatchError",
      message: `Value "${value}" is not allowed. Should match ${regex}${
        additionalMessage ? " " + additionalMessage : ""
      }`
    };
  },

  /**
   * Error throw when the value is [<,<=,=,!=,>,>=] than boundValue
   *
   * @param type {AvailableBoundTypes} Type of the comparison, should be one of: [<,<=,=,!=,>,>=]
   * @param value Value that cause the error
   * @param boundValue Bound exceeded
   * @param additionalMessage Additional message to provide more detail about the error (like parameter or methods name)
   * @returns {{name: string, message: string}}
   */
  BoundExceededError(type, value, boundValue, additionalMessage) {
    return {
      name: "BoundExceededError",
      message: `"${value}" should not be ${type.name} than ${boundValue}${
        additionalMessage ? " " + additionalMessage : ""
      }`
    };
  },

  /**
   * Error throw when an object does not contain a key it should have.
   *
   * @param key {string} Type of the comparison, should be one of: [<,<=,=,!=,>,>=]
   * @param objectName {string} Value that cause the error
   * @param additionalMessage Additional message to provide more detail about the error (like parameter or methods name)
   * @returns {{name: string, message: string}}
   */
  KeyNotFoundError(key, objectName, additionalMessage) {
    return {
      name: "KeyNotFoundError",
      message: `"${key}" not found in ${objectName}${additionalMessage ? " " + additionalMessage : ""}`
    };
  },

  /**
   * Error throw when the key already exists in urlQuery in store.
   * @param key Key that already exists
   */
  keyAlreadyExistsInUrlQueryException(key) {
    return {
      name: "keyAlreadyExistsInUrlQueryException",
      message: `"${key}" already defined in state.urlQuery`
    };
  },

  /**
   * Error throw when the key already exists in urlQuery or in urlQueryNamespace in store.
   * @param key Key that already exists
   */
  keyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException(key) {
    return {
      name: "keyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException",
      message: `"${key}" already defined in state.urlQuery or state.urlQueryNamespace`
    };
  },

  /**
   * Error throw when a namespace are not found in urlQueryNamespace in store.
   * @param namespace Namespace that is not found
   */
  namespaceNotFoundException(namespace) {
    return {
      name: "namespaceNotFoundException",
      message: `"${namespace}" not found in state.urlQueryNamespace`
    };
  }
};
