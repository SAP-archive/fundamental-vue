import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ SearchInput, MenuItem }) => {
    return { componentStatus: 'experimental', icon: 'search', relatedComponents: [SearchInput, MenuItem] };
};
