import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Alert }) => {
    return { componentStatus: 'stable', icon: 'message-warning', relatedComponents: [Alert] };
};
