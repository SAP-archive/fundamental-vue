import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ ActionBar }) => {
  return { icon: 'action', relatedComponents: [ActionBar] };
};
