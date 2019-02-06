import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Popover from '../Popover.vue';
import { MenuItem } from '../../Menu';

describe('Popover', () => {
  it('renders menu item when passed to the default slots', () => {
    const wrapper = shallowMount(Popover, {
      template: `<MenuItem>M1</MenuItem>`,
    });
    expect(wrapper.find(MenuItem).text()).to.include('M1');
  });

  it('renders custom body', () => {
    const wrapper = shallowMount(Popover, {
      template: `<div slot='body'>hell world</div>`,
    });
    expect(wrapper.find('div').text()).to.include('hell world');
  });
});
