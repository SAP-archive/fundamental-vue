import { assert } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { CalendarItem } from '../CalendarItem';

describe('CalendarItem', () => {
  it('emits click', () => {
    const wrapper = shallowMount(CalendarItem, {
      listeners: {
        click() {
          console.log('click');
        },
      },
    });
    wrapper.trigger('click');
    const clicks = wrapper.emitted('click');
    assert.isDefined(clicks);
    assert.isArray(clicks);
    assert.lengthOf(clicks, 1);
  });

  it('emits no click when disabled', () => {
    const wrapper = shallowMount(CalendarItem, {
      propsData: { state: 'disabled'},
      listeners: {
        click() {
          console.log('click');
        },
      },
    });
    wrapper.trigger('click');
    const clicks = wrapper.emitted('click');
    assert(clicks === undefined || clicks.length === 0);
  });
});
