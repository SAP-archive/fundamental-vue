import pagesJson from "./pages.json";
export const pages = pagesJson;

const examplesContext = require.context("./", true, /\.vue$/);
const examplesCodeContext = require.context(
  "!remove-docs-loader!./",
  true,
  /\.vue$/
);

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
    const title =
      typeof titleFromComponent === "string" ? titleFromComponent : "";
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
  result.sort((lhs, rhs) =>
    lhs.id.localeCompare(rhs.id, "en", { numeric: true })
  );
  return result;
};
