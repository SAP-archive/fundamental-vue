import { expect, assert } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Popover from '../Popover.vue';
import MenuList from '../../Menu/MenuList.vue';

describe('Popover', () => {
    it('renders menu list as default slot', () => {
      const wrapper = shallowMount(Popover, {
        slots: {
          default: 'Hi',
        },
      });
      expect(wrapper.find(MenuList).exists()).to.equal(true);
  });
    it('renders custom content in body slot', () => {
    const wrapper = shallowMount(Popover, {
      slots: {
        body: '<div>Hi</div>',
      },
    });
    expect(wrapper.find('div').text()).to.include('Hi');
  });
    it('clicking control slot content emits visible event', () => {
    const wrapper = shallowMount(Popover, {
      slots: {
        control: '<p>Hi</p>',
      },
    });
    const emitVisibleArray = wrapper.emitted().visible;
    // Prior to click, wrapper.emitted().visible = [ [false] ]
    assert.lengthOf(emitVisibleArray, 1);
    wrapper.find('p').trigger('click');
    // After click, wrapper.emitted().visible = [ [false], [true] ]
    assert.lengthOf(emitVisibleArray, 2);
    expect(wrapper.emitted().visible[1][0]).to.equal(true);

  });
});
