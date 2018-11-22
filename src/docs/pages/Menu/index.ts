import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Menu, MenuList, MenuItem }) => {
  return { relatedComponents: [Menu, MenuList, MenuItem] };
};
