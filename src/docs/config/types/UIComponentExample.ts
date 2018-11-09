import { VueConstructor } from 'vue';
import { UIComponentExampleConfig } from './UIComponentExampleConfig';

export interface UIComponentExample extends UIComponentExampleConfig {
  readonly code: string;
  readonly description: string | undefined;
  readonly component: VueConstructor;
}
