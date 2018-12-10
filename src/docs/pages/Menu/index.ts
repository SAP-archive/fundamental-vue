import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Menu, MenuList, MenuItem }) => {
  return { icon: 'menu', relatedComponents: [Menu, MenuList, MenuItem] };
};
