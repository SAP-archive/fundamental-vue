import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = () => {
    return { status: 'inprogress', icon: 'menu', related: ['FdMenu', 'FdMenuList', 'FdMenuItem'] };
};
