import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ InputGroup, Input }) => {
    return { componentStatus: 'stable', icon: 'group-2', relatedComponents: [InputGroup, Input] };
};
