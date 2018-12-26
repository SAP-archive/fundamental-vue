import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Tree }) => {
  return { icon: 'paging', relatedComponents: [Tree] };
};
