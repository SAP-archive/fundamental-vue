import { ExampleCollectionFunction } from '../types';
import { ShellBarProduct, ShellBarGroup, ShellBarLogo, ShellBarActions, ShellBarAction, ShellBarUserMenu, ShellBar } from '@/components';

export const plugin: ExampleCollectionFunction = ({ Shell }) => {
  return { experimental: true, icon: 'header', relatedComponents: [ShellBar, ShellBarGroup, ShellBarProduct, ShellBarLogo, ShellBarActions, ShellBarAction, ShellBarUserMenu] };
};
