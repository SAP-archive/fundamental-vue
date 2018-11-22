import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Section, Panel, PanelGrid }) => {
  return { relatedComponents: [Section, Panel, PanelGrid] };
};
