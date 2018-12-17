import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ InlineHelp }) => {
    return { componentStatus: 'stable', icon: 'sys-help', relatedComponents: [InlineHelp] };
};
