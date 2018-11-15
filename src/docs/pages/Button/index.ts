import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Button, ButtonGroup }) => {
  return { relatedComponents: [Button, ButtonGroup] };
};
