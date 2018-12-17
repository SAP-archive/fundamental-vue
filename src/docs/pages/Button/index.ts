import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Button, ButtonGroup }) => {
    return { componentStatus: 'stable', icon: 'draw-rectangle', relatedComponents: [Button, ButtonGroup] };
};
