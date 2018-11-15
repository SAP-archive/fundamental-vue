import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Alert }) => {
  return { relatedComponents: [Alert] };
};
