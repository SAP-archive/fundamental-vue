import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Label }) => {
  return { icon: 'text-formatting', relatedComponents: [Label] };
};
