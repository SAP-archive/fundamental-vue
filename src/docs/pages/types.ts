// @ts-ignore
import { all } from '@/components';
import { VueConstructor } from 'vue';

type ExampleCollectionPlugin = {
  relatedComponents: VueConstructor[];
};
export type ExampleCollectionFunction = (components: typeof all) => ExampleCollectionPlugin;
