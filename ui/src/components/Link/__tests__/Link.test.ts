import FdLink from "./../Link.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import FundamentalVue from "@/index";

describe("Link", () => {
  it("can be disabled", async () => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);
    const wrapper = await mount(FdLink, { propsData: { disabled: true } });
    expect(wrapper.classes("is-disabled")).toBe(true);
    const anchor = wrapper.find("a");
    expect(anchor.exists()).toBe(true);
    // @click events are not emitted
    anchor.trigger("click");
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("can have custom href", async () => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);
    const wrapper = await mount(FdLink, {
      propsData: { href: "https://localhost:10000" }
    });
    expect(wrapper.attributes("href")).toBe("https://localhost:10000");
  });

  it("renders default slot", async () => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);
    const wrapper = await mount(FdLink, {
      slots: {
        default: "foo bar"
      }
    });
    expect(wrapper.find("a").text()).toBe("foo bar");
  });

  it("renders title as both: title-attr and content", async () => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);
    const wrapper = await mount(FdLink, {
      propsData: {
        title: "foo bar"
      }
    });
    const anchor = wrapper.find("a");
    expect(anchor.text()).toBe("foo bar");
    expect(anchor.attributes("title")).toBe("foo bar");
  });
});
