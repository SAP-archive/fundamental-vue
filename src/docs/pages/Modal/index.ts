import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Modal }) => {
  return { icon: 'popup-window', relatedComponents: [Modal] };
};
