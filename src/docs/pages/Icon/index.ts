import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Icon }) => {
    return { componentStatus: 'stable', icon: 'nutrition-activity', relatedComponents: [Icon] };
};
