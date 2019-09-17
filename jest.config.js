module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  }
}; 