import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = () => {
    return { status: 'inprogress', icon:'fob-watch', related: ['FdTime', 'FdTimeItem', 'FdTimePicker']};
};
