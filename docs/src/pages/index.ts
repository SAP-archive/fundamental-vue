import { VueConstructor } from "vue";
import { IconName } from "@/lib";
import pagesJson from "./pages.json";

export type PageType = {
  id: string;
  status: string;
  slug: string;
  key: string;
  title: string;
  icon: string;
  related: string[];
};
export type PagesType = typeof pagesJson;

export const pages = pagesJson as PageType[];

export type Example = {
  readonly id: string;
  readonly title: string;
  readonly code: string;
  readonly tip: string | undefined;
  readonly docs: string | undefined;
  readonly component: VueConstructor;
  readonly condensed: boolean;
  readonly fullscreenOnly: boolean;
};

export type ExampleCollection = {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly icon?: IconName;
  readonly key: string;
  readonly related: string[];
  readonly componentStatus: string;
  examples(): Example[];
};

const examplesContext = require.context("./", true, /\.vue$/);
const examplesCodeContext = require.context(
  "!remove-docs-loader!./",
  true,
  /\.vue$/
);

export const getExamples = (collectionName: string): Example[] => {
  // Contains stringe like: ./Button/group.vue
  const exampleKeys = examplesContext.keys();
  const reg = new RegExp(`^./${collectionName}/(.*).vue$`);
  const keyMatches = (key: string) => key.match(reg) != null;
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
