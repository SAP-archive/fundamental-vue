import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = () => {
    return { status: 'stable', icon: 'along-stacked-chart', related: ['FdPanel', 'FdPanelGrid'] };
};
