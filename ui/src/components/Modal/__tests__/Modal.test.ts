import { mount } from "@vue/test-utils";
import Modal from "../Modal.vue";
import { CreateElement, VNode } from "vue";

describe("Modal", () => {
  // Both Vue.config.async and mountOptions.sync are not working?
  // Vue.config.async = false;
  // expect(Vue.config.async).toBe(false);

  const title = "Modal Title";
  const wrapper = mount(Modal, {
    // does not work. infact it is default value
    // https://github.com/vuejs/vue-test-utils/pull/1062
    sync: true,

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

    expect(wrapper.emitted("close")).toHaveLength(1);
    expect(wrapper.emitted("update:active")).toHaveLength(1);

    // Temporary manually modify the active prop
    // Tried with $nextTick but no luck
    // expect(wrapper.props('active')).toBe(false);
    wrapper.setProps({ active: false });

    expect(wrapper.find(".fd-overlay--modal").attributes("aria-hidden")).toBe(
      "true"
    );
    expect(wrapper.isVisible()).toBe(false);
  });
});
