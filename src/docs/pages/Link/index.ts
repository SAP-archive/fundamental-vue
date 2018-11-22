import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Link }) => {
  return { relatedComponents: [Link] };
};
