import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Button, ButtonGroup }) => {
  return { icon: 'draw-rectangle', relatedComponents: [Button, ButtonGroup] };
};
