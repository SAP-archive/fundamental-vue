import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ SideNav, SideNavList, SideNavItem }) => {
    return { componentStatus: 'deprecated', icon: 'menu2', relatedComponents: [SideNav, SideNavList, SideNavItem] };
};
