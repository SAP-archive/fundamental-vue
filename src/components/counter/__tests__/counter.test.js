import { Counter } from '../'
import { mount } from '@vue/test-utils'

describe('Counter', () => {
  it('adds counter class and aria label and renders actual value', () => {
    const counter = mount(Counter, {
      propsData: {
        label: 'Counter',
        value: 44
      }
    })
    expect(counter.classes()).toContain('fd-counter')
    expect(counter.attributes('aria-label')).toEqual('Counter')
    expect(counter.text()).toEqual('44')
  })

  it('adds notification class when notification flag is used', () => {
    const counter = mount(Counter, {
      propsData: {
        label: 'Counter',
        notification: true
      }
    })
    expect(counter.classes()).toContain('fd-counter--notification')
  })

  it('formats value > 999 as 999+', () => {
    const counter = mount(Counter, {
      propsData: {
        label: 'Counter',
        value: 1200
      }
    })
    expect(counter.text()).toEqual('999+')
  })
})
