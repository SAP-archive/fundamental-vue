import { mount, createLocalVue } from "@vue/test-utils";
import backgroundColor from "./../background-color";

describe("background-color directive", () => {
  it("attaches correct color class when used with arg", () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        directives: { backgroundColor },
        template: `<div v-background-color:red />`
      },
      { localVue }
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it("attaches correct color class when used with value", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        data() {
          return { color: "red" };
        },
        directives: { backgroundColor },
        template: `<div v-background-color="color" />`
      },
      { localVue }
    );
    expect(wrapper.element).toMatchSnapshot();
    wrapper.setData({ color: "green" });
    await localVue.nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });
});
