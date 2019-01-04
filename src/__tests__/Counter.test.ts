import { assert } from 'chai';
import { Counter, Props } from '../components/Counter';
import { mount } from '@vue/test-utils';

describe('Counter', () => {
  it('info type counter rendered if type is info', () => {
    const propsData: Props = {
      type: 'info',
      value: 23,
    };
    const counter = mount(Counter, { propsData });
    assert(counter.hasClass('fd-counter'));
  });

  it('info type counter rendered if type is notification', () => {
    const propsData = {
      type: 'notification',
      value: 23,
    };
    const counter = mount(Counter, { propsData });
    assert(counter.hasClass('fd-counter--notification'));
  });
});
