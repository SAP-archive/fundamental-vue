import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Pagination }) => {
  return { icon: 'paging', relatedComponents: [Pagination] };
};
