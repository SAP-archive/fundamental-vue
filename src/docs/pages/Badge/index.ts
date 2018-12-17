import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Badge }) => {
    return { componentStatus: 'stable', icon: 'badge', relatedComponents: [Badge] };
};
