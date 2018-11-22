import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ InlineHelp }) => {
  return { relatedComponents: [InlineHelp] };
};
