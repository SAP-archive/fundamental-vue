import { UiComponentConfig } from './UiComponentConfig';
import { UiComponentExample } from './UiComponentExample';

export interface UiComponent extends UiComponentConfig {
  readonly slug: string;
  readonly key: string;
  preparedExamples(): Promise<UiComponentExample[]>;
}
