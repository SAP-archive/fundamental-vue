import { mount } from '@vue/test-utils'
import InputGroup from '../input-group.vue'
import InputGroupAddon from '../addon.vue'
import InputGroupInput from './../input.vue'

describe('InputGroup', () => {
  const before = '$'
  const after = '€'

  const wrapper = mount({
    components: { InputGroup, InputGroupAddon, InputGroupInput },
    template: `
    <InputGroup>
      <template #before>
        <InputGroupAddon>$</InputGroupAddon>
      </template>
      <template #after>
        <InputGroupAddon>€</InputGroupAddon>
      </template>
      <template #input>
        <InputGroupInput />
      </template>
    </InputGroup>`
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  // describe("Compact Style", () => {
  //   const wrapper = mount(InputGroup, {
  //     propsData: {
  //       compact: true
  //     },
  //     slots: {
  //       default: {
  //         render(h) {
  //           return h(FdInput);
  //         }
  //       }
  //     }
  //   });

  //   it("renders correctly", () => {
  //     expect(wrapper.element).toMatchSnapshot();
  //   });

  //   it("has compact style", () => {
  //     expect(wrapper.contains(".fd-input-group--compact")).toBe(true);
  //   });

  //   it("does not have before and after", () => {
  //     expect(wrapper.contains(".InputGroup__addon")).toBe(false);
  //   });
  // });
})
