import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Popover }) => {
  return { relatedComponents: [Popover] };
};
