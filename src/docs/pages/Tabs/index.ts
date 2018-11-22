import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Tabs, TabItem }) => {
  return { relatedComponents: [Tabs, TabItem] };
};
