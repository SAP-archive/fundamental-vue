import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Panel, PanelGrid }) => {
  return { icon: 'along-stacked-chart', relatedComponents: [Panel, PanelGrid] };
};
