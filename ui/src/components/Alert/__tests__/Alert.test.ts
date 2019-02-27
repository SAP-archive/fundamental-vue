import { assert } from "chai";
import { mount, shallowMount } from "@vue/test-utils";
import { Alert } from "../";

describe("Alert", () => {
  test("renders correctly", () => {
    const warningAlert = mount(Alert, {
      propsData: {
        type: "warning",
        dismissible: true,
        id: "warningAlert",
        uid: "alert"
      }
    });
    const errorAlert = mount(Alert, {
      propsData: { type: "error", dismissible: false, id: "errorAlert" }
    });
    expect(warningAlert.element).toMatchSnapshot();
    expect(errorAlert.element).toMatchSnapshot();
    expect(warningAlert.classes("fd-alert--warning")).toBe(true);
    expect(errorAlert.classes("fd-alert--dismissible")).toBe(true);
  });
  it("renders default slot when passed", () => {
    const dummySlot = "Slot text";
    const wrapper = shallowMount(Alert, {
      slots: {
        default: dummySlot
      }
    });
    assert.include(wrapper.text(), dummySlot);
  });
  it("click on close hides the alert", () => {
    const alert = mount(Alert, {
      propsData: {
        dismissible: true
      }
    });
    assert(alert.isVisible());
    const closeButton = alert.find("button");
    assert.isDefined(closeButton);
    closeButton.trigger("click");
    assert(alert.isVisible() === false);
  });
});
