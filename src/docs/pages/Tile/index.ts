import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Tile, ProductTile }) => {
    return { icon: 'border', relatedComponents: [Tile, ProductTile] };
};
