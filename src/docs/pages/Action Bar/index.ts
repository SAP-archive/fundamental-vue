import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ ActionBar }) => {
  return { relatedComponents: [ActionBar] };
};
