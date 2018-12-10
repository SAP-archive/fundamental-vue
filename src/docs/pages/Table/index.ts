import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Table, TableColumn }) => {
  return {
    relatedComponents: [Table, TableColumn],
    icon: 'table-view',
  };
};
