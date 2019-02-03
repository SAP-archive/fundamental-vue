import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = () => {
    return { status: 'stable', icon: 'value-help', related: ['FdTabs', 'FdTabItem'] };
};
