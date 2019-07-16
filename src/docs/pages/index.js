import slugify from "./../util/slugify";
import deslugify from "./../util/deslugify";

const examplesContext = require.context("./", true, /\.vue$/);
const examplesCodeContext = require.context("!remove-docs-loader!./", true, /\.vue$/);

class Page {
  constructor({ key, slug, relatedComponents }) {
    this.slug = slug;
    this.key = key;
    this.title = deslugify(slug);
    this.relatedComponents = relatedComponents;
  }
}

export const getPages = () => {
  /** @param {string} key */
  const slugFromKey = key => {
    let withoutPrefix = key;
    if (key.startsWith("./")) {
      withoutPrefix = key.substring(2);
    }
    const indexModuleIndex = withoutPrefix.indexOf("/index.js");
    if (indexModuleIndex >= 0) {
      withoutPrefix = withoutPrefix.substring(0, indexModuleIndex);
    }
    // we are calling slugify because atm the directory name is
    // not yet slugified.
    return slugify(withoutPrefix);
  };
  const context = require.context("./", true, /index.js$/);
  // eg.: "./Action Bar/index.js"
  /** @type {string[]} */
  const keys = context.keys().filter(key => key !== "./index.js");
  const pages = [];

  keys.forEach(key => {
    const pageModule = context(key);
    const defaultExport = pageModule.default;
    if (pageModule == null) {
      // eslint-disable-next-line no-console
      console.warn(`page ${key} has no default export.`);
      return;
    }
    const { relatedComponents = [] } = defaultExport;
    const slug = slugFromKey(key);
    pages.push(new Page({ key, slug, relatedComponents }));
  });

  return pages;
};

export const getExamples = collectionName => {
  // Contains stringe like: ./Button/group.vue
  const exampleKeys = examplesContext.keys();
  const reg = new RegExp(`^./${collectionName}/(.*).vue$`);
  const keyMatches = key => key.match(reg) != null;
  // This array contains only matching keys. Each key represents a single
  // example eg.: './Alert/0-default.vue'
  // From now on we refer to a matching key as the example's id.
  // The id is used to uniquely identify an example. This is needed to host
  // a specific example (eg. in fullscreen mode).
  const matchingKeys = exampleKeys.filter(keyMatches);
  const result = matchingKeys.map(key => {
    const component = examplesContext(key).default;
    const titleFromComponent = component.__title;
    const title = typeof titleFromComponent === "string" ? titleFromComponent : "";
    const tip = component.__tip;
    const docs = component.__docs;
    const condensed = component.__condensed != null;
    const fullscreenOnly = component.__fullscreenOnly != null;
    const code = examplesCodeContext(key).default;
    return {
      id: key,
      tip,
      component,
      title,
      code,
      docs,
      condensed,
      fullscreenOnly
    };
  });
  result.sort((lhs, rhs) => lhs.id.localeCompare(rhs.id, "en", { numeric: true }));
  return result;
};
