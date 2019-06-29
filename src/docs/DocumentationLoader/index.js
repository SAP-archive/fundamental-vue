import { getExamples, getPages } from "./../pages";
import { log } from "./../core";

export class Example {
  constructor({
    id,
    title,
    code,
    tip,
    docs,
    component,
    condensed,
    fullscreenOnly
  }) {
    this.id = id;
    this.title = title;
    this.code = code;
    this.tip = tip;
    this.docs = docs;
    this.condensed = condensed;
    this.component = component;
    this.fullscreenOnly = fullscreenOnly;
  }
}

export default class DocumentationLoader {
  static install(VueCtor) {
    log("Installing DocumentationLoader Plugin…");
    VueCtor.prototype.$docLoader = new DocumentationLoader();
  }

  constructor() {
    this.pages = getPages();
  }

  exampleForId(id) {
    const { pages } = this;
    const withId = example => example.id === id;
    for (const page of pages) {
      const examples = this.examplesForPage(page);
      const example = examples.find(withId);
      if (example != null) {
        return example;
      }
    }
  }

  examplesForPage({ slug }) {
    return this.examplesForPageWithSlug(slug);
  }

  examplesForPageWithSlug(slug) {
    const page = this.pageForSlug(slug);
    if (page == null) {
      return [];
    }
    return getExamples(page.title).map(example => new Example(example));
  }

  pageForSlug(slug) {
    return this.pages.find(page => page.slug === slug);
  }
}
