import { mount, createLocalVue } from "@vue/test-utils";
import FundamentalVue from "@/index";
import FdPopper from "./../Popper.vue";

describe("Popper Component", () => {
  it("clicking control slot content emits visible event", async () => {
    let localVue = createLocalVue();
    localVue.use(FundamentalVue);
    const wrapper = mount(
      {
        template: `
          <FdPopper>
            <template #reference="{toggle}">
              <button @click="toggle">toggle</button>
            </template>
            <template #default>
              <div>hi</div>
            </template>
          </FdPopper>
        `
      },
      { localVue }
    );
    await wrapper.vm.$nextTick();
    wrapper.find("button").trigger("click");
    wrapper.find("button").trigger("click");
    // After click, wrapper.emitted().visible = [ [false], [true] ]
    const popover = wrapper.find(FdPopper);
    const events = popover.emitted("update:visible");
    expect(events).toHaveLength(2);
    expect(events).toEqual([[true], [false]]);
  });
});
