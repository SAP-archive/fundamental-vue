import { ExampleCollectionFunction } from '../types';
import {
    ShellBarProduct,
    ShellBarGroup,
    ShellBarLogo,
    ShellBarActions,
    ShellBarAction,
    ShellBarUserMenu,
    ShellBarProductSwitcher,
    ShellBar,
    ShellBarProductSwitcherItem,
} from '@/components';

export const plugin: ExampleCollectionFunction = ({ Shell }) => {
    return {
        componentStatus: 'experimental',
        icon: 'header',
        relatedComponents: [
            ShellBar,
            ShellBarGroup,
            ShellBarProduct,
            ShellBarLogo,
            ShellBarActions,
            ShellBarAction,
            ShellBarUserMenu,
            ShellBarProductSwitcher,
            ShellBarProductSwitcherItem,
        ],
    };
};
