import { all } from '@/components';
import { VueConstructor } from 'vue';

type AllComponents = typeof all;
type ExampleCollectionPlugin = {
  relatedComponents: VueConstructor[];
};
export type ExampleCollectionFunction = (components: AllComponents) => ExampleCollectionPlugin;
