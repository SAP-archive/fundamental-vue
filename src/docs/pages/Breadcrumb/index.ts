import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Breadcrumb, BreadcrumbItem }) => {
    return {
        componentStatus: 'inprogress',
        icon: 'navigation-right-arrow',
        relatedComponents: [Breadcrumb, BreadcrumbItem]
    };
};
