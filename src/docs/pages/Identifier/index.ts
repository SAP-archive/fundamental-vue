import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Identifier }) => {
  return { relatedComponents: [Identifier] };
};
