import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Popover }) => {
    return { componentStatus: 'inprogress', icon: 'message-popup', relatedComponents: [Popover] };
};
