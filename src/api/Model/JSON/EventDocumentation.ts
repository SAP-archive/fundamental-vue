// type RawType = { type: 'Raw'; meta: string; };
// type Type = { type: 'Boolean' | 'Number' | 'String'; };
type Parameter = {
  name: string;
  type: { name: string; meta?: string; };
  // type: RawType & Type;
};
export type EventDocumentation = {
  name: string;
  description: string;
  parameter?: Parameter;
};
