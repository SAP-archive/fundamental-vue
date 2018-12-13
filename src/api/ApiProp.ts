import { PropOptions } from 'vue';
import { Prop, PropValidator } from 'vue/types/options';

const WellKnownCtors = [Date, Object, Number, String, Boolean, Function, Array];
type WellKnownCtor =
ObjectConstructor |
NumberConstructor |
StringConstructor |
BooleanConstructor |
FunctionConstructor |
DateConstructor |
ArrayConstructor;

export type PropType =
  FunctionConstructor |
  ObjectConstructor |
  NumberConstructor |
  StringConstructor |
  BooleanConstructor |
  ArrayConstructor |
  DateConstructor |
  string; // used to represent arbitrary/raw/unknown types.

type PropValue = string | number;
type DefaultValue = string | number;
type APIPropOptions = Readonly<{
    key: string;
    description: string;
    required?: boolean;
    defaultValue?: DefaultValue;
}>;

const __unspecifiedValue = Symbol();
const wellKnownCtor = (type: any): type is WellKnownCtor => {
  return WellKnownCtors.includes(type);
};

export class ApiProp {
  public readonly types: PropType[] = [];
  public readonly key: string;
  public static unspecifiedValue(): symbol { return __unspecifiedValue; }
  public get description(): string { return this._description; }
  private _description: string;
  public required = false;
  public defaultValue: any;
  private readonly _acceptedValues: PropValue[] = [];

  public updateWithPropValidator(validator: PropValidator<any>) {
    let required = false;
    if('required' in validator) {
      required = validator.required || false;
    }
    let defaultValue: any;
    if('default' in validator) {
      defaultValue = validator.default || undefined;
    }

    this.required = required;
    this.defaultValue = defaultValue;

    let type: any;
    if('type' in validator) {
      type = validator.type;
    }

    if(Array.isArray(type) || typeof type === 'object') {
      this.updateWithType(type);
    } else {
      if(wellKnownCtor(type)) {
        this.addPropType(type);
      }
    }
  }
  public updateWithPropOptions(options: PropOptions<any>) {
    const { type, required = false } = options;
    this.required = required;
    if(Array.isArray(type) || typeof type === 'object') {
      this.updateWithType(type);
    } else {
      if(wellKnownCtor(type)) {
        this.addPropType(type);
      }
    }
  }

  private addPropType(propType: Prop<any>) {
    if(wellKnownCtor(propType)) {
      this.type(propType);
    }
  }

  private updateWithType(propType: Prop<any> | Array<Prop<any>>) {
    if(Array.isArray(propType)) {
      for(const type of propType) {
        this.addPropType(type);
      }
    } else {
      if(typeof propType !== 'object') {
        this.addPropType(propType);
      }
    }
  }

  constructor({ key, description, required, defaultValue }: APIPropOptions) {
    this.key = key;
    this._description = description;
    this.required = required || false;
    this.defaultValue = defaultValue;
  }

  public get formattedAcceptedValues(): string {
    return this._acceptedValues.length === 0 ? '—' : this._acceptedValues.join(', ');
  }

  public get formattedType(): string {
    const names = this.types.map(type => {
      if (typeof type === 'string') { return type; }
      return type.name;
    });
    if (names.length === 0) {
      return '—';
    }
    return names.join(', ');
  }

  public type(...types: PropType[]): this {
    this.types.push(...types);
    return this;
  }

  public acceptValues(...values: PropValue[]): this {
    this._acceptedValues.push(...values);
    return this;
  }

  public describe(text: string): this {
    this._description = text;
    return this;
  }
}
