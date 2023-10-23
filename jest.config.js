const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts(x)'],
  rootDir: __dirname,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }
}

module.exports = createJestConfig(customJestConfig)