import { mount, shallowMount } from "@vue/test-utils";
import Modal from "../Modal.vue";
import { CreateElement, VNode } from "vue";

describe("Modal", () => {
  const title = "Modal Title";
  const wrapper = mount(Modal, {
    propsData: {
      title,
      active: false
    },
    slots: {
      actions: {
        render(h: CreateElement): VNode {
          return h("div", {}, "Action 1");
        }
      }
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders modal title correctly", () => {
    expect(wrapper.find(".fd-modal__title").text()).toBe(title);
  });

  it("has modal action", () => {
    expect(wrapper.find(".fd-modal__actions").exists()).toBe(true);
  });

  it("is active when set as active", () => {
    wrapper.setProps({ active: true });
    expect(wrapper.vm.$data.isActive).toBe(true);
    expect(wrapper.isVisible()).toBe(true);
  });

  it("closed correctly", () => {
    const button = wrapper.find(".fd-modal__close");
    button.trigger("click");
    wrapper.setProps({ active: false });

    expect(wrapper.emitted("close")).toHaveLength(1);
    expect(wrapper.find(".fd-overlay--modal").attributes("aria-hidden")).toBe(
      "true"
    );
    expect(wrapper.isVisible()).toBe(false);
  });
});
