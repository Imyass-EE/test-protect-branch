const dotenv = require("dotenv")

dotenv.config({
  path: "./.env.test",
})

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage/",
  coverageProvider: "v8",
  coverageReporters: ["html", ["text", { skipFull: true }]],
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/dist/**",
    "!*.config.{ts,tsx,js,jsx}",
    "!**/types/*.d.{ts,tsx,js,jsx}",
  ],
}
