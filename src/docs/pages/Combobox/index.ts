import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Combobox, MenuItem }) => {
  return { icon: 'drop-down-list', relatedComponents: [Combobox, MenuItem] };
};
