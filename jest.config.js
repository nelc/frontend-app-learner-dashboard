const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('jest', {
  setupFilesAfterEnv: [
    'jest-expect-message',
    '<rootDir>/src/setupTest.jsx',
  ],
  modulePaths: ['<rootDir>/src/'],
  coveragePathIgnorePatterns: [
    'src/segment.js',
    'src/postcss.config.js',
    'testUtils', // don't unit test jest mocking tools
    'src/data/services/lms/fakeData', // don't unit test mock data
    'src/test', // don't unit test integration test utils
  ],
  testTimeout: 120000,
  testEnvironment: 'jsdom',
});

module.exports.transformIgnorePatterns = [
  '/node_modules/(?!(@edx|@edunext|@openedx))',
];

module.exports.transform["^.+\\.[tj]sx?$"] = [
  'ts-jest',
  {
    isolatedModules: true,
    diagnostics: false,
    tsconfig: {
      jsx: 'react-jsx',
      esModuleInterop: true,
      allowSyntheticDefaultImports: true
    }
  }
]
