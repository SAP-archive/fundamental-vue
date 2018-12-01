import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ InlineHelp }) => {
  return { icon: 'sys-help', relatedComponents: [InlineHelp] };
};
