type ParameterType = string | BooleanConstructor | NumberConstructor | StringConstructor;
type Parameter = [/* name */ string, ParameterType];

type ParameterTypeJSON = {
  // type as String: 'String', 'Boolean', ... or 'Raw' if it is a
  // type described by plain words.
  name: string;

  // If type === 'Raw' then meta contains the wordy description of the type.
  meta?: string;
};

const parameterTypeToJSON = (type: ParameterType): ParameterTypeJSON => {
  if(typeof type === 'string') {
    return { name: 'Raw', meta: type };
  }
  return { name: type.name };
};

type ParameterJSON = {
  name: string;
  type: ParameterTypeJSON;
};
const parameterToJSON = (parameter: Parameter): ParameterJSON => {
  const [name, type] = parameter;
  return {
    name,
    type: parameterTypeToJSON(type),
  };
};

type EventJSON = {
  name: string;
  description: string;
  parameter?: ParameterJSON;
};

export class EventDocumentation {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly parameter?: Parameter,
  ) { }

  toJSON(): EventJSON {
    const parameter = this.parameter ? parameterToJSON(this.parameter): undefined;
    return {
      name: this.name,
      description: this.description,
      parameter,
    };
  }

  static fromJSON(event: EventJSON): EventJSON {
    return event;
  }
}
