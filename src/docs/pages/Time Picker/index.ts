import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Time, TimeItem, TimePicker }) => {
    return { componentStatus: 'inprogress', icon:'fob-watch', relatedComponents: [Time, TimeItem, TimePicker]};
};
