import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Combobox, MenuItem }) => {
  return { relatedComponents: [Combobox, MenuItem] };
};
