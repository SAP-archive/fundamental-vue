import { mount } from "@vue/test-utils";
import FdTimeInput from "./../Time/TimeInput.vue";

describe("TimeInput", () => {
  const timeInput = mount(FdTimeInput, {
    propsData: {
      placeholder: "Enter value",
      value: "12"
    },
    attrs: { "aria-label": "Time" }
  });

  const input = timeInput.find("input");
  const inputEl = input.element;

  it("has input element", () => {
    expect(inputEl).toBeDefined();
    expect(inputEl.tagName.toUpperCase()).toBe("INPUT");
  });

  it("renders correctly", () => {
    expect(timeInput.element).toMatchSnapshot();
  });

  it("renders correct input value & attributes", async () => {
    inputEl.value = "12";
    input.trigger("input");
    await timeInput.vm.$nextTick();
    const events = timeInput.emitted("update");
    expect(events).toBeDefined();
    const eventsCount = events.length;
    expect(eventsCount).toBeGreaterThan(0);
    expect(timeInput.emitted("update")[eventsCount - 1][0]).toEqual("12");
    expect(inputEl.value).toEqual("12");

    await timeInput.vm.$nextTick();
    expect(timeInput.props("value")).toBe("12");

    expect(input.attributes("placeholder")).toBe("Enter value");
    expect(input.attributes("aria-label")).toBe("Time");
  });

  it("change and verify value", async () => {
    inputEl.value = "09";
    input.trigger("input");
    await timeInput.vm.$nextTick();
    const events = timeInput.emitted("update");
    expect(events).toBeDefined();
    expect(events.length).toBeGreaterThan(0);
    expect(events[events.length - 1][0]).toEqual("09");
    expect(inputEl.value).toEqual("09");
  });
});
