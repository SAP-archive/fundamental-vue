import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ ListGroup }) => {
  return { relatedComponents: [ListGroup] };
};
