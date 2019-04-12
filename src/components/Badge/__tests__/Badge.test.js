import { mount } from "@vue/test-utils";
import { Badge } from "../";

describe("Badge", () => {
  test("renders correctly", () => {
    const successBadge = mount(Badge, {
      propsData: {
        type: "success",
        id: "successBadge",
        filled: true,
        pill: true
      }
    });
    const errorBadge = mount(Badge, { propsData: { type: "error" } });
    expect(successBadge.element).toMatchSnapshot();
    expect(errorBadge.element).toMatchSnapshot();

    expect(successBadge.classes("fd-badge--filled")).toBe(true);
    expect(successBadge.classes("fd-badge--pill")).toBe(true);
    expect(successBadge.classes("fd-badge--success")).toBe(true);
    expect(errorBadge.classes("fd-badge--error")).toBe(true);
  });
  it("renders default slot when passed", () => {
    const dummySlot = "Slot text";
    const wrapper = mount(Badge, {
      slots: {
        default: dummySlot
      }
    });
    expect(wrapper.text()).toMatch(dummySlot);
  });
});
