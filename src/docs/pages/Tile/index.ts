import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Tile, ProductTile }) => {
    return { componentStatus: 'inprogress', icon: 'border', relatedComponents: [Tile, ProductTile] };
};
