import { createDecorator } from 'vue-class-component';
export type PropType = ObjectConstructor | NumberConstructor | StringConstructor | BooleanConstructor | ArrayConstructor | string;
type PropValue = string | number;

export class APIProp {
  public readonly types: PropType[] = [];
  private readonly _acceptedValues: PropValue[] = [];

  constructor(readonly key: string, public description: string) { }

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
    this.description = text;
    return this;
  }
}

export class APIEvent {
  constructor(readonly name: string, readonly description: string, readonly parameters: APIEventParameter[] = []) { }

  public number(name: string): this {
    this.parameters.push({ name, type: Number });
    return this;
  }

  public string(name: string): this {
    this.parameters.push({ name, type: String });
    return this;
  }

  public boolean(name: string): this {
    this.parameters.push({ name, type: Boolean });
    return this;
  }

  public raw(name: string, type: string): this {
    this.parameters.push({ name, type });
    return this;
  }
}

type ComponentBuilder = (builder: API) => void;
type PropBuilder = (builder: APIProp) => void;
type EventBuilder = (builder: APIEvent) => void;

export class API {
  public readonly props: APIProp[] = [];
  public readonly events: APIEvent[] = [];
  constructor(public humanName?: string) { }

  public addProp(prop: APIProp) {
    this.props.push(prop);
  }

  public addEvent(name: string, description: string, build: EventBuilder = () => { }): this {
    const event = new APIEvent(name, description);
    build(event);
    this.events.push(event);
    return this;
  }

  public static Component(humanName: string, build: ComponentBuilder = () => { }) {
    return createDecorator((options, key) => {
      const api = options.$api || new API(humanName);
      api.humanName = humanName;
      build(api);
      options.$api = api;
    });
  }
  public static Prop(description: string, build: PropBuilder = () => { }) {
    return createDecorator((options, key) => {
      const prop = new APIProp(key, description);
      build(prop);
      const api = options.$api || new API();
      api.addProp(prop);
      options.$api = api;
    });
  }
}

export class APICollection {
  constructor(readonly apis: API[] = []) { }
  public add(api: API) {
    this.apis.push(api);
  }
}

type APIEventParameterType = string | BooleanConstructor | NumberConstructor | StringConstructor;

type APIEventParameter = {
  type: APIEventParameterType;
  name: string;
};
