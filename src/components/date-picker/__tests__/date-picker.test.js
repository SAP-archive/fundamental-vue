import DatePicker from './../date-picker.vue'
import { mount } from '@vue/test-utils'

describe('date picker', () => {
  it('validates value', () => {
    const wrapper = mount(DatePicker)
    const valueProp = wrapper.vm.$options.props.value
    const validator = valueProp.validator
    expect(validator).toBeDefined()
    expect(typeof validator).toBe('function')
    expect(validator(null)).toBeFalsy()
    expect(validator({ from: null, to: null })).toBeTruthy()
  })
})
