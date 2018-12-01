import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Badge }) => {
  return { icon: 'badge', relatedComponents: [Badge] };
};
