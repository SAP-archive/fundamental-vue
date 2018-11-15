import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Panel, PanelGrid }) => {
  return { relatedComponents: [Panel, PanelGrid] };
};
