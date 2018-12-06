import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ SearchInput, Label }) => {
  return { relatedComponents: [SearchInput] };
};