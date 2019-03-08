import { shallowMount } from "@vue/test-utils";
import InlineHelp from "../InlineHelp.vue";

describe("InlineHelp test scripts", () => {
  test("Renders correctly", () => {
    const inlineHelp = shallowMount(InlineHelp, {});
    expect(inlineHelp.element).toMatchSnapshot();
  });

  test("Default slot test", () => {
    const helpText = "Slot Text";
    const inlineHelp = shallowMount(InlineHelp, {
      slots: {
        default: helpText
      }
    });
    expect(inlineHelp.element).toMatchSnapshot();
    expect(inlineHelp.text()).toBe(helpText);
  });
});
