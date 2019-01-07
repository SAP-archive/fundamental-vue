import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Time }) => {
    return { componentStatus: 'inprogress', icon:'create-entry-time', relatedComponents: [Time]};
};
