import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Tabs, TabItem }) => {
    return { componentStatus: 'stable', icon: 'value-help', relatedComponents: [Tabs, TabItem] };
};
