import { mount } from '@vue/test-utils'
import { Spinner } from '../'

describe('Spinner', () => {
  it('renders correctly', () => {
    const spinner = mount(Spinner, {
      propsData: {
        label: 'Label'
      }
    })
    expect(spinner.element).toMatchSnapshot()
  })

  it('renders label props as aria-label attr', () => {
    const spinner = mount(Spinner, {
      propsData: {
        label: 'Label'
      }
    })
    expect(spinner.attributes('aria-label')).toEqual('Label')
  })

  it('can be hidden', () => {
    const spinner = mount(Spinner, {
      propsData: {
        label: 'Label',
        hidden: true
      }
    })
    expect(spinner.attributes('aria-label')).toEqual('Label')
    expect(spinner.attributes('aria-hidden')).toEqual('true')
  })
})
