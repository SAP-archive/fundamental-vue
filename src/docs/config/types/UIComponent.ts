import { UIComponentConfig } from './UIComponentConfig';
import { UIComponentExample } from './UIComponentExample';

export interface UIComponent extends UIComponentConfig {
  readonly slug: string;
  preparedExamples(): Promise<UIComponentExample[]>;
}
