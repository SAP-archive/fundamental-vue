import { mount } from "@vue/test-utils";
import BreadcrumbItem from "../BreadcrumbItem.vue";

describe("BreadcrumbItem", () => {
  it("renders correctly", () => {
    const wrapper = mount(BreadcrumbItem, {
      attrs: {
        href: "#item1"
      },
      slots: {
        default: "Item 1"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders default slot when passed", () => {
    const text = "Text";
    const wrapper = mount(BreadcrumbItem, {
      slots: {
        default: text
      }
    });
    expect(wrapper.text()).toEqual(text);
  });
});
