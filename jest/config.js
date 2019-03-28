module.exports = {
  rootDir: "../",
  moduleDirectories: ["node_modules", "jest/utils"],
  setupFilesAfterEnv: ["<rootDir>/jest/setup.js"],
  collectCoverageFrom: ["src/components/**/*.js"],
  coverageReporters: ["text-summary", "lcov"]
};
