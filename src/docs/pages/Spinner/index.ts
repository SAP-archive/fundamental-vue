import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Spinner }) => {
    return { componentStatus: 'inprogress', icon: 'synchronize', relatedComponents: [Spinner] };
};
