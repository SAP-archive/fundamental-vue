'use strict';

const loaderUtils = require("loader-utils");

module.exports = function (source, map) {
  const options = loaderUtils.getOptions(this) || {};
  const { optionName } = options;

  if(typeof optionName !== 'string') {
    const error = Error(`[block-loader] Unable to execute because missing option: 'optionName'. You have to set the loader option 'optionName' in order to tell block-loader the name of the component option to write to.`);
    this.callback(error);
    return;
  }
  this.callback(
    null, /* no error */
    `export default function (Component) {
      Component.options.${optionName} = ${JSON.stringify(source)};
    }`,
    map
  )
}
