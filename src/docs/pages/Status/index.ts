import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Status }) => {
  return { relatedComponents: [Status] };
};
