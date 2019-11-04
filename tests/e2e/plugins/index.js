/* eslint-env node */
const Path = require('path')
const ansi = require('ansicolor')
module.exports = (on, config) => {
  on(`task`, {
    error(message) {
      // eslint-disable-next-line no-console
      console.error(ansi.red(message))
      process.stdout.write(`\u0007`) // make some noise: `beep`
      return null
    }
  })
  return Object.assign({}, config, {
    animationDistanceThreshold: 4,
    defaultCommandTimeout: 4000,
    env: {},
    execTimeout: 60000,
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: './',
    // integrationFolder: 'tests/e2e/specs',
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotsFolder: 'tests/e2e/screenshots',
    supportFile: 'tests/e2e/support/index.js',
    videoCompression: 32,
    videosFolder: 'tests/e2e/videos',
    videoUploadOnPasses: true,
    viewportHeight: 720,
    viewportWidth: 1280,
    testFiles: '**/__tests__/*.e2e.js',
    waitForAnimations: true,
    watchForFileChanges: true
  })
}
