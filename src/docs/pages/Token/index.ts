import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Token }) => {
  return { relatedComponents: [Token] };
};
