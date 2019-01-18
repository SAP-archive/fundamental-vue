import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Table, TableHeader, TableHeaderCell, TableRow, TableCell }) => {
    return {
        componentStatus: 'inprogress',
        relatedComponents: [Table, TableRow, TableCell],
        icon: 'table-view',
    };
};
