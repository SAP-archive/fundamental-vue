import allPages from "@/pages/pages.json";
import { VueConstructor } from "vue";
import { getExamples } from "@/pages";
import { frameworkDocumentation } from "@/api";
import { log } from "@/core";

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

export class Example {
  id: string;
  title: string;
  code: string;
  tip: string | undefined;
  docs: string | undefined;
  component: VueConstructor;
  condensed: boolean;
  fullscreenOnly: boolean;
  constructor({
    id,
    title,
    code,
    tip,
    docs,
    component,
    condensed,
    fullscreenOnly
  }: ExampleOptions) {
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
  status: string;
};

const statusMapping: { [key: string]: any } = {
  stable: {
    title: "Safe to use, no major updates planned.",
    color: "accent-8",
    icon: "thumb-up"
  },
  experimental: {
    title:
      "Work-In-Progres that may be used but be prepared for changes in the future.",
    color: "accent-1",
    icon: "lab"
  },
  deprecated: {
    title:
      "This component should not be used and will be removed in the future.",
    color: "accent-3",
    icon: "cancel"
  },
  inprogress: {
    title:
      "This component is under development. Or it is being actively reviewed to be refactored, safe to use but talk to us.",
    color: "accent-13",
    icon: "edit"
  }
};

class ComponentStatus {
  public color: any = "";
  public icon: any = "";
  public title: any = "";
  constructor(public status: string) {
    const config = statusMapping[status];
    if (config == null) {
      return;
    }
    this.color = config.color;
    this.title = config.title;
    this.icon = config.icon;
  }
}

export class Page {
  slug: string;
  title: string;
  related: string[];
  icon: string;
  status: ComponentStatus | object = {};
  constructor({ slug, title, related, icon, status }: PageOptions) {
    this.slug = slug;
    this.title = title;
    this.related = related;
    this.icon = icon;
    if (status != null) {
      this.status = new ComponentStatus(status);
    }
  }
}

export default class DocumentationLoader {
  static install(VueCtor: VueConstructor) {
    log("Installing DocumentationLoader Plugin…");
    VueCtor.prototype.$docLoader = new DocumentationLoader();
  }

  pages: Page[];

  constructor() {
    this.pages = allPages.map(page => new Page(page));
  }

  exampleForId(id: string): Example | undefined {
    const { pages } = this;
    const withId = (example: Example) => example.id === id;
    for (const page of pages) {
      const examples = this.examplesForPage(page);
      const example = examples.find(withId);
      if (example != null) {
        return example;
      }
    }
  }

  examplesForPage({ slug }: Page): Example[] {
    return this.examplesForPageWithSlug(slug);
  }

  examplesForPageWithSlug(slug: string): Example[] {
    const page = this.pageForSlug(slug);
    if (page == null) {
      return [];
    }
    return getExamples(page.title).map(example => new Example(example));
  }

  relatedComponentDocumentation({ related }: Page) {
    const { components } = frameworkDocumentation;
    return related.map(componentName => {
      return components[componentName];
    });
  }
  relatedComponentDocumentationForPageWithSlug(slug: string) {
    const page = this.pageForSlug(slug);
    if (page == null) {
      return [];
    }
    return this.relatedComponentDocumentation(page);
  }

  pageForSlug(slug: string): Page | undefined {
    return this.pages.find(page => page.slug === slug);
  }
}
