// jest setup file: Called for each test suite
// Configured by jest.config.js

// Heavily inspired by:
// https://github.com/wmde/wikibase-termbox/blob/dd01d0174491e07fa535e029006ad2e245eaa4b4/tests/config/setup.ts

// Rationale:
// ==========
//
// It happened several times that some unhandled promise rejections
// were not caught.
if (typeof process.env.FD_LISTENING_TO_UNHANDLED_REJECTION === 'undefined') {
  process.on('unhandledRejection', unhandledRejectionWarning => {
    throw unhandledRejectionWarning
  })
  // Avoid memory leak by adding too many listeners
  process.env.FD_LISTENING_TO_UNHANDLED_REJECTION = 'YES'
}

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

const VUE_WARN_TOKEN = '[Vue warn]'
const VUE_ERROR_TOKEN = '[Vue error]'

const _console__error = console.log // eslint-disable-line no-console

// eslint-disable-next-line no-console
console.error = (msg, ...params) => {
  _console__error(msg, params)

  if (msg.indexOf(VUE_WARN_TOKEN) > -1 || msg.indexOf(VUE_ERROR_TOKEN) > -1) {
    throw Error(
      'Detected a warning/error from Vue. This will fail the test that caused it. The causing error was logged above and right here: '
    )
  }
}
