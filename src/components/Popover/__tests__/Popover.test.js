import { mount, createLocalVue } from "@vue/test-utils";
import FundamentalVue from "@/index";

describe("Popover", () => {
  let localVue = createLocalVue();

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(FundamentalVue);
  });

  it("can be shown twice", async () => {
    const wrapper = mount(
      {
        template: `
        <FdPopover>
          <template #control="{toggle}">
            <button @click="toggle">toggle</button>
          </template>
          <div ref="testBody">body</div>
        </FdPopover>
        `
      },
      {
        localVue,
        attachToDocument: true
      }
    );
    await localVue.nextTick();
    const body = wrapper.find({ ref: "testBody" });
    expect(body).toBeDefined();
    expect(body.isVisible()).toBe(false);
    const button = wrapper.find("button");
    button.trigger("click");
    await localVue.nextTick();
    expect(body.isVisible()).toBe(true);
    button.trigger("click");
    await localVue.nextTick();
    expect(body.isVisible()).toBe(false);
    button.trigger("click");
    await localVue.nextTick();
    expect(body.isVisible()).toBe(true);
    wrapper.destroy();
  });

  it("renders custom content in body slot", async () => {
    const wrapper = mount(
      {
        template: `
        <FdPopover>
          <template #default>
            <div ref="body">Hi</div>
          </template>
        </FdPopover>
        `
      },
      {
        localVue,
        attachToDocument: true
      }
    );
    await localVue.nextTick();
    expect(wrapper.find({ ref: "body" }).text()).toMatch("Hi");
    wrapper.destroy();
  });
});
