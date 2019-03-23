// jest setup file: Called for each test suite
// Configured by jest.config.js

// Heavily inspired by:
// https://github.com/wmde/wikibase-termbox/blob/dd01d0174491e07fa535e029006ad2e245eaa4b4/tests/config/setup.ts

// Rationale:
// ==========
//
// It happened several times that some unhandled promise rejections
// were not caught.
if (typeof process.env.FD_LISTENING_TO_UNHANDLED_REJECTION === "undefined") {
  process.on("unhandledRejection", unhandledRejectionWarning => {
    throw unhandledRejectionWarning;
  });
  // Avoid memory leak by adding too many listeners
  process.env.FD_LISTENING_TO_UNHANDLED_REJECTION = "YES";
}
