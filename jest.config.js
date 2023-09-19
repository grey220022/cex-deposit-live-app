const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

function makeModuleNameMapper() {
  const { paths } = require("./tsconfig.json").compilerOptions;

  const aliases = {};

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace("/*", "/(.*)");
    const path = paths[item][0].replace("/*", "/$1");
    aliases[key] = "<rootDir>" + "/" + path;
  });

  return aliases;
}

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/tools/setEnvVars.js"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/layout.tsx"],
  moduleNameMapper: makeModuleNameMapper(),
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
