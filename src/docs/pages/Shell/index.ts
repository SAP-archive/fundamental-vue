import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Shell }) => {
  return { experimental: true, icon: 'database', relatedComponents: [Shell] };
};
