import { VueConstructor } from 'vue';
import { UiComponentExampleConfig } from './UiComponentExampleConfig';

export interface UiComponentExample extends UiComponentExampleConfig {
  readonly code: string;
  readonly description: string | undefined;
  readonly component: VueConstructor;
}
