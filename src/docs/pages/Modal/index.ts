import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Modal }) => {
  return { relatedComponents: [Modal] };
};
