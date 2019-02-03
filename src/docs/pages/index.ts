import { VueConstructor } from 'vue';
// import { slugify } from '@/docs/util';
// import { ExampleCollectionFunction } from './types';
// import { all } from '@/components';
import { IconName } from '@/lib';

import pagesJson from './pages.json';

// type GetElementType<T extends Array<any>> = T extends (infer U)[] ? U : never;
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

const $pages: PagesType = pagesJson;
export const pages = $pages as PageType[];

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

// type DocModule = { plugin: ExampleCollectionFunction };

// const isDocModule = (module: any): module is DocModule => {
//   if (module == null) {
//     return false;
//   }
//   if ('plugin' in module) {
//     return true;
//   }
//   return false;
// };

export class ExampleCollections implements Iterable<ExampleCollection> {
  constructor(public collections: ExampleCollection[]) { }
  get [Symbol.iterator]() {
    return this.collections[Symbol.iterator];
  }
  map<T>(mapper: (collection: ExampleCollection) => T): T[] {
    return this.collections.map(mapper);
  }

  exampleCollection({ slug }: { slug: string }): ExampleCollection | undefined {
    return this.collections.find(collection => slug === collection.slug);
  }

  getExample(id: string): Example {
    const exampleInCollection = (collection: ExampleCollection, exampleId: string): Example | undefined => {
      return collection.examples().find(example => example.id === exampleId);
    };
    for (const collection of this.collections) {
      const example = exampleInCollection(collection, id);
      if (example != null) {
        return example;
      }
    }
    throw Error('example not found');
  }
}

const examplesContext = require.context('./', true, /\.vue$/);
const examplesCodeContext = require.context('!remove-docs-loader!./', true, /\.vue$/);

export const getExamples = (collectionName: string): Example[] => {
  // Contains stringe like: ./Button/group.vue
  const exampleKeys = examplesContext.keys();
  const reg = new RegExp(`^\.\/${collectionName}\/(.*)\.vue$`);
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
    const title = typeof titleFromComponent === 'string' ? titleFromComponent : '';
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
      fullscreenOnly,
    };
  });
  result.sort((lhs, rhs) => lhs.id.localeCompare(rhs.id, 'en', { numeric: true }));
  return result;
};

// const requireExampleCollections = (): ExampleCollection[] => {
//     const titleFromKey = (key: string): string => {
//         const [, title] = key.split('/');
//         return title || key;
//     };
//     const context = require.context('./', true, /(.*)\/(.+)\/index\.ts$/);
//     const collectionFromKey = (key: string): ExampleCollection => {
//         const title = titleFromKey(key);
//         const slug = slugify(title);
//         const id = key;
//         const module = context(key);
//         const {
//           status = 'inprogress',
//           related = [],
//           icon = null,
//         } = isDocModule(module)
//             ? module.plugin()
//             : {};
//         return {
//             id,
//             status,
//             slug,
//             key,
//             title,
//             relatedComponents,
//             icon: icon || undefined,
//             examples() {
//                 return getExamples(title);
//             },
//         };
//     };
//     // keys contains strings like: ./Breadcrumb/index.ts
//     const keys = context.keys();
//     return keys.map(collectionFromKey);
// };
// const titleFromKey = (key: string): string => {
//   const [, title] = key.split('/');
//   return title || key;
// };
// export const collectionFromSlug = (slug: string): ExampleCollection => {
//   const page = this.$docsLoader.pageForSlug(slug);
//   if(page == null) {
//     throw Error('unable');
//   }
//   const title = page.title; // titleFromKey(pageId);
//   // const slug = page.slug; //slugify(title);
//   const id = page.id;
//   // const module = require.context(pageId);
//   const {
//     status = 'inprogress',
//     related = [],
//     icon = null,
//   } = (page || {});
//   return {
//     id,
//     componentStatus: status,
//     slug,
//     key: id,
//     title,
//     related,
//     icon: icon || undefined,
//     examples() {
//       return getExamples(title);
//     },
//   };
// };
export const exampleComponents = (pageTitle: string): VueConstructor[] => {
  // import()

  // const
  const context = require.context('./', true, /(.*)\/(.+)\/*\.vue$/);
  const isPageKey = (key: string) => key.startsWith(`./${pageTitle}/`);

  // => ./Tile Grid/2-cols.vue
  const keys = context.keys().filter(isPageKey);
  // debugger;
  const r = keys.map(key => {
    return context(key).default;
  });

  return r as VueConstructor[];
  // const collectionFromKey = (key: string): ExampleCollection => {
  //     const title = titleFromKey(key);
  //     const slug = slugify(title);
  //     const id = key;
  //     const module = context(key);
  //     const {
  //       status = 'inprogress',
  //       related = [],
  //       icon = null,
  //     } = isDocModule(module)
  //         ? module.plugin()
  //         : {};
  //     return {
  //         id,
  //         status,
  //         slug,
  //         key,
  //         title,
  //         relatedComponents,
  //         icon: icon || undefined,
  //         examples() {
  //             return getExamples(title);
  //         },
  //     };
  // };
  // // keys contains strings like: ./Breadcrumb/index.ts
  // const keys = context.keys();
  // return keys.map(collectionFromKey);
};

// export const exampleCollections = new ExampleCollections(requireExampleCollections());
