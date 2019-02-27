import FdShellBarProductSwitcherItemImg from "./../ShellBarProductSwitcherItemImg.vue";
import { mount, createLocalVue } from "@vue/test-utils";

describe("ShellBarProductSwitcherItemImg", () => {
  // Test for https://github.com/SAP/fundamental-vue/issues/139
  it("puts alt on logo", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { FdShellBarProductSwitcherItemImg },
        template: `<FdShellBarProductSwitcherItemImg src="image.png" alt="helloWorld" />`
      },
      { localVue }
    );
    await localVue.nextTick();
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("alt")).toBe("helloWorld");
  });
});
