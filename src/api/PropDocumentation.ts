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
  | string // used to represent arbitrary/raw/unknown types.
  ;

export type PropValue = string | number;
type DefaultValue = string | number | null;

type APIPropOptions = Readonly<{
    key: string;
    description?: string;
    required?: boolean;
    readableDefaultValue?: DefaultValue;
}>;

const __unspecifiedValue = Symbol();

type Options = PropOptions<any> & {
  readableDefaultValue?: string | number;
  acceptableValues?: Array<string | number>;
};

export class PropDocumentation<T = any> {
  public vueTypes: Prop<any> | Array<Prop<any>> | null = null;
  public readonly key: string;
  public static unspecifiedValue(): symbol { return __unspecifiedValue; }
  public description = '';
  public required = false;
  public defaultValue: T | null | undefined | (() => T | null | undefined);
  public readableDefaultValue?: DefaultValue | null = null;
  public acceptableValues: PropValue[] = [];

  public get vuePropOptions(): PropOptions<any> {
    return {
      type: this.vueTypes || undefined,
      required: this.required,
      default: this.defaultValue,
    };
  }

  public updateWithOptions(options: Options) {
    const { type } = options;
    this.defaultValue = options.default;
    this.required = options.required || false;
    this.readableDefaultValue = options.readableDefaultValue;
    this.acceptableValues = options.acceptableValues || [];
    if(typeof type === 'function') {
      this.vueTypes = type;
    } else {
      this.vueTypes = type || null;
    }
  }

  constructor({ key, description = key, required, readableDefaultValue }: APIPropOptions) {
    this.key = key;
    this.description = description;
    this.required = required || false;
    this.readableDefaultValue = readableDefaultValue;
    this.vueTypes = null;
  }

  public get formattedAcceptedValues(): string {
    return this.acceptableValues.length === 0 ? '—' : this.acceptableValues.join(', ');
  }

  public describe(text: string): this {
    this.description = text;
    return this;
  }
}
