import { mount } from '@vue/test-utils'
import Container from './../container.vue'

describe('FdContainer', () => {
  it('adds correct class for flex container', () => {
    const wrapper = mount(Container, { propsData: { flex: true } })
    expect(wrapper.classes()).toContain('fd-container--flex')
  })

  it('adds correct class for fluid container', () => {
    const wrapper = mount(Container, { propsData: { fluid: true } })
    expect(wrapper.classes()).toContain('fd-container--fluid')
  })

  it('adds correct class for centered container', () => {
    const wrapper = mount(Container, { propsData: { centered: true } })
    expect(wrapper.classes()).toContain('fd-container--centered')
  })
})
