import { mount, createLocalVue } from "@vue/test-utils";
import FdTextArea from "./../TextArea.vue";
import FundamentalVue from "./../../../../index";

describe("TextArea", () => {
  it("can be mounted", async () => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);
    const wrapper = mount(FdTextArea, { localVue });
    await localVue.nextTick();
    expect(wrapper.find("textarea").exists()).toBe(true);
  });
});
