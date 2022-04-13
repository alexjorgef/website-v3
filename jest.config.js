const path = require("path")

module.exports = {
  
  setupFilesAfterEnv: [
    path.resolve(__dirname, `./tests/setup-test-env.js`)
  ],
  transform: {
    "^.+\\.[jt]sx?$": `<rootDir>/tests/jest-preprocess.js`
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/tests/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby)/)`
  ],
  "moduleDirectories": [
    "node_modules",
    "<rootDir>/src"
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  collectCoverage: false,
  coverageReporters: [
    "lcov",
    "text",
    "html"
  ],
  setupFiles: [`<rootDir>/tests/loadershim.js`],
  verbose: true
}