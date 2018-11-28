import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Tile, ProductTile }) => {
    return { relatedComponents: [Tile, ProductTile] };
};
