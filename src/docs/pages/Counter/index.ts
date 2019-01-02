import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Counter }) => {

    return {componentStatus:'stable', icon:'number-sign', relatedComponents: [Counter]};
};
