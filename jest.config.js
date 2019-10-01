module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
  setupFilesAfterEnv: ["<rootDir>/scripts/jest/setupTests.ts"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
  }
}; 