import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ SearchInput, Label, MenuItem }) => {
  return { relatedComponents: [SearchInput,Label,MenuItem] };
};