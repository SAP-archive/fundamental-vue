import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ ListGroup }) => {
    return { componentStatus: 'inprogress', icon: 'list', relatedComponents: [ListGroup] };
};
