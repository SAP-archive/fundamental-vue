import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Status }) => {
  return { icon: 'order-status', relatedComponents: [Status] };
};
