import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ FormSet, FormGroup, FormItem, FormLabel, FormMessage, FieldSet, Input, InputGroup, Legend, TextArea, Select }) => {
  return { relatedComponents: [FormSet, FormGroup, FormItem, FormLabel, FormMessage, FieldSet, Input, InputGroup, Legend, TextArea, Select] };
};
