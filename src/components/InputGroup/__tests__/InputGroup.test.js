import { mount } from "@vue/test-utils";
import FdInputGroup from "../InputGroup.vue";
import FdInputGroupAddon from "../InputGroupAddon.vue";
import FdInput from "../../Form/Controls/Input.vue";

describe("InputGroup", () => {
  const before = "$";
  const after = "€";

  const wrapper = mount({
    components: { FdInputGroup, FdInputGroupAddon, FdInput },
    template: `
    <fd-input-group>
      <template #before>
        <fd-input-group-addon>$</fd-input-group-addon>
      </template>
      <template #after>
        <fd-input-group-addon>€</fd-input-group-addon>
      </template>
      <template #input>
        <fd-input />
      </template>
    </fd-input-group>`
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders before after correctly", () => {
    expect(wrapper.contains(".fd-input-group__addon--before")).toBe(true);
    expect(wrapper.find(".fd-input-group__addon--before").text()).toEqual(before);
    expect(wrapper.contains(".fd-input-group__addon--after")).toBe(true);
    expect(wrapper.find(".fd-input-group__addon--after").text()).toEqual(after);
  });

  describe("Compact Style", () => {
    const wrapper = mount(FdInputGroup, {
      propsData: {
        compact: true
      },
      slots: {
        default: {
          render(h) {
            return h(FdInput);
          }
        }
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has compact style", () => {
      expect(wrapper.contains(".fd-input-group--compact")).toBe(true);
    });

    it("does not have before and after", () => {
      expect(wrapper.contains(".fd-input-group__addon--before")).toBe(false);
      expect(wrapper.contains(".fd-input-group__addon--after")).toBe(false);
    });
  });
});
