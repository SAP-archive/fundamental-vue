import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import { ContextualMenu } from '../ContextualMenu';
import { MenuItem } from '../../Menu';
import { Popover } from '../../Popover';

describe('Contextual Menu', () => {
  it('renders menu item when passed to the default slots', () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `
      <ContextualMenu>
        <MenuItem>Menu1</MenuItem>
      </ContextualMenu>
      `,
      components: { MenuItem, ContextualMenu },
    });
    const wrapper = mount(TestComponent, { localVue });
    assert.include(wrapper.find(MenuItem).text(), 'Menu1');
  });

  it('displays popover when button is clicked', async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `
      <ContextualMenu>
        <MenuItem>Menu1</MenuItem>
      </ContextualMenu>
      `,
      components: { MenuItem, ContextualMenu },
    });
    const wrapper = mount(TestComponent, { localVue });
    await localVue.nextTick();
    wrapper.find('button').trigger('click');
    await localVue.nextTick();
    const popover = wrapper.find(Popover);
    assert.isDefined(popover, 'popover should be defined when button was clicked inside popover');
    assert(popover.isVisible, 'popover should be visible when button was clicked inside popover');
  });
});
