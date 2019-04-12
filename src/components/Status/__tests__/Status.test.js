import { mount } from "@vue/test-utils";
import Status from "../Status.vue";

describe("Status test scripts", () => {
  test("Renders correctly", () => {
    const statusIcon = "available";
    const type = "success";
    const status = mount(Status, {
      propsData: {
        statusIcon,
        type
      }
    });
    expect(status.element).toMatchSnapshot();
  });

  test("Default slot rendering test", () => {
    const slotText = "Status Slot Text";
    const status = mount(Status, {
      slots: {
        default: slotText
      }
    });
    expect(status.text()).toBe(slotText);
  });

  test("Status indicator with built in status icon test", () => {
    const statusIcon = "offline";
    const status = mount(Status, {
      propsData: {
        statusIcon
      }
    });
    expect(status.classes(`fd-status-label--${statusIcon}`)).toBe(true);
  });

  test("Status indicator with semantic colors", () => {
    const type = "warning";
    const status = mount(Status, {
      propsData: {
        type
      }
    });
    expect(status.classes(`fd-status-label--${type}`)).toBe(true);
  });
});
