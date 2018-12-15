import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Combobox, MenuItem }) => {
    return { componentStatus: 'experimental', icon: 'drop-down-list', relatedComponents: [Combobox, MenuItem] };
};
