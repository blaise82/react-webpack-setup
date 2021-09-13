module.export = {
    roots: ["<rootDir>/src"],
    transform: {
      "\\.(js|jsx)?$": "babel-jest",
    },
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/src/**/>(*.)test.{js, jsx}"],
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    testPathIgnorePatterns: [
      "/node_modules/",
      "/public/",
      "/src/helpers/roleHelper.js",
    ],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect",
      "@testing-library/react/cleanup-after-each"
    ],
  };