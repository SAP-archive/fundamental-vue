import { PropOptions } from 'vue';
import { Prop } from 'vue/types/options';

export type PropType =
  | FunctionConstructor
  | ObjectConstructor
  | NumberConstructor
  | StringConstructor
  | BooleanConstructor
  | ArrayConstructor
  | DateConstructor
  | { new (...args: any[]): any & object }
  | (() => any)
  ;

export type PropValue = string | number;
export type DefaultValue = string | number | null;

const __unspecifiedValue = Symbol();

type Options = PropOptions<any> & {
  readableDefaultValue?: string | number;
  acceptableValues?: Array<string | number>;
};

export type VuePropDefaultValueType = any | null | undefined | (() => any | null | undefined);

class VuePropOptions {
  public type?: Prop<any> | Array<Prop<any>>;
  public required?: boolean;
  public default?: any | null | undefined | (() => any | null | undefined);
  public validator?: (value: any) => boolean;
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
  public readonly vue = new VuePropOptions();
  public readonly key: string;
  public static unspecifiedValue(): symbol { return __unspecifiedValue; }
  public description = '';
  public get required() { return this.vue.required || false; }
  public set required(newValue) { this.vue.required = newValue; }
  public readableDefaultValue?: DefaultValue | null = null;
  public acceptableValues?: AcceptableValues;

  constructor(key: string) {
    this.key = key;
    this.description = key;
  }

  public get types(): PropType[] {
    const { type = [] } = this.vue;
    if(Array.isArray(type)) {
      return type;
    }
    return [type];
  }

  public get defaultValue(): undefined | symbol | boolean | Date | string | number | object | any[] | null | (() => (void)) {
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
    if(typeof fn === 'function' && !this.types.includes(Function)) {
      return fn.call();
    }
    return vueDefault;
  }

  public get vuePropOptions(): PropOptions<any> {
    return {
      type: this.vue.type,
      required: this.required,
      default: this.vue.default,
      validator: this.vue.validator,
    };
  }

  public updateWithOptions(options: Options) {
    const { type } = options;
    this.vue.default = options.default;
    this.vue.type = type;
    this.vue.validator = options.validator;
    this.required = options.required || false;
    this.readableDefaultValue = options.readableDefaultValue;
    this.acceptableValues = options.acceptableValues;
  }

  public get formattedAcceptedValues(): string {
    const values = this.acceptableValues;
    return values == null ? '' : values.length === 0 ? '—' : values.join(', ');
  }
}
