import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Image }) => {
    return { componentStatus: 'stable', icon: 'background', relatedComponents: [Image] };
};
