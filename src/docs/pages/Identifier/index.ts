import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Identifier }) => {
  return { icon: 'text-formatting', relatedComponents: [Identifier] };
};
