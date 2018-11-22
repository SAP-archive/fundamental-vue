import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Label }) => {
  return { relatedComponents: [Label] };
};
