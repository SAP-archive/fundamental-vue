import normalize from './../normalize'
import { createLocalVue, mount } from '@vue/test-utils'

describe('normalize notification', () => {
  it('handles simple string', () => {
    const notification = normalize('hello world')
    expect(notification).toHaveProperty('component')
    expect(notification).toHaveProperty('id')
    const { component, id } = notification
    expect(typeof id).toBe('string')
    expect(typeof component).toBe('object')
    // todo: check the actual component
  })

  it('throws for null', () => {
    expect(() => normalize(null)).toThrow()
  })

  it('throws for undefined', () => {
    expect(() => normalize()).toThrow()
  })

  it('does not normalize already normalized notification', () => {
    const notification = {
      id: 'my_notification',
      component: {
        render(h) {
          return h('div', {}, 'my notification')
        }
      }
    }

    const normalized = normalize(notification)
    expect(normalized).toHaveProperty('component')
    expect(normalized).toHaveProperty('id')
    const { component, id } = normalized
    expect(id).toEqual(notification.id)
    expect(component).toEqual(notification.component)
  })
})
