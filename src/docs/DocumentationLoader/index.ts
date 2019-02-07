import allPages from '@/docs/pages/pages.json';
import { VueConstructor } from 'vue';
import { getExamples } from '@/docs/pages';
import { frameworkDocumentation } from '@/docs/api';
import { log } from '@/core';

type ExampleOptions = {
  id: string;
  title: string;
  code: string;
  tip: string | undefined;
  docs: string | undefined;
  component: VueConstructor;
  condensed: boolean;
  fullscreenOnly: boolean;
};
class Example {
  id: string;
  title: string;
  code: string;
  tip: string | undefined;
  docs: string | undefined;
  component: VueConstructor;
  condensed: boolean;
  fullscreenOnly: boolean;
  constructor({ id, title, code, tip, docs, component, condensed, fullscreenOnly }: ExampleOptions) {
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

type PageOptions = {
  slug: string;
  title: string;
  related: string[];
  icon: string;
};

class Page {
  slug: string;
  title: string;
  related: string[];
  icon: string;
  constructor({ slug, title, related, icon}: PageOptions) {
    this.slug = slug;
    this.title = title;
    this.related = related;
    this.icon = icon;
  }
}

export default class DocumentationLoader {

  static install(VueCtor: VueConstructor) {
    log('Installing DocumentationLoader Plugin…');
    VueCtor.prototype.$docLoader = new DocumentationLoader();
  }

  pages: Page[];

  constructor() {
    this.pages = allPages.map(page => new Page(page));
  }

  exampleForId(id: string): Example | undefined {
    const { pages } = this;
    const withId = (example: Example) => example.id === id;
    for(const page of pages) {
      const examples = this.examplesForPage(page);
      const example = examples.find(withId);
      if(example != null) {
        return example;
      }
    }
  }

  examplesForPage({slug}: Page): Example[] {
    return this.examplesForPageWithSlug(slug);
  }

  examplesForPageWithSlug(slug: string): Example[] {
    const page = this.pageForSlug(slug);
    if(page == null) { return []; }
    return getExamples(page.title)
    .map(example => new Example(example));
  }

  relatedComponentDocumentation({related}: Page) {
    const { components } = frameworkDocumentation;
    return related.map(componentName => {
      return components[componentName];
    });
  }
  relatedComponentDocumentationForPageWithSlug(slug: string) {
    const page = this.pageForSlug(slug);
    if(page == null) { return []; }
    return this.relatedComponentDocumentation(page);
  }

  pageForSlug(slug: string): Page | undefined {
    return this.pages.find(page => page.slug === slug);
  }
}
