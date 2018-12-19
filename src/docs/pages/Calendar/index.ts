import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Calendar }) => {
  return { componentStatus: 'experimental', icon: 'calendar', relatedComponents: [Calendar] };
};
