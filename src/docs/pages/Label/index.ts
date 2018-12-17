import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Label }) => {
    return { componentStatus: 'stable', icon: 'text-formatting', relatedComponents: [Label] };
};
