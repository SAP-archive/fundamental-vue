import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ TileGrid }) => {
    return { relatedComponents: [TileGrid] };
};
