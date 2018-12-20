import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { ContextualMenu } from '../ContextualMenu';
import { MenuItem } from '../../Menu';

describe('Contextual Menu', () => {
  it('renders menu item when passed to the default slots', () => {
    const wrapper = mount(ContextualMenu, {
      render: h => <MenuItem>Menu1</MenuItem>,
    });
    expect(wrapper.find(MenuItem).text()).to.include('Menu1');
  });
  it('displays popover when button is clicked', () => {
    const props =  {
        propsData: {
            popoverVisible: false,
        },
    };
    const wrapper = mount(ContextualMenu, props );
    expect(wrapper.hasProp('popoverVisible', false));
    wrapper.find('button').trigger('click');
    expect(wrapper.hasProp('popoverVisible', true));
  });
});
