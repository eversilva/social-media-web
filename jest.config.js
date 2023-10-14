module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts(x)'],
  rootDir: __dirname,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }
}