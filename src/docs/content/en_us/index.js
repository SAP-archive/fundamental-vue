// @ts-check

import matter from "gray-matter";
import deslugify from "./../../util/deslugify";
import slugify from "./../../util/slugify";

/**
 * @typedef {import("webpack")} Webpack
 */
class ExamplePage {
  /** @param {string} key looks like './hello-world.md' */
  constructor(key) {
    this.key = key;
  }
  get title() {
    return deslugify(this.key.replace(".md", "").replace("./", ""));
  }
  get slug() {
    return slugify(this.key.replace(".md", "").replace("./", ""));
  }
}

// eslint-disable-next-line no-undef
const markdownContext = require
  // @ts-ignore
  .context("./", true, /\.md$/);

/**
 * @returns {ExamplePage[]}
 */
export const getExamplePages = () => {
  return markdownContext.keys().map(key => new ExamplePage(key));
};

// eslint-disable-next-line no-undef
const markdownGreyMatterContext = require
  // @ts-ignore
  .context("!raw-loader!./", true, /\.md$/);

const importMarkdown = key => {
  return markdownContext(key);
};

/** @param {string} key Webpack Key */
const getFrontMatter = key => {
  const mdModule = markdownGreyMatterContext(key);
  const frontMatter = matter(mdModule.default);
  return frontMatter.data;
};

/** @param {string} key looks like './search-input.md' */
const getCollectionNameFromKey = key => {
  return key.replace("./", "").replace(".md", "");
};

/**
 * @typedef {object} ContentWrapperOptions
 * @prop {string} collection
 * @prop {any} mdModule
 * @prop {string} key Webpack Key to load the module
 */
/**
 *
 * @param {ContentWrapperOptions} options
 */
const CreateMdContentWrapper = ({ key, collection, mdModule }) => {
  const fm = getFrontMatter(key);
  const wrapper = {
    name: `md-${collection}`,
    inject: {
      $_fddFrontmatter: {
        default: { value: {} }
      }
    },
    data() {
      return {
        $_fddExampleCollection: collection
      };
    },
    render(h) {
      return h(mdModule.default);
    },
    mounted() {
      const frontMatterCollector = this.$_fddFrontmatter;
      const frontMatter = fm || {};
      frontMatterCollector.value = { ...frontMatterCollector.value, ...frontMatter };
    }
  };
  wrapper.$_fddFrontmatter = fm;
  wrapper.groupName = getCollectionNameFromKey(key) || "default";
  wrapper.$fddExampleCollection = collection;
  return wrapper;
};

const mdModules = markdownContext.keys().map(key => {
  const mdModule = importMarkdown(key);
  const collection = getCollectionNameFromKey(key.split("/").reverse()[0]);
  return CreateMdContentWrapper({ key, collection, mdModule });
});

export const exampleCollectionModules = mdModules;

export default {
  install: vue => {
    mdModules.forEach(mdModule => {
      vue.component(mdModule.name, mdModule);
    });
  }
};
