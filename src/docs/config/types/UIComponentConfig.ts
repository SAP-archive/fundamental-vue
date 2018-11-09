import { VueConstructor } from 'vue';
import { UIComponentExampleConfig } from './UIComponentExampleConfig';

export type UIComponentConfig = {
  readonly id: string;
  readonly title: string;
  readonly examples: UIComponentExampleConfig[];
  readonly relatedComponents: VueConstructor[];
};
