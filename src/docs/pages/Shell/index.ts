import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Shell }) => {
    return { componentStatus: 'experimental', experimental: true, icon: 'database', relatedComponents: [Shell] };
};
