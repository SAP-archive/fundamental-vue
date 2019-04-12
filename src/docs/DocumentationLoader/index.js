import allPages from "./../pages/pages.json";
import { getExamples } from "./../pages";
import { frameworkDocumentation } from "./../api";
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

class Page {
  constructor({ slug, title, related, icon }) {
    this.slug = slug;
    this.title = title;
    this.related = related;
    this.icon = icon;
  }
}

export default class DocumentationLoader {
  static install(VueCtor) {
    log("Installing DocumentationLoader Plugin…");
    VueCtor.prototype.$docLoader = new DocumentationLoader();
  }

  constructor() {
    this.pages = allPages.map(page => new Page(page));
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

  relatedComponentDocumentation({ related }) {
    const { components } = frameworkDocumentation;
    return related.map(componentName => {
      return components[componentName];
    });
  }
  relatedComponentDocumentationForPageWithSlug(slug) {
    const page = this.pageForSlug(slug);
    if (page == null) {
      return [];
    }
    return this.relatedComponentDocumentation(page);
  }

  pageForSlug(slug) {
    return this.pages.find(page => page.slug === slug);
  }
}
