import Vue from 'vue';
import { createDecorator } from 'vue-class-component';
import { apiDocsEnabled } from '@/config';
import { ComponentDocumentation, SlotDocumentation, EventDocumentation } from './..';
import { TsxComponent } from '@/vue-tsx';
import { ComponentOptions } from 'vue/types/options';
import { Component as VueComponent } from 'vue-property-decorator';
import { PropOptions } from './Prop';
export * from './Prop';

type TsxComponentType = (typeof TsxComponent);
type EventParameterType = string | BooleanConstructor | NumberConstructor | StringConstructor;
type EventType = [/* name */ string, EventParameterType];

export const Slot = (slotName: string, description: string = '') => {
  return createDecorator(options => {
    const documentation = componentDocumentationFromOptions(options);
    if(documentation != null) {
      documentation.addSlot(new SlotDocumentation(slotName, description));
    }
  });
};

type DocModelOptions = PropOptions & {
  event: string;
  readableDefaultValue?: string | number;
};

export const Model = (propDescription: string, options: DocModelOptions) => {
  return createDecorator((componentOptions, propKey) => {
    const documentation = componentDocumentationFromOptions(componentOptions);
    if(documentation != null) {
      const props = componentOptions.props || {};
      const prop = documentation.getProp(propKey);
      prop.updateWithOptions(options);
      prop.description = propDescription;
      componentOptions.props = {
        [propKey]: prop.vuePropOptions,
        ...props,
      };
      componentOptions.model = { prop: propKey, event: options.event };
    }
  });
};

export const DefaultSlot = (description: string) => {
  return Slot('', description);
};

export const Mixins = (...mixins: TsxComponentType[]) => {
  return createDecorator(options => {
    const documentation = componentDocumentationFromOptions(options);
    if(documentation != null) {
      mixins.forEach(mixin => {
        documentation.addMixin(mixin.name);
      });
    }
  });
};

export const Event = (eventName: string, description: string, parameter?: EventType) => {
  return createDecorator(options => {
    const documentation = componentDocumentationFromOptions(options);
    if(documentation != null) {
      documentation.addEvent(new EventDocumentation(eventName, description, parameter));
    }
  });
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
