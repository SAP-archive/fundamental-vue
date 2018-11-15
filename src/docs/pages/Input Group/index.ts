import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ InputGroup, Input }) => {
  return { relatedComponents: [InputGroup, Input] };
};
