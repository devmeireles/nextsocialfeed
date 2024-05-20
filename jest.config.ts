import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFiles: ['<rootDir>/setVenVars.ts'],
};

export default createJestConfig(config);