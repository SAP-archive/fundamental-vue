import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Icon }) => {
  return { icon: 'nutrition-activity', relatedComponents: [Icon] };
};
