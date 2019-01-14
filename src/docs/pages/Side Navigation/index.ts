import { ExampleCollectionFunction } from '../types';
import { SideNavGroup, SideNavGroupTitle, SideNavSubList, SideNavSubItem, SideNavSubLink, SideNavIcon } from '@/components';

export const plugin: ExampleCollectionFunction = ({ SideNav, SideNavList, SideNavItem, SideNavLink }) => {
    return {
        componentStatus: 'experimental',
        icon: 'menu2',
        relatedComponents: [
            SideNav,
            SideNavList,
            SideNavItem,
            SideNavLink,
            SideNavGroup,
            SideNavGroupTitle,
            SideNavSubList,
            SideNavSubItem,
            SideNavSubLink,
            SideNavIcon,
        ],
    };
};
