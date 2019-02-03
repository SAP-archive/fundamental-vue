import Vue from 'vue';
// import { createDecorator } from 'vue-class-component';
import { apiDocsEnabled } from '@/config';
import { ComponentDocumentation } from './..';
// import { TsxComponent } from '@/vue-tsx';
import { ComponentOptions } from 'vue/types/options';
import { Model as ModelDecorator, Component as VueComponent } from 'vue-property-decorator';
import { PropOptions } from './Prop';
export * from './Prop';

type DocModelOptions = PropOptions & {
  event: string;
  readableDefaultValue?: string | number;
};

export const Model = (propDescription: string, options: DocModelOptions) => {
  return ModelDecorator(options.event, options);
};

const componentDocumentationFromOptions = (options: ComponentOptions<any>, componentName?: string): ComponentDocumentation | undefined => {
  if(!apiDocsEnabled) {
    return undefined;
  }

  const resultingName = componentName || options.componentName || options.name;
  if(resultingName == null) {
    return undefined;
  }
  const documentation = options.$componentDocumentation || new ComponentDocumentation(resultingName);
  options.$componentDocumentation = documentation;
  return documentation;
};

type Diff<T, U> = T extends U ? never : T;
type OptionsWithoutName<V extends Vue> = Diff<ComponentOptions<V>, { componentName: string; name: string}>;

export const Component = <V extends Vue>(name: string, options: OptionsWithoutName<V> = { componentName: name }) => {
  const prefixedName = `Fd${name}`;
  componentDocumentationFromOptions(options, prefixedName); // we need this because as a side effect this call generates the component documentation
  return VueComponent({ ...options, name: prefixedName, componentName: prefixedName});
};
