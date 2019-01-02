type APIEventParameterType = string | BooleanConstructor | NumberConstructor | StringConstructor;
type EventType = [/* name */ string, APIEventParameterType];

export class EventDocumentation {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly parameter?: EventType,
  ) { }
}
