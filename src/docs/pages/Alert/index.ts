import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Alert }) => {
  return { icon: 'message-warning', relatedComponents: [Alert] };
};
