/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts|tsx)$': '@swc/jest',
  },
  testTimeout: 3000,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};
