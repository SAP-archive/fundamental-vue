import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ SearchInput }) => {
  return { relatedComponents: [SearchInput] };
};