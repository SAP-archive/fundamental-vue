import { assert } from "chai";
import { shallowMount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button", () => {
  it("renders default slot when passed", () => {
    const title = "Button Title";
    const wrapper = shallowMount(Button, {
      slots: {
        default: title
      }
    });
    assert.include(wrapper.text(), title);
  });

  it("does not emit a click event when disabled", () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        state: "disabled"
      },
      slots: {
        default: "hi"
      }
    });
    wrapper.trigger("click");
    assert.isEmpty(wrapper.emitted());
  });

  it("does not emit a click event when clicked", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "hi"
      }
    });
    wrapper.trigger("click");
    const clicks = wrapper.emitted("click");
    assert.isArray(clicks);
    assert.lengthOf(clicks, 1);
  });
});
