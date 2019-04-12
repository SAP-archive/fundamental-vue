import { mount, createLocalVue } from "@vue/test-utils";
import FdRadio from "./../Radio.vue";

describe("Radiobutton", () => {
  it("can be disabled", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `<FdRadio disabled value="i_like_cookies" v-model="checked" />`,
      data: () => ({ checked: "" }),
      components: { FdRadio }
    });
    const wrapper = mount(TestComponent, {
      localVue,
      components: { FdRadio }
    });
    expect(wrapper.vm.checked).toBe("");
    const radio = wrapper.find(FdRadio);
    expect(radio.isVisible()).toBe(true);
    radio.trigger("click");
    await localVue.nextTick();
    expect(wrapper.vm.checked).toBe("");
    expect(radio.attributes("disabled")).toBe("disabled");
  });
});
