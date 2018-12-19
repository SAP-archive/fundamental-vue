import { createDecorator } from 'vue-class-component';
import { apiDocsEnabled } from '@/config';
import { ComponentDocumentation } from './ComponentDocumentation';
import { SlotDocumentation } from './SlotDocumentation';
import { EventDocumentation } from './EventDocumentation';
import TsxComponent from '@/vue-tsx';
import { ComponentOptions, PropOptions, Constructor } from 'vue/types/options';
import { Prop } from 'vue/types/options';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

type TsxComponentType = (typeof TsxComponent);
type EventParameterType = string | BooleanConstructor | NumberConstructor | StringConstructor;
type EventType = [/* name */ string, EventParameterType];

export const slot = (slotName: string, description: string = '') => {
  return createDecorator(options => {
    withComponentDocumentation(options, documentation => {
      documentation.addSlot(new SlotDocumentation(slotName, description));
    });
  });
};

type DocPropOptions = PropOptions<any> & {
  readableDefaultValue?: string | number;
  acceptableValues?: Array<string | number>;
};

const $propDescription = (ivarName: string,  def: $PropDef1) => {
  return typeof def === 'string' ?  def : ivarName;
};

type $PropDef1 = Prop<any> | Array<Prop<any>> | string | DocPropOptions;
type $PropDef2 = Constructor | Constructor[] | DocPropOptions;

export const prop = (
  def: $PropDef1,
  def2?: $PropDef2) => {
    return createDecorator((componentOptions, ivarName) => {
      withComponentDocumentation(componentOptions, documentation => {
        const description = $propDescription(ivarName, def);
        const propDoc = documentation.getProp(ivarName);
        propDoc.description = description;

        if(typeof def === 'object' && !Array.isArray(def)) {
          propDoc.updateWithOptions(def);
        } else if(typeof def !== 'string') {
          propDoc.vueTypes = def;
        }

        if(typeof def2 === 'object' && !Array.isArray(def2)) {
          propDoc.updateWithOptions(def2);
        } else {
          const ctors = def2;
          if(Array.isArray(ctors)) {
            propDoc.vueTypes = ctors;
          } else {
            if(ctors !== undefined) {
              propDoc.vueTypes = ctors;
            }
          }
        }
        (componentOptions.props || (componentOptions.props = {}))[ivarName] = propDoc.vuePropOptions;
      });
    });
};

type DocModelOptions = DocPropOptions & {
  event: string;
  readableDefaultValue?: string | number;
};

export const model = (propDescription: string, options: DocModelOptions) => {
  return createDecorator((componentOptions, propKey) => {
    (componentOptions.props || (componentOptions.props = {}))[propKey] = options;
    withComponentDocumentation(componentOptions, documentation => {
      const propDocumentation = documentation.getProp(propKey);
      propDocumentation.updateWithOptions(options);
      propDocumentation.description = propDescription;
      componentOptions.model = { prop: propKey, event: options.event };
    });
  });
};

export const defaultSlot = (description: string) => {
  return slot('', description);
};

export const mixins = (..._mixins: TsxComponentType[]) => {
  return createDecorator(options => {
    withComponentDocumentation(options, documentation => {
      _mixins.forEach(mixin => {
        documentation.addMixin(mixin.name);
      });
    });
  });
};

export const event = (eventName: string, description: string, parameter?: EventType) => {
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

export const component = <V extends Vue>(name: string, options: OptionsWithoutName<V> = { componentName: name}) => {
  const prefixedName = `Fd${name}`;
  return Component({ ...options, name: prefixedName, componentName: prefixedName });
};
