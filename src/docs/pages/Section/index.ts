import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Section, Panel, PanelGrid }) => {
  return { icon: 'shelf', relatedComponents: [Section, Panel, PanelGrid] };
};
