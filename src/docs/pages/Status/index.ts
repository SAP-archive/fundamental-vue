import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Status }) => {
    return { componentStatus: 'stable', icon: 'order-status', relatedComponents: [Status] };
};
