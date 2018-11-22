import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ SideNav, SideNavList, SideNavItem }) => {
  return { relatedComponents: [SideNav, SideNavList, SideNavItem] };
};
