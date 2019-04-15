import ClickOutside from "./../click-outside";
import { mount, createLocalVue } from "@vue/test-utils";

jest.mock("./../../lib/uuid", () => {
  return {
    shortUuid() {
      return "12345";
    }
  };
});

describe("click-outside mixin", () => {
  it("adds uuid to data of component", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        template: "<div />",
        mixins: [ClickOutside]
      },
      { localVue }
    );
    await localVue.nextTick();
    expect(wrapper.vm.clickOutsideContext).toBeDefined();
    expect(wrapper.vm.clickOutsideContext).toBe("12345");
  });
});
