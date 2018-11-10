import { VueConstructor } from 'vue';
import { UiComponentExampleConfig } from './UiComponentExampleConfig';

export type UiComponentConfig = {
  readonly id: string;
  readonly title: string;
  readonly examples: UiComponentExampleConfig[];
  readonly relatedComponents: VueConstructor[];
};
