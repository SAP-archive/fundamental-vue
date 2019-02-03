import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = () => {
    return { status: 'stable', icon: 'shelf', related: ['FdSection', 'FdPanel', 'FdPanelGrid'] };
};
