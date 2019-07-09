// @ts-check

/**
 * @typedef {import("@vuese/parser").ParserResult} ParserResult
 * @typedef {import("@vuese/parser").PropsResult} PropsResult
 * @typedef {import("@vuese/parser").SlotResult} SlotResult
 * @typedef {import("@vuese/parser").EventResult} EventResult
 */

/**
 * @param {string[]=} strings
 * @param {string=} enclosnIn
 * @returns {string}
 */
const renderStrings = (strings, enclosnIn = "") => {
  if (strings == null) {
    return "";
  }
  if (strings.length === 0) {
    return "";
  }
  return `${enclosnIn}${strings.join("\n")}${enclosnIn}`;
};

/**
 * @returns {string}
 * @param {ParserResult} result
 */
const renderMarkdown = result => {
  let string = "";
  string += `${renderComponentName(result.name)}\n\n`;
  string += (result.componentDesc.default || []).join("\n");
  string += result.componentDesc.default.length > 0 ? "\n\n" : "";
  string += renderProps(result.props || []);
  string += "\n\n";
  string += renderSlots(result.slots || []);
  string += renderEvents(result.events || []);
  return string;
};

const renderComponentName = name => `# ${name}`;

/** @param {EventResult} event */
const renderEvent = event => {
  const args = event.argumentsDesc || [];
  let h = "";
  h += `### ${event.name}\n`;
  h += renderStrings(event.describe, "\n");
  if (args.length > 0) {
    h += "\n";
    h += "**Arguments:**\n";
    h += args.map(arg => `- ${arg}\n`);
    h += "\n";
  }
  return h;
};

/** @param {EventResult[]} events */
const renderEvents = events => {
  let h = "";
  if (events.length === 0) {
    return h;
  }
  h += "## Events\n\n";
  h += events.map(renderEvent).join("\n\n");
  h += "\n\n";
  return h;
};

/** @param {SlotResult[]} slots */
const renderSlots = slots => {
  if (slots.length === 0) {
    return "";
  }
  return `## Slots\n\n${slots.map(renderSlot).join("\n\n")}`;
};

/** @param {SlotResult} slot */
const renderSlot = ({ name, describe }) => {
  let h = "";
  h += `### ${name}\n\n`;
  h += describe.length > 0 ? describe : "no description available";
  h += "\n";
  return h;
};

/** @param {PropsResult[]} props */
const renderProps = props =>
  `## Props\n\n${props.map(renderProp).join("\n\n")}`;

/** @param {PropsResult} prop */
const renderProp = prop => {
  const defaultValue = `**Default Value:** \`${prop.default}\``;
  const defaultDescription = (prop.defaultDesc || []).join("\n");
  const type = `**Type:** \`${prop.type}\``;
  const typeDescription = (prop.typeDesc || []).join("\n");
  const propDescription = (prop.describe || []).join("\n");
  return `### ${
    prop.name
  }\n\n${propDescription}\n\n${defaultValue}\n\n${defaultDescription}\n\n${type}\n\n${typeDescription}\n`;
};

module.exports = renderMarkdown;
// const FS = require("fs");
// const Path = require("path");

// const file = process.argv[2];
// const rawParserResult = FS.readFileSync(
//   Path.resolve(process.cwd(), file),
//   "utf-8"
// );
// const res = JSON.parse(rawParserResult);
// console.log(res);

// const md = renderMarkdown(res);
// console.log(md);
