import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Table, TableColumn }) => {
    return {
        componentStatus: 'inprogress',
        relatedComponents: [Table, TableColumn],
        icon: 'table-view',
    };
};
