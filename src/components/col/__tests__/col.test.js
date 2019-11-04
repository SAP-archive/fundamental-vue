import { mount } from '@vue/test-utils'
import Col from './../col.vue'

describe('FdCol', () => {
  it('adds correct class for span-prop', () => {
    const wrapper = mount(Col, { propsData: { span: 1 } })
    expect(wrapper.classes()).toContain('fd-col--1')
  })

  it('adds no span class when span is null', () => {
    const wrapper = mount(Col, { propsData: { span: null } })
    expect(wrapper.classes()).toHaveLength(1)
    expect(wrapper.classes()).toContain('fd-col')
  })

  it('adds shift-by-class', () => {
    const wrapper = mount(Col, { propsData: { shiftBy: 1 } })
    expect(wrapper.classes()).toHaveLength(2)
    expect(wrapper.classes()).toContain('fd-col--shift-1')
  })
})
