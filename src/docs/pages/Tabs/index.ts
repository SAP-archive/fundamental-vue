import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Tabs, TabItem }) => {
  return { icon: 'value-help', relatedComponents: [Tabs, TabItem] };
};
