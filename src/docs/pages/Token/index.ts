import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Token }) => {
    return { componentStatus: 'stable', icon: 'tags', relatedComponents: [Token] };
};
