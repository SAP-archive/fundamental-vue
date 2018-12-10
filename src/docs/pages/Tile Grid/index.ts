import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ TileGrid }) => {
    return { icon: 'heatmap-chart', relatedComponents: [TileGrid] };
};
