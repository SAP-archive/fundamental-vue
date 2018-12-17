import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Shell }) => {
    return { componentStatus: 'experimental', icon: 'database', relatedComponents: [Shell] };
};
