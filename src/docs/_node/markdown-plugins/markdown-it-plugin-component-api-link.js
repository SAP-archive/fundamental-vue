/* eslint-env node */

// This markdown-it plugin replaces every occurance of:
//       `$valid-fundamental-vue-component-name`
// by a link to the corresponding Fundamental Vue component API.
const ComponentName = require("./../component-name");

const plugin = md => {
  const defaultRender = md.renderer.rules.code_inline;
  const componentApiLink = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const content = token.content;
    if (ComponentName.isNormalizedValidComponentName(content)) {
      return `<d-component-api-link type="prominent" component-name="${content}"></d-component-api-link>`;
    }
    return defaultRender(tokens, idx, options, env, self);
  };
  md.renderer.rules.code_inline = componentApiLink;
};

module.exports = plugin;
