import { UIComponent } from './types/UIComponent';
import { UIComponentExample } from './types/UIComponentExample';
import { UIComponentsConfig } from './ui-components';
import { UIComponentExampleConfig } from './types/UIComponentExampleConfig';
import { slugify } from '@/docs/util';

export { UIComponent } from './types/UIComponent';
export { UIComponentExample } from './types/UIComponentExample';

export const uiComponents: UIComponent[] = UIComponentsConfig.map(uicomp => {
  return {
    ...uicomp,
    slug: slugify(uicomp.title),
    async preparedExamples(): Promise<UIComponentExample[]> {
      const prepare = async (example: UIComponentExampleConfig): Promise<UIComponentExample> => this._preparedExample(example);
      return Promise.all(this.examples.map(prepare));
    },
    async _preparedExample(example: UIComponentExampleConfig): Promise<UIComponentExample> {
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
