import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ SearchInput, MenuItem }) => {
  return { icon: 'search', relatedComponents: [SearchInput,MenuItem] };
};
