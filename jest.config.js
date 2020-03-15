module.exports = {
  testRegex: "/test/unit/.*.test.js$",
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    // process js with `babel-jest`
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  setupFiles: ["<rootDir>/test/unit/setup", "jest-localstorage-mock"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/components/graph-canvas/**",
    "!**/components/promotion-message-builder/**",
    "!**/components/import-promotion-message/**",
    "!**/scripts/numeral_custom_locals/**",
    "!**/coverage/**",
    "!**/dist/**",
    "!**/layouts/*.vue",
    "!**/layouts/_default/components/**",
    "!**/node_modules/**",
    "!**/middleware/**",
    "!**/pages/**",
    "!**/plugins/**",
    "!**/test/**",
    "!**/scripts/errors.js",
    "!**/*.config.js",
    "!**/components/**/script.js",
    "!**/components/number-input/**",
    "!**/layouts/**/script.js",
    "!**/scripts/tutorial.js",
    "!**/store/global.js",
    "!**/store/profile.js"
  ],
  coverageReporters: ["html", "text", "text-summary"]
};
