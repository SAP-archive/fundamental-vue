import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Menu, MenuList, MenuItem }) => {
    return { componentStatus: 'inprogress', icon: 'menu', relatedComponents: [Menu, MenuList, MenuItem] };
};
