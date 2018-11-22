import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Icon }) => {
  return { relatedComponents: [Icon] };
};
