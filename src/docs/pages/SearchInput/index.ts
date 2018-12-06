import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ SearchInput, MenuItem }) => {
  return { relatedComponents: [SearchInput,MenuItem] };
};