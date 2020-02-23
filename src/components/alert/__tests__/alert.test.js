import { TransitionGroupStub, TransitionStub, mount } from '@vue/test-utils'
import { Alert } from '../'

describe('Alert', () => {
  it('renders correctly', async () => {
    const warningAlert = await mount(Alert, {
      propsData: {
        type: 'warning',
        dismissible: true,
        id: 'warningAlert',
        uid: 'alert'
      }
    })
    const errorAlert = await mount(Alert, {
      propsData: { type: 'error', dismissible: false, id: 'errorAlert' }
    })
    expect(warningAlert.element).toMatchSnapshot()
    expect(errorAlert.element).toMatchSnapshot()
    expect(warningAlert.classes('fd-alert--warning')).toBe(true)
    expect(errorAlert.classes('fd-alert--dismissible')).toBe(false)
  })
  it('renders default slot when passed', () => {
    const dummySlot = 'Slot text'
    const wrapper = mount(Alert, {
      slots: {
        default: dummySlot
      }
    })
    expect(wrapper.text()).toMatch(dummySlot)
  })
  it('click on close hides the alert', async () => {
    const alert = mount(
      Alert,
      {
        propsData: {
          dismissible: true
        }
      },
      {
        stubs: {
          transition: TransitionStub,
          'transition-group': TransitionGroupStub
        }
      }
    )
    expect(alert.isVisible()).toBe(true)
    const closeButton = alert.find('button')
    expect(alert.isVisible()).toBe(true)
    await closeButton.trigger('click')
    expect(alert.isVisible()).toBe(false)
  })
})
