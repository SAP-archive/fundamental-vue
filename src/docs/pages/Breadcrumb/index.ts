import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Breadcrumb, BreadcrumbItem }) => {
  return { icon: 'navigation-right-arrow', relatedComponents: [Breadcrumb, BreadcrumbItem] };
};
