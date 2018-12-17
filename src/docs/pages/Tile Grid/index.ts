import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ TileGrid }) => {
    return { componentStatus: 'stable', icon: 'heatmap-chart', relatedComponents: [TileGrid] };
};
