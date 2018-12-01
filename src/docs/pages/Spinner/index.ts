import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Spinner }) => {
  return { icon: 'synchronize', relatedComponents: [Spinner] };
};
