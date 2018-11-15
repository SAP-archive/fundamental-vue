import { VueConstructor } from 'vue';
import { slugify } from '@/docs/util';
import { ExampleCollectionFunction } from './types';
import { all } from '@/components';

export type Example = {
    readonly id: string;
    readonly title: string;
    readonly code: string;
    readonly tip: string | undefined;
    readonly docs: string | undefined;
    readonly component: VueConstructor;
};

export type ExampleCollection = {
    readonly id: string;
    readonly title: string;
    readonly slug: string;
    readonly key: string;
    readonly relatedComponents: VueConstructor[];
    examples(): Promise<Example[]>;
};

type DocModule = { plugin: ExampleCollectionFunction; };

const isDocModule = (module: any): module is DocModule => {
    if(module == null) { return false; }
    if('plugin' in module) {
        return true;
    }
    return false;
};

export class ExampleCollections implements Iterable<ExampleCollection> {
    constructor(public collections: ExampleCollection[]) {}
    get [Symbol.iterator]() {
        return this.collections[Symbol.iterator];
    }
    public map<T>(mapper: (collection: ExampleCollection) => T): T[] {
        return this.collections.map(mapper);
    }

    public exampleCollection({ slug }: {slug: string}): ExampleCollection | undefined {
        return this.collections.find(collection => slug === collection.slug);
    }
}

const examplesContext = require.context('./', true, /\.vue$/);
const examplesCodeContext = require.context('!remove-docs-loader!./', true, /\.vue$/);

const getExamples = (collectionName: string): Example[] => {
    // Contains stringe like: ./Button/group.vue
    const exampleKeys = examplesContext.keys();
    const reg = new RegExp(`^\.\/${collectionName}\/(.*)\.vue$`);
    const keyMatches = (key: string) => key.match(reg) != null;
    const matchingKeys = exampleKeys.filter(keyMatches);
    const result = matchingKeys.map(key => {
        const component = examplesContext(key).default;
        const titleFromComponent = component.__title;
        const title = typeof titleFromComponent === 'string' ? titleFromComponent : '';
        const tip = component.__tip;
        const docs = component.__docs;
        const code = examplesCodeContext(key).default;
        return { id: key, tip, component, title, code, docs };
    });
    result.sort((lhs, rhs) => lhs.id.localeCompare(rhs.id, 'en', { numeric: true }));
    return result;
};

const requireExampleCollections = (): ExampleCollection[] => {
    const titleFromKey = (key: string): string => {
        const [, title] = key.split('/');
        return title || key;
    };
    const context = require.context('./', true, /(.*)\/(.+)\/index\.ts$/);

    const collectionFromKey = (key: string): ExampleCollection => {
        const title = titleFromKey(key);
        const slug = slugify(title);
        const id = key;
        const module = context(key);
        const relatedComponents = isDocModule(module) ? module.plugin(all).relatedComponents : [];
        return {
            id,
            slug,
            key,
            title,
            relatedComponents,
            examples: async () => {
                return getExamples(title);
            },
        };
    };

    // keys contains strings like: ./Breadcrumb/index.ts
    const keys = context.keys();
    return keys.map(collectionFromKey);
};

export const exampleCollections = new ExampleCollections(requireExampleCollections());
