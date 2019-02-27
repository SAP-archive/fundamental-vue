import { mount } from "@vue/test-utils";
import ActionBar from "../ActionBar.vue";

describe("ActionBar", () => {
  it("renders correctly", () => {
    const wrapper = mount(ActionBar, {
      propsData: {
        title: "Page Title",
        description: "Action bar descrtiption"
      },
      slots: {
        back: "Back",
        default: "Actions"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders without description", () => {
    const wrapper = mount(ActionBar, {
      propsData: {
        title: "Page Title"
      },
      slots: {
        back: "Back",
        default: "Actions"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find(".fd-action-bar__description").exists()).toBe(false);
  });
});
