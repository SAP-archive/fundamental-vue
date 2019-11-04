import { createLocalVue, mount } from '@vue/test-utils'
import Link from './../link.vue'

describe('nested-link', () => {
  it('renders href', () => {
    const wrapper = mount(Link, {
      attrs: {
        href: '#hello'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
