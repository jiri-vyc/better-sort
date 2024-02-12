/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // The root directory that Jest should scan for tests and modules within
  rootDir: 'src',
  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
};

export default config;
