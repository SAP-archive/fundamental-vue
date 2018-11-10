import { UiComponent } from './types/UiComponent';
import { UiComponentConfig } from './types/UiComponentConfig';
import { UiComponentExample } from './types/UiComponentExample';
import { UiComponentsConfig } from './ui-components';
import { UiComponentExampleConfig } from './types/UiComponentExampleConfig';
import { slugify } from '@/docs/util';

export { UiComponent } from './types/UiComponent';
export { UiComponentExample } from './types/UiComponentExample';
import { shortUuid } from '@/lib';

const sortByTitle = (lhs: UiComponentConfig, rhs: UiComponentConfig): number => {
  return lhs.title.localeCompare(rhs.title);
};

export const uiComponents: UiComponent[] = [...UiComponentsConfig].sort(sortByTitle).map(componentConfig => {
  return {
    ...componentConfig,
    slug: slugify(componentConfig.title),
    key: shortUuid(),
    async preparedExamples(): Promise<UiComponentExample[]> {
      const prepare = async (example: UiComponentExampleConfig): Promise<UiComponentExample> => this._preparedExample(example);
      return Promise.all(this.examples.map(prepare));
    },
    async _preparedExample(example: UiComponentExampleConfig): Promise<UiComponentExample> {
      const collectionId = this.id;
      const exampleId = example.id;
      const component = await import(`./../pages/${collectionId}/${exampleId}.vue`);
      const code = await import(`!raw-loader!./../pages/${collectionId}/${exampleId}.vue`);
      let description: string | undefined;
      if (example.hasDescription === true) {
        description = (await import(`./../pages/${collectionId}/${exampleId}.md`)).default;
      }
      return {
        ...example,
        description,
        code: code.default,
        component: component.default,
      };
    },
  };
});

export const uiComponentForSlug = (slug: string) => uiComponents.find(component => component.slug === slug);
