import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Badge }) => {
  return { relatedComponents: [Badge] };
};
