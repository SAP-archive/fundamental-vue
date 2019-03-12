import { mount } from "@vue/test-utils";
import TimeInput from "../Time/TimeInput.vue";

describe("TimeInput", () => {
  let value = "12";
  const placeholder = "Enter value";
  const ariaLabel = "Time";
  const onInput = jest.fn();

  const wrapper = mount(TimeInput, {
    propsData: {
      id: "input",
      placeholder,
      value,
      disabled: false,
      ariaLabel: ariaLabel
    },
    listeners: {
      input: onInput
    }
  });

  const input = wrapper.find("input");
  expect(input).toBeDefined();

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct input value & attributes", () => {
    verifyInputValue(value);
    expect(input.attributes("placeholder")).toBe(placeholder);
    expect(input.attributes("aria-label")).toBe(ariaLabel);
  });

  it("change and verify value", () => {
    (input.element as HTMLInputElement).value = value;
    verifyInputValue("09");
  });

  const verifyInputValue = async (value: string) => {
    input.trigger("input");

    const inputLength = wrapper.emitted("input").length;
    expect(inputLength).toBeGreaterThan(0);
    expect(wrapper.emitted("input")[inputLength - 1][0]).toEqual(value);
    expect((input.element as HTMLInputElement).value).toEqual(value);

    await wrapper.vm.$nextTick();
    expect(wrapper.props()).toBe(value);
  };
});
