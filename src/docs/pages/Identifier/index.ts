import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Identifier }) => {
    return { componentStatus: 'stable', icon: 'text-formatting', relatedComponents: [Identifier] };
};
