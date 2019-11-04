// @ts-check

/* eslint-env node */
/* eslint-disable no-console */
'use strict'

const parseResultFromSfc = require('./../src/tools/parse-result-from-sfc')

/** @type {import("webpack").loader.Loader} */
module.exports = function(source, map) {
  let parseResult = {}
  try {
    parseResult = parseResultFromSfc(source)
  } catch (error) {
    console.error('failed to parse sfc')
    console.groupCollapsed()
    console.log('source:', source)
    console.groupEnd()
    console.groupCollapsed()
    console.error(error)
    console.groupEnd()
  }
  this.callback(null /* no error */, 'export default ' + JSON.stringify(parseResult) + ';', map)
  return // requires per webpack docs
}
