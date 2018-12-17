import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Panel, PanelGrid }) => {
    return { componentStatus: 'stable', icon: 'along-stacked-chart', relatedComponents: [Panel, PanelGrid] };
};
