import { PropOptions } from 'vue';
import { Prop } from 'vue/types/options';
import { PropType, stringifyPropTypes } from './PropType';

export type DefaultValue = string | number | null;

const unspecifiedValue = Symbol();

type Options = PropOptions<any> & {
  readableDefaultValue?: string | number;
  acceptableValues?: Array<string | number>;
};

export type VuePropDefaultValueType = any | null | undefined | (() => any | null | undefined);

class VuePropOptions {
  type?: Prop<any> | Array<Prop<any>>;
  required?: boolean;
  default?: any | null | undefined | (() => any | null | undefined);
  validator?: (value: any) => boolean;
}

type PrimitiveValue = string | number | boolean | symbol;

const isPrimitive = (value: any): value is PrimitiveValue => {
  if(value == null || value === undefined) { return false; }
  const type = typeof value;
  if(type === 'string') { return true; }
  if(type === 'number') { return true; }
  if(type === 'symbol') { return true; }
  if(type === 'boolean') { return true; }
  return false;
};

type AcceptableValue = string | number | null;
export type AcceptableValues = AcceptableValue[];

export class PropDocumentation<T = any> {
  readonly vue = new VuePropOptions();
  readonly key: string;
  static unspecifiedValue(): symbol { return unspecifiedValue; }
  description = '';
  get required() { return this.vue.required || false; }
  set required(newValue) { this.vue.required = newValue; }
  readableDefaultValue?: DefaultValue | null = null;
  acceptableValues?: AcceptableValues;

  constructor(key: string) {
    this.key = key;
    this.description = key;
  }

  get types(): PropType[] {
    const { type = [] } = this.vue;
    if(Array.isArray(type)) {
      return type;
    }
    return [type];
  }

  get defaultValue(): undefined | symbol | boolean | Date | string | number | object | any[] | null | (() => (void)) {
    const vueDefault = this.vue.default;
    if(vueDefault === undefined) {
      return undefined;
    }
    if(vueDefault === null) {
      return null;
    }
    if(isPrimitive(vueDefault)) {
      return vueDefault;
    }
    if(vueDefault instanceof Date) {
      return vueDefault;
    }

    const fn = vueDefault;
    if(typeof fn === 'function' && this.types.indexOf(Function) >= 0) {
      return fn.call();
    }
    return vueDefault;
  }

  get vuePropOptions(): PropOptions<any> {
    return {
      type: this.vue.type,
      required: this.required,
      default: this.vue.default,
      validator: this.vue.validator,
    };
  }

  updateWithOptions(options: Options) {
    const { type } = options;
    this.vue.default = options.default;
    this.vue.type = type;
    this.vue.validator = options.validator;
    this.required = options.required || false;
    this.readableDefaultValue = options.readableDefaultValue;
    this.acceptableValues = options.acceptableValues;
  }

  get formattedAcceptedValues(): string {
    const values = this.acceptableValues;
    return values == null ? '' : values.length === 0 ? '—' : values.join(', ');
  }

  toJSON(): object {
    const { defaultValue } = this;
    let serializableDefaultValue = defaultValue;
    if(defaultValue != null) {
      if(defaultValue instanceof Date) {
        serializableDefaultValue = defaultValue.toString();
      }
      if(typeof defaultValue === 'function') {
        serializableDefaultValue = String(defaultValue);
      }
    }
    return {
      name: this.key,
      description: this.description,
      required: this.required,
      acceptableValues: this.acceptableValues,
      readableDefaultValue: this.readableDefaultValue,
      types: stringifyPropTypes(this.types),
      defaultValue: serializableDefaultValue,
    };
  }
}
