import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button", () => {
  // There was a bug that causes <FdButton compact> to render <FdButton compact="compact">
  it("renders compact correctly", () => {
    const button = mount(Button, { propsData: { compact: true } });
    const classes = button.classes();
    expect(classes).toContain("fd-button");
    expect(classes).toContain("fd-button--compact");
  });

  it("renders default slot when passed", () => {
    const title = "Button Title";
    const button = mount(Button, {
      slots: {
        default: title
      }
    });
    expect(button.text()).toMatch(title);
  });

  it("does not emit a click event when disabled", () => {
    const button = mount(Button, {
      propsData: {
        state: "disabled"
      },
      slots: {
        default: "hi"
      }
    });
    button.trigger("click");
    expect(button.emitted()).toMatchObject({});
    expect(button.attributes("disabled")).toBe("disabled");
  });

  it("does not emit a click event when clicked", () => {
    const button = mount(Button, {
      slots: {
        default: "hi"
      }
    });
    button.trigger("click");
    const clicks = button.emitted("click");
    expect(clicks).toHaveLength(1);
  });
});
