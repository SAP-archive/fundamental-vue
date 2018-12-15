import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Modal }) => {
    return { componentStatus: 'inprogress', icon: 'popup-window', relatedComponents: [Modal] };
};
