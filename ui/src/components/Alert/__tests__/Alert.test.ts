import { assert } from "chai";
import { mount, shallowMount } from "@vue/test-utils";
import { Alert } from "../";

describe("Alert", () => {
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
