import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = () => {
    return { status: 'stable', icon: 'draw-rectangle', related: ['FdButton', 'FdButtonGroup'] };
};
