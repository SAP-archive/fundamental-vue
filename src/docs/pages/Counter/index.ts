import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({ Counter }) => {
    return {componentStatus:'inprogress', icon:'number-sign', relatedComponents: [Counter]};
}