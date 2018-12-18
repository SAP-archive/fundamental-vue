import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ ContextualMenu, Menu, MenuList, MenuItem }) => {
    return { componentStatus: 'inprogress', icon: 'menu2', relatedComponents: [ContextualMenu, Menu, MenuList, MenuItem] };
};
