// @ts-check
/* eslint-env node */
/* eslint-disable no-console */
'use strict'
const { parseQuery } = require('loader-utils')
const toVueComponent = require('./../src/docs/_node/markdown/to-vue-component')

const Md = require('./../src/docs/_node/markdown/mdh')

/**
 * @typedef {import("@vuese/parser").ParserResult} ParserResult
 * @typedef {import("@vuese/parser").PropsResult} PropsResult
 * @typedef {import("@vuese/parser").EventResult} EventResult
 * @typedef {import("@vuese/parser").SlotResult} SlotResult
 */

/** @param {ParserResult} result */
const createComponentApiMixinCode = result => {
  let code = ''
  code += '{\n'
  code += ' data() {\n'
  code += '  return {\n'
  code += `    fddComponentApi: ${JSON.stringify(result)}\n`
  code += '  };\n'
  code += ' }\n'
  code += '}\n'
  return code
}

/** @param {ParserResult} result */
const getDescription = result => {
  const { componentDesc = { default: [] } } = result
  return componentDesc.default
}

/** @param {PropsResult} prop */
const renderProp = prop => {
  const md = new Md()
  md.h(3, prop.name)
    .nl()
    .lines(prop.describe, { wrap: true })
    .nl()
    .strong('Type:')
    .raw('&nbsp;')
    .code(prop.type, { defaultValue: 'not specified' })
    .nl()
    .nl()
    .lines(prop.typeDesc, { wrap: true })
    .strong('Default:')
    .raw('&nbsp;')
    .code(prop.default || '–')
    .nl()
    .lines(prop.defaultDesc, { wrap: true })
  return md.text
}

/** @param {EventResult} event */
const renderEvent = event => {
  const md = new Md()
  md.h(3, event.name)
    .nl()
    .lines(event.describe, { wrap: true })
    .nl()
  if (event.isSync) {
    md.raw(`<FdBadge filled>syncs ${event.syncProp}</FdBadge>`).nl()
  }
  md.nl()
    .strong('Arguments:')
    .nl()
  const args = (event.argumentsDesc || []).map(arg => `- ${arg}`)
  md.lines(args, { wrap: true })
  md.nl()
  return md.text
}

/** @param {SlotResult} slot */
const renderSlot = slot => {
  const md = new Md()
  md.h(3, slot.name).nl()
  if (slot.scoped) {
    md.raw(`<FdBadge filled>scoped</FdBadge>`).nl()
  }
  md.lines([slot.describe], { wrap: true }).nl()
  return md.text
}
/** @param {SlotResult[]} slots */
const renderSlots = slots => {
  if (slots.length === 0) {
    return ''
  }
  const md = new Md()
  md.h(2, 'Slots')
    .nl()
    .nl()
    .lines(slots.map(renderSlot), { wrap: true })
  return md.text
}
/** @param {EventResult[]} events */
const renderEvents = events => {
  if (events == null) {
    return ''
  }
  if (events.length === 0) {
    return ''
  }
  const md = new Md()
  md.h(2, 'Events')
    .nl()
    .nl()
    .lines(events.map(renderEvent), { wrap: true })
  return md.text
}

/** @param {PropsResult[]} props */
const renderProps = (props = []) => {
  if (props.length === 0) {
    return ''
  }
  const md = new Md()
  md.h(2, 'Props')
    .nl()
    .nl()
    .lines(props.map(renderProp), { wrap: true })
  return md.text
}

const getParams = context => {
  const query = context.resourceQuery
  if (query == null) {
    return {}
  }
  if (typeof query !== 'string') {
    return {}
  }
  if (query.length === 0) {
    return {}
  }
  return parseQuery(query)
}

const parseResultFromSfc = require('./../src/tools/parse-result-from-sfc')
/** @type {import("webpack").loader.Loader} */
module.exports = function(source, map) {
  const params = getParams(this)
  if (params.fddApi == null) {
    this.callback(null /* no error */, source, map)
    return // requires per webpack docs
  }
  const source_ = String(source)
  try {
    const result = parseResultFromSfc(source_)
    result.componentDesc
    const md = new Md()
    md.h(1, result.name)
      .nl()
      .nl()
      .lines(getDescription(result), { wrap: true })
      .nl()
      .raw(renderProps(result.props))
      .nl()
      .nl()
      .raw(renderSlots(result.slots))
      .nl()
      .nl()
      .raw(renderEvents(result.events))
      .nl()
      .nl()

    const code = toVueComponent({
      preprocessors: [
        source => {
          return {
            processedSource: source,
            serializedVueMixin: createComponentApiMixinCode(result)
          }
        }
      ],
      source: md.text
    })
    this.callback(null /* no error */, code, map)
    return // requires per webpack docs
  } catch (error) {
    console.error('failed to parse sfc')
    console.groupCollapsed()
    console.log('source:', source)
    console.groupEnd()
    console.groupCollapsed()
    console.error(error)
    console.groupEnd()
    this.callback(error)
  }
}
