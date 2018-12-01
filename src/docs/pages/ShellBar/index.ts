import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Shell }) => {
  return { icon: 'header', relatedComponents: [Shell] };
};
