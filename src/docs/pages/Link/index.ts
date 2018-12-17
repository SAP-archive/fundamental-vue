import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Link }) => {
    return { componentStatus: 'stable', icon: 'chain-link', relatedComponents: [Link] };
};
