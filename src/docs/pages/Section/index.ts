import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Section, Panel, PanelGrid }) => {
    return { componentStatus: 'stable', icon: 'shelf', relatedComponents: [Section, Panel, PanelGrid] };
};
