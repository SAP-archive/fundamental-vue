import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Toggle }) => {
    return { componentStatus: 'stable', icon: 'record', relatedComponents: [Toggle] };
};
