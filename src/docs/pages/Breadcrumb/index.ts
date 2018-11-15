import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Breadcrumb, BreadcrumbItem }) => {
  return { relatedComponents: [Breadcrumb, BreadcrumbItem] };
};
