import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = () => {
    return {
        status: 'experimental',
        icon: 'menu2',
        related: [
            'FdSideNav',
            'FdSideNavList',
            'FdSideNavItem',
            'FdSideNavLink',
            'FdSideNavGroup',
            'FdSideNavGroupTitle',
            'FdSideNavSubList',
            'FdSideNavSubItem',
            'FdSideNavSubLink',
            'FdSideNavIcon',
        ],
    };
};
