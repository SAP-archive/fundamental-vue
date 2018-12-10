import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Toggle }) => {
  return { icon: 'record', relatedComponents: [Toggle] };
};
