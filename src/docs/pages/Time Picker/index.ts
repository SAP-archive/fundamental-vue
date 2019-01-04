import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ TimeItem }) => {
    return { componentStatus: 'inprogress', icon:'create-entry-time', relatedComponents: [TimeItem]};
};