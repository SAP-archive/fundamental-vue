import { VNode, CreateElement } from "vue";
import { shallowMount } from "@vue/test-utils";
import InputGroup from "../InputGroup.vue";
import Input from "../Input.vue";

describe("InputGroup", () => {
  const before = "$";
  const after = "€";

  const wrapper = shallowMount(InputGroup, {
    propsData: {
      before,
      after
    },
    slots: {
      default: {
        render(h: CreateElement): VNode {
          return h(Input);
        }
      }
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders before after correctly", () => {
    expect(wrapper.contains(".fd-input-group__addon--before")).toBe(true);
    expect(wrapper.find(".fd-input-group__addon--before").text()).toEqual(
      before
    );
    expect(wrapper.contains(".fd-input-group__addon--after")).toBe(true);
    expect(wrapper.find(".fd-input-group__addon--after").text()).toEqual(after);
  });

  describe("Compact Style", () => {
    const wrapper = shallowMount(InputGroup, {
      propsData: {
        compact: true
      },
      slots: {
        default: {
          render(h: CreateElement): VNode {
            return h(Input);
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
