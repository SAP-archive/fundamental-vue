import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Link }) => {
  return { icon: 'chain-link', relatedComponents: [Link] };
};
