import { ExampleCollectionFunction } from '../types';
import {
    ShellBarProduct,
    ShellBarProductTitle,
    ShellBarProductMenu,
    ShellBarGroup,
    ShellBarLogo,
    ShellBarSubtitle,
    ShellBarActions,
    ShellBarAction,
    ShellBarUserMenu,
    ShellBarProductSwitcher,
    ShellBar,
    ShellBarProductSwitcherItem,
    ShellBarProductSwitcherItemImg,
    ShellBarProductSwitcherItemTitle,
} from '@/components';

export const plugin: ExampleCollectionFunction = ({ Shell }) => {
  return {
    experimental: true,
    icon: 'header',
    relatedComponents: [
      ShellBar,
      ShellBarGroup,
      ShellBarProduct,
      ShellBarProductMenu,
      ShellBarProductTitle,
      ShellBarLogo,
      ShellBarSubtitle,
      ShellBarActions,
      ShellBarAction,
      ShellBarUserMenu,
      ShellBarProductSwitcher,
      ShellBarProductSwitcherItem,
      ShellBarProductSwitcherItemImg,
      ShellBarProductSwitcherItemTitle,
    ],
  };
};
