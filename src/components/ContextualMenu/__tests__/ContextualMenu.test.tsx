import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { ContextualMenu } from '../ContextualMenu';
import { MenuItem } from '../../Menu';

describe('ContextualMenu', () => {
  it('renders menu item when passed to the default slots', () => {
    const wrapper = shallowMount(ContextualMenu, {
      render: h => <MenuItem>M1</MenuItem>,
    });
    expect(wrapper.find(MenuItem).text()).to.include('M1');
  });

  it('renders custom body', () => {
    const wrapper = shallowMount(ContextualMenu, {
      render: h => <div slot='body'>hell world</div>,
    });
    expect(wrapper.find('div').text()).to.include('hell world');
  });
});
