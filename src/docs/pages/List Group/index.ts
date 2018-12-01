import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ ListGroup }) => {
  return { icon: 'list', relatedComponents: [ListGroup] };
};
