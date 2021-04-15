const { resolve } = require('path');

const root = resolve(__dirname, 'src');
module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  testMatch: ['<rootDir>/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>']
  /* moduleNameMapper: {
    "(.*)": "<rootDir>/$1"
  },  */
};
