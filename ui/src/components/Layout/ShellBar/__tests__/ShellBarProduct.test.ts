import FdShellBarProduct from "./../ShellBarProduct.vue";
import { mount } from "@vue/test-utils";

describe("ShellBarProduct", () => {
  it("renders title prop", () => {
    const wrapper = mount({
      components: { FdShellBarProduct },
      template: `<FdShellBarProduct productTitle="hello" />`
    });
    expect(wrapper.text()).toBe("hello");
  });

  it("renders default slot is no product title is given", () => {
    const wrapper = mount({
      components: { FdShellBarProduct },
      template: `<FdShellBarProduct>default$slot</FdShellBarProduct>`
    });
    expect(wrapper.text()).toBe("default$slot");
  });
});
