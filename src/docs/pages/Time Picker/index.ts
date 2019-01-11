import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Time }) => {
    return { componentStatus: 'inprogress', icon:'fob-watch', relatedComponents: [Time]};
};
