import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Spinner }) => {
  return { relatedComponents: [Spinner] };
};
