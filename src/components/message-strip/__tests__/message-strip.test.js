// @ts-check
// @ts-ignore
import MessageStrip from './../message-strip.vue'
import { mount } from '@vue/test-utils'

describe('message strip', () => {
  it('with type = information works', () => {
    const vm = mount(MessageStrip, {
      propsData: {
        type: 'information'
      }
    })
    expect(vm.classes('fd-message-strip--information')).toBeTruthy()
  })

  it('with type = success works', () => {
    const vm = mount(MessageStrip, {
      propsData: {
        type: 'success'
      }
    })
    expect(vm.classes('fd-message-strip--success')).toBeTruthy()
  })

  it('with type = warning works', () => {
    const vm = mount(MessageStrip, {
      propsData: {
        type: 'warning'
      }
    })
    expect(vm.classes('fd-message-strip--warning')).toBeTruthy()
  })

  it('with type = error works', () => {
    const vm = mount(MessageStrip, {
      propsData: {
        type: 'error'
      }
    })
    expect(vm.classes('fd-message-strip--error')).toBeTruthy()
  })

  it('with dismissable = false does not render close button', () => {
    const vm = mount(MessageStrip, {
      propsData: {
        dismissible: false
      }
    })
    expect(vm.findAll('button')).toHaveLength(0)
  })
  it('renders close button by default and emits dismiss-event when clicked', async () => {
    const vm = mount(MessageStrip)
    // First make sure that dismiss has not already been emitted
    expect(vm.emitted('dismiss')).toBeUndefined()
    const closeButtonWrapper = vm.find('button.fd-message-strip__close')
    expect(closeButtonWrapper.exists()).toBeTruthy()
    // Click the close button and make sure that the message strip has emitted dismiss
    await closeButtonWrapper.trigger('click')
    expect(vm.emitted('dismiss')).toHaveLength(1)
  })
})
