import { shallowMount } from "@vue/test-utils";
import Status from "../Status.vue";
import { assert } from "chai";

describe("Status test scripts", () => {
  test("Renders correctly", () => {
    const statusIcon = "available";
    const type = "success";
    const status = shallowMount(Status, {
      propsData: {
        statusIcon,
        type
      }
    });
    expect(status.element).toMatchSnapshot();
  });

  test("Default slot rendering test", () => {
    const slotText = "Status Slot Text";
    const status = shallowMount(Status, {
      slots: {
        default: slotText
      }
    });
    expect(status.text()).toBe(slotText);
  });

  test("Status indicator with built in status icon test", () => {
    const statusIcon = "offline";
    const status = shallowMount(Status, {
      propsData: {
        statusIcon
      }
    });
    assert(status.classes(`fd-status-label--${statusIcon}`));
  });

  test("Status indicator with semantic colors", () => {
    const type = "warning";
    const status = shallowMount(Status, {
      propsData: {
        type
      }
    });
    assert(status.classes(`fd-status-label--${type}`));
  });
});
