/* eslint-env node */

// @ts-check

const MarkdownItComponentLinkPluin = require("./markdown-it-plugin-component-api-link");
const MarkdownItPluginTip = require("./markdown-it-plugin-tip");
const MarkdownItPluginMakeStyleable = require("./markdown-it-plugin-make-styleable");
const MarkdownItPluginSlot = require("./markdown-it-plugin-slot");

module.exports = {
  all: [
    MarkdownItPluginSlot,
    MarkdownItComponentLinkPluin,
    MarkdownItPluginTip,
    MarkdownItPluginMakeStyleable
  ]
};
