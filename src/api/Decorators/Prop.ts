import { Prop as VueProp } from 'vue/types/options';
import { createDecorator } from 'vue-class-component';
import { withComponentDocumentation } from './Helper';
import { VuePropDefaultValueType, AcceptableValues, DefaultValue } from '@/api';

const isPropName = (value?: PropNameOrDefinition): value is string => value != null && typeof value === 'string';
const isPropDefinition = (value?: PropNameOrDefinition): value is PropDefinition => !isPropName(value) && value != null;
const isPropOptions = (value?: PropNameOrDefinition): value is PropOptions => isPropDefinition(value) && typeof value !== 'function' && !Array.isArray(value);
const propRequiredFromDefinition = (value?: PropNameOrDefinition): boolean | undefined => isPropOptions(value) ? value.required : undefined;

const propRequired = (
  nameOrDefinition?: PropNameOrDefinition,
  definition?: PropDefinition,
): boolean | undefined => {
  const required1 = propRequiredFromDefinition(nameOrDefinition);
  const required2 = propRequiredFromDefinition(definition);
  return required1 !== undefined ? required1 : required2;
};

const propDefaultFromDefinition = (definition?: PropNameOrDefinition): VuePropDefaultValueType => isPropOptions(definition) ? definition.default : undefined;

const propDefault = (
  nameOrDefinition?: PropNameOrDefinition,
  definition?: PropDefinition,
) => {
  const default1 = propDefaultFromDefinition(nameOrDefinition);
  const default2 = propDefaultFromDefinition(definition);
  return default1 !== undefined ? default1 : default2;
};

const propName = (
  ivarName: string,
  nameOrDefinition?: PropNameOrDefinition,
) => {
  return isPropName(nameOrDefinition) ? nameOrDefinition : ivarName;
};

const propTypesFromDefinition = (definition?: PropDefinition): PropType | PropTypeUnion | undefined => {
  if(definition === undefined) { return undefined; }
  if(isPropOptions(definition)) { return definition.type; }
  return definition;
};

const propTypes = (
  nameOrDefinition?: PropNameOrDefinition,
  definition?: PropDefinition,
): PropType | PropTypeUnion | undefined => {
  return isPropName(nameOrDefinition) ? propTypesFromDefinition(definition) : propTypesFromDefinition(nameOrDefinition);
};

const acceptableValues = (
  nameOrDefinition?: PropNameOrDefinition,
  definition?: PropDefinition,
): AcceptableValues | undefined => {
  return isPropOptions(nameOrDefinition) ?
    nameOrDefinition.acceptableValues :
    (isPropOptions(definition) ? definition.acceptableValues : undefined);
};

const readableDefaultValue = (
  nameOrDefinition?: PropNameOrDefinition,
  definition?: PropDefinition,
): DefaultValue | undefined => {
  return isPropOptions(nameOrDefinition) ?
    nameOrDefinition.readableDefault :
    (isPropOptions(definition) ? definition.readableDefault : undefined);
};

type PropName = string;
type PropType = VueProp<any>;
type PropTypeUnion = Array<VueProp<any>>;

interface VuePropOptions {
  type?: PropType | PropTypeUnion;
  required?: boolean;
  default?: any | null | undefined | (() => any | null | undefined);
  validator?(value: any): boolean;
}

interface AdditionalPropOptions {
  readableDefault?: string | number;
  acceptableValues?: AcceptableValues;
}

export type PropOptions = VuePropOptions & AdditionalPropOptions;

type PropDefinition =
  | PropOptions   // typical Vue object-style-prop-definition
  | PropType      // single Type only: String or Number…
  | PropTypeUnion // Types only: [String, Number]…
  ;

type PropNameOrDefinition =
  | PropName
  | PropDefinition
  ;

export const Prop = (
  nameOrDefinition?: PropNameOrDefinition,
  definition?: PropDefinition,
) => {
  return createDecorator((componentOptions, ivarName) => {
    withComponentDocumentation(componentOptions, documentation => {
      const description = propName(ivarName, nameOrDefinition);
      const prop = documentation.getProp(ivarName);
      prop.description = description;
      prop.vue.type = propTypes(nameOrDefinition, definition);
      prop.vue.default = propDefault(nameOrDefinition, definition);
      prop.vue.required = propRequired(nameOrDefinition, definition);
      prop.acceptableValues = acceptableValues(nameOrDefinition, definition);
      prop.readableDefaultValue = readableDefaultValue(nameOrDefinition, definition);
      (componentOptions.props || (componentOptions.props = {}))[ivarName] = prop.vuePropOptions;
    });
  });
};
