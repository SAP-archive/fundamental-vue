//https://github.com/FezVrasta/popper.js/issues/478
global.document = {}
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
})

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/__tests__/**/*.test.js'],
  modulePathIgnorePatterns: [
    // dist has to be ignored because it contains our build artefacts which should not be tested.
    '<rootDir>/dist',
    // removing the following line causes errors – jest cannot find the correct components and gets confused.
    '<rootDir>/vue-cli-plugin-fundamental'
  ],
  setupFiles: ['./jest.setup.js'],
  coverageDirectory: '.coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    // do not collect coverage from:
    '!**/node_modules/**', // node_modules
    '!src/docs/**', // docs
    '!**/__tests__/**/*.test.js', // tests
    '!**/__tests__/**/*.e2e.js', // end to end tests
    '!**/__tests__/pages/*' // e2e test pages
  ],
  coverageReporters: ['html', 'json', 'lcov', 'clover']
}
