export type PropType = ObjectConstructor |
  NumberConstructor |
  StringConstructor |
  BooleanConstructor |
  ArrayConstructor |
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
export class ApiProp {
  public readonly types: PropType[] = [];
  public readonly key: string;
  public static unspecifiedValue(): symbol { return __unspecifiedValue; }
  public get description(): string { return this._description; }
  private _description: string;
  public required = false;
  public defaultValue: any;
  private readonly _acceptedValues: PropValue[] = [];

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
