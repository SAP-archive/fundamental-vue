import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import { Toggle } from '../Toggle';
import { ComponentOptions } from 'vue';

describe('Toggle', () => {
  // We test this because there was a bug in the past which caused toggles to always be rendered
  // with the same size, no matter what value the size prop had.
  describe('renders correctly with size', () => {
    it('xs', () => {
      const toggle = mount<Toggle>(Toggle, { propsData: { size: 'xs' }});
      assert(toggle.find('.fd-toggle').classes('fd-toggle--xs'));
    });
    it('s', () => {
      const toggle = mount<Toggle>(Toggle, { propsData: { size: 's' }});
      assert(toggle.find('.fd-toggle').classes('fd-toggle--s'));
    });
    it('l', () => {
      const toggle = mount<Toggle>(Toggle, { propsData: { size: 'l' }});
      assert(toggle.find('.fd-toggle').classes('fd-toggle--l'));
    });
  });

  it('supports v-model', () => {
    const Parent: ComponentOptions<any> = {
      components: { Toggle },
      template: `<Toggle v-model="on" />`,
      data() {
        return {
          on: false,
        };
      },
    };
    const localVue = createLocalVue();
    const toggle = mount<Toggle>(Parent, { localVue });
    assert.strictEqual(false, toggle.vm.on);
    toggle.setData({ on: true });
    assert.strictEqual(true, toggle.vm.on);
    toggle.find('input').trigger('click');
    assert.strictEqual(false, toggle.vm.on);
  });
});
