/* eslint-env node */

const context = require.context("./", true, /\.vue$/);
const templateContext = require.context("!raw-loader!./", true, /\.vue$/);
const assignMetaTemplate = (component, meta) => {
  if (typeof component === "string") {
    return null;
  }
  const methods = {
    ...(component.methods || {}),
    _meta: () => meta
  };
  return {
    ...component,
    methods
  };
};
const assignComponentName = (component, name) => {
  if (typeof component === "string") {
    return null;
  }
  return {
    name,
    ...component
  };
};

/** @param {string} path looks like './action-bar/0-full.vue' */
const componentNameFromPath = path => {
  if (path.startsWith("./") === false) {
    // eslint-disable-next-line no-console
    console.error(`path '${path}' does not start with './'.`);
    return;
  }
  if (path.endsWith(".vue") === false) {
    // eslint-disable-next-line no-console
    console.error(`path '${path}' does not end with '.vue'.`);
    return;
  }

  const name = `ex-${path
    .replace("./", "")
    .replace(".vue", "")
    .replace("/", "--")}`;
  return name;
};

export default {
  install: vue => {
    context
      .keys()
      .map(path => {
        const exampleModule = context(path);
        const name = componentNameFromPath(path);
        return assignComponentName(
          assignMetaTemplate(exampleModule.default, templateContext(path)),
          name
        );
      })
      .filter(r => r)
      .forEach(exModule => {
        vue.component(exModule.name, exModule);
      });
  }
};
