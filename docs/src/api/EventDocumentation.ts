type Parameter = {
  name: string;
  type: { name: string; meta?: string };
};
export type EventDocumentation = {
  name: string;
  description: string;
  parameter?: Parameter;
};
