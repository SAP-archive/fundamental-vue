import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Shell }) => {
  return { icon: 'database', relatedComponents: [Shell] };
};
