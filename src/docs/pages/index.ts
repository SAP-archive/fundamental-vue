import { VueConstructor } from 'vue';
import { slugify } from '@/docs/util';
import { ExampleCollectionFunction } from './types';
import { all } from '@/components';
import { IconName } from '@/lib';

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
    readonly relatedComponents: VueConstructor[];
    readonly componentStatus: string;
    examples(): Example[];
};

type DocModule = { plugin: ExampleCollectionFunction };

const isDocModule = (module: any): module is DocModule => {
    if (module == null) {
        return false;
    }
    if ('plugin' in module) {
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

    public exampleCollection({ slug }: { slug: string }): ExampleCollection | undefined {
        return this.collections.find(collection => slug === collection.slug);
    }

    public getExample(id: string): Example {
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

const getExamples = (collectionName: string): Example[] => {
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
        const { componentStatus = 'inprogress', relatedComponents = [], icon = null } = isDocModule(module)
            ? module.plugin(all)
            : {};
        return {
            id,
            componentStatus,
            slug,
            key,
            title,
            relatedComponents,
            icon: icon || undefined,
            examples() {
                return getExamples(title);
            },
        };
    };

    // keys contains strings like: ./Breadcrumb/index.ts
    const keys = context.keys();
    return keys.map(collectionFromKey);
};

export const exampleCollections = new ExampleCollections(requireExampleCollections());
