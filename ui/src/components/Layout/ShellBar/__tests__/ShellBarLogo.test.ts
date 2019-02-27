import FdShellBarLogo from "./../ShellBarLogo.vue";
import { mount, createLocalVue } from "@vue/test-utils";

describe("ShellBarLogo", () => {
  // Test for https://github.com/SAP/fundamental-vue/issues/154
  it("puts alt on logo", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { FdShellBarLogo },
        template: `<FdShellBarLogo src="image.png" alt="helloWorld" />`
      },
      { localVue }
    );
    await localVue.nextTick();
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("alt")).toBe("helloWorld");
  });
});
