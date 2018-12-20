import { ExampleCollectionFunction } from '@/docs/pages/types';

export const plugin: ExampleCollectionFunction = ({ ContextualMenu, Menu, MenuList, MenuItem }) => {
    return { componentStatus: 'inprogress', icon: 'vertical-grip', relatedComponents: [ ContextualMenu, Menu, MenuList, MenuItem ] };
};
