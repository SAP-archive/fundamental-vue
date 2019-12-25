import Addon from './../addon.vue'
import { mount } from '@vue/test-utils'

describe('input-group addon', () => {
  it('adds compact class when compact is true', () => {
    const wrapper = mount(Addon, {
      propsData: {
        compact: true
      }
    })
    expect(wrapper.classes()).toContain('fd-input-group__addon--compact')
  })
})
