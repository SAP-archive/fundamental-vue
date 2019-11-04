import { createLocalVue, mount } from '@vue/test-utils'
import Breadcrumb from '../breadcrumb.vue'
import BreadcrumbItem from '../item.vue'
import BreadcrumbLink from '../link.vue'

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    const localVue = createLocalVue()
    const wrapper = mount(
      {
        template: `
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#item1">Item 1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#item2">Item 2</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>`,
        components: {
          Breadcrumb,
          BreadcrumbLink,
          BreadcrumbItem
        }
      },
      { localVue }
    )
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has correct number of breadcrumb items', () => {
    const localVue = createLocalVue()
    const wrapper = mount(
      {
        template: `
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#item1">Item 1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#item2">Item 2</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>`,
        components: {
          Breadcrumb,
          BreadcrumbLink,
          BreadcrumbItem
        }
      },
      { localVue }
    )
    expect(wrapper.findAll('li')).toHaveLength(2)
  })
})
