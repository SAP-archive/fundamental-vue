import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ ActionBar }) => {
    return { componentStatus: 'inprogress', icon: 'action', relatedComponents: [ActionBar] };
};
