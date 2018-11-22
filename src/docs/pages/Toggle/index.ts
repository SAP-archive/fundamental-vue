import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Toggle }) => {
  return { relatedComponents: [Toggle] };
};
