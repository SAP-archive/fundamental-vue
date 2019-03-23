import { mount, createLocalVue } from "@vue/test-utils";
import FundamentalVue from "@/main";

describe("TimeInput", () => {
  const localVue = createLocalVue();
  localVue.use(FundamentalVue);

  const wrapper = mount(localVue.component("FdTimeInput"), {
    propsData: {
      placeholder: "Enter value",
      ariaLabel: "Time",
      value: "12"
    },
    localVue
  });

  const input = wrapper.find("input");
  const inputEl = input.element as HTMLInputElement;

  it("has input element", () => {
    expect(inputEl).toBeDefined();
    expect(inputEl.tagName.toUpperCase()).toBe("INPUT");
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct input value & attributes", async () => {
    inputEl.value = "12";
    input.trigger("input");
    await wrapper.vm.$nextTick();
    const inputEvents = wrapper.emitted("input");
    expect(inputEvents).toBeDefined();
    const inputEventsCount = inputEvents.length;
    expect(inputEventsCount).toBeGreaterThan(0);
    expect(wrapper.emitted("input")[inputEventsCount - 1][0]).toEqual("12");
    expect(inputEl.value).toEqual("12");

    await wrapper.vm.$nextTick();
    expect(wrapper.props("value")).toBe("12");

    expect(input.attributes("placeholder")).toBe("Enter value");
    expect(input.attributes("aria-label")).toBe("Time");
  });

  it("change and verify value", async () => {
    inputEl.value = "09";
    input.trigger("input");
    await wrapper.vm.$nextTick();
    const inputEvents = wrapper.emitted("input");
    expect(inputEvents).toBeDefined();
    const inputEventsCount = inputEvents.length;
    expect(inputEventsCount).toBeGreaterThan(0);
    expect(wrapper.emitted("input")[inputEventsCount - 1][0]).toEqual("09");
    expect(inputEl.value).toEqual("09");
  });
});
