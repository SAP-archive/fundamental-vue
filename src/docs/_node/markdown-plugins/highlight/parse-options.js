// @ts-check
const RE = /\s*{([^}]+)}/

/**
 * @param {string=} stringOptions –
 *   Should look something like this: 'js { highlightedLines: [1] }
 *   So anything between the curly braces should be something that becomes
 *   a valid JS-object when wrapped with curly braces. Which is what we do.
 * @return {Error | Object.<string, any>}
 */
const parse = stringOptions => {
  if (stringOptions == null) {
    return {}
  }
  if (!RE.test(stringOptions)) {
    return {}
  }

  const [, options] = Array.from(RE.exec(stringOptions) || [])
  try {
    return new Function(`return {${options}}`)()
  } catch (error) {
    return Error(
      `Fenced code block options '${stringOptions}' are invalid – the following error was caught when tryint to parse it: ${error}`
    )
  }
}

module.exports = parse
