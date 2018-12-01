import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Token }) => {
  return { icon: 'tags', relatedComponents: [Token] };
};
