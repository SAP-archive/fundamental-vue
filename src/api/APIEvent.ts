type APIEventParameterType = string | BooleanConstructor | NumberConstructor | StringConstructor;

type APIEventParameter = {
  type: APIEventParameterType;
  name: string;
};

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
