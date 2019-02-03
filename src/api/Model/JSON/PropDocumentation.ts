type AcceptableValue = string | number | null;

export type PropDocumentation = {
  name: string;
  description: string;
  required: boolean;
  acceptableValues?: AcceptableValue[];
  readableDefaultValue?: string | number;
  types: string[];
  defaultValue?: string | number | any[] | object | null | boolean;
};
