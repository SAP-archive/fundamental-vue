import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ PopoverContent }) => {
  return { relatedComponents: [PopoverContent] };
};
