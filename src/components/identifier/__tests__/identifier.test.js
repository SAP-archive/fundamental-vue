import { mount } from '@vue/test-utils'
import Identifier from './../identifier.vue'

describe('Identifier', () => {
  it('renders background image', () => {
    const url = 'https://example.com/img.png'
    const identifier = mount(Identifier, {
      propsData: {
        url,
        thumbnail: true
      }
    })
    expect(identifier.element.style.backgroundImage).toEqual(`url(${url})`)
  })

  it('renders default slot', () => {
    const text = 'hi sap'
    const identifier = mount(Identifier, {
      slots: {
        default: text
      }
    })
    expect(identifier.text()).toEqual(text)
  })

  it('without icon – has no role attribute', () => {
    const identifier = mount(Identifier)
    expect(identifier.attributes()).not.toHaveProperty('role')
  })

  it('with icon – has correct role attribute', () => {
    const icon = 'money-bills'
    const identifier = mount(Identifier, {
      propsData: { icon }
    })
    expect(identifier.attributes('role')).toEqual('presentation')
  })

  it('with icon – renders background color', () => {
    const identifier = mount(Identifier, {
      propsData: {
        backgroundColor: 'accent-1'
      }
    })
    expect(identifier.classes()).toContain('fd-has-background-color-accent-1')
  })

  describe('correctly renders identifier with size', () => {
    it('xxs', async () => {
      const wrapper = await mount(Identifier, { propsData: { size: 'xxs', icon: 'money-bills' } })
      expect(wrapper.classes()).toContain(`sap-icon--money-bills`)
      expect(wrapper.classes()).toContain(`fd-identifier--xxs`)
    })
    it('xs', async () => {
      const wrapper = await mount(Identifier, { propsData: { size: 'xs', icon: 'money-bills' } })
      expect(wrapper.classes()).toContain(`sap-icon--money-bills`)
      expect(wrapper.classes()).toContain(`fd-identifier--xs`)
    })
    it('s', async () => {
      const wrapper = await mount(Identifier, { propsData: { size: 's', icon: 'money-bills' } })
      expect(wrapper.classes()).toContain(`sap-icon--money-bills`)
      expect(wrapper.classes()).toContain(`fd-identifier--s`)
    })
    it('m', async () => {
      const wrapper = await mount(Identifier, { propsData: { size: 'm', icon: 'money-bills' } })
      expect(wrapper.classes()).toContain(`sap-icon--money-bills`)
      expect(wrapper.classes()).toContain(`fd-identifier--m`)
    })
    it('l', async () => {
      const wrapper = await mount(Identifier, { propsData: { size: 'l', icon: 'money-bills' } })
      expect(wrapper.classes()).toContain(`sap-icon--money-bills`)
      expect(wrapper.classes()).toContain(`fd-identifier--l`)
    })
    it('xl', async () => {
      const wrapper = await mount(Identifier, { propsData: { size: 'xl', icon: 'money-bills' } })
      expect(wrapper.classes()).toContain(`sap-icon--money-bills`)
      expect(wrapper.classes()).toContain(`fd-identifier--xl`)
    })
    it('xxl', async () => {
      const wrapper = await mount(Identifier, { propsData: { size: 'xxl', icon: 'money-bills' } })
      expect(wrapper.classes()).toContain(`sap-icon--money-bills`)
      expect(wrapper.classes()).toContain(`fd-identifier--xxl`)
    })
  })
})
