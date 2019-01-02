import { assert } from 'chai';
import { Counter, Props } from '../components/Counter';
import { mount } from '@vue/test-utils';

describe('Counter', () => {
    let propsData: Props = {
        type: 'info',
        value: 23,
    };

    let counter = mount(Counter, { propsData });
    it('info type counter rendered if type is info', () => {
        assert(counter.hasClass('fd-counter'));

    let counter = mount(Counter, {propsData});
    it('info type counter rendered if type is info', () => {
       assert(counter.hasClass('fd-counter'));

    });


    propsData = {
        type: 'notification',
        value: 23,
    };

    counter = mount(Counter, { propsData });
    it('info type counter rendered if type is notification', () => {
        assert(counter.hasClass('fd-counter--notification'));
    });


    counter = mount(Counter, {propsData});
    it('info type counter rendered if type is notification', () => {
        assert(counter.hasClass('fd-counter--notification'));
     });
 
});
