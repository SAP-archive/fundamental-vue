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
    withComponentDocumentation(options, documentation => {
      documentation.addSlot(new SlotDocumentation(slotName, description));
    });
  });
};

type DocModelOptions = PropOptions & {
  event: string;
  readableDefaultValue?: string | number;
};

export const Model = (propDescription: string, options: DocModelOptions) => {
  return createDecorator((componentOptions, propKey) => {
    (componentOptions.props || (componentOptions.props = {}))[propKey] = options;
    withComponentDocumentation(componentOptions, documentation => {
      const prop = documentation.getProp(propKey);
      prop.updateWithOptions(options);
      prop.description = propDescription;
      componentOptions.model = { prop: propKey, event: options.event };
    });
  });
};

export const DefaultSlot = (description: string) => {
  return Slot('', description);
};

export const Mixins = (...mixins: TsxComponentType[]) => {
  return createDecorator(options => {
    withComponentDocumentation(options, documentation => {
      mixins.forEach(mixin => {
        documentation.addMixin(mixin.name);
      });
    });
  });
};

export const Event = (eventName: string, description: string, parameter?: EventType) => {
  return createDecorator(options => {
    withComponentDocumentation(options, documentation => {
      documentation.addEvent(new EventDocumentation(eventName, description, parameter));
    });
  });
};

type ComponentDocumentationCB = (documentation: ComponentDocumentation) => (void);
const withComponentDocumentation = (options: ComponentOptions<any>, cb: ComponentDocumentationCB) => {
  if(!apiDocsEnabled) {
    return;
  }

  const componentName = options.componentName || options.name;
  if(componentName == null) {
    return;
  }
  const documentation = options.$componentDocumentation || new ComponentDocumentation(componentName);
  options.$componentDocumentation = documentation;
  cb(documentation);
};

type Diff<T, U> = T extends U ? never : T;
type OptionsWithoutName<V extends Vue> = Diff<ComponentOptions<V>, { componentName: string; name: string}>;

export const Component = <V extends Vue>(name: string, options: OptionsWithoutName<V> = { componentName: name}) => {
  const prefixedName = `Fd${name}`;
  return VueComponent({ ...options, name: prefixedName, componentName: prefixedName});
};
