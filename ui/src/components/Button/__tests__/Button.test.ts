import { assert } from "chai";
import { shallowMount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button", () => {
  // There was a bug that causes <FdButton compact> to render <FdButton compact="compact">
  it("renders compact correctly", () => {
    const button = shallowMount(Button, { propsData: { compact: true } });
    const classes = button.classes();
    expect(classes).toContain("fd-button");
    expect(classes).toContain("fd-button--compact");
  });

  it("renders default slot when passed", () => {
    const title = "Button Title";
    const button = shallowMount(Button, {
      slots: {
        default: title
      }
    });
    assert.include(button.text(), title);
  });

  it("does not emit a click event when disabled", () => {
    const button = shallowMount(Button, {
      propsData: {
        state: "disabled"
      },
      slots: {
        default: "hi"
      }
    });
    button.trigger("click");
    assert.isEmpty(button.emitted());
    assert.strictEqual(button.attributes("disabled"), "disabled");
  });

  it("does not emit a click event when clicked", () => {
    const button = shallowMount(Button, {
      slots: {
        default: "hi"
      }
    });
    button.trigger("click");
    const clicks = button.emitted("click");
    assert.isArray(clicks);
    assert.lengthOf(clicks, 1);
  });
});
