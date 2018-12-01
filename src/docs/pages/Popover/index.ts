import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Popover }) => {
  return { icon: 'message-popup', relatedComponents: [Popover] };
};
