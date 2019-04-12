import { mount } from "@vue/test-utils";
import CalendarItem from "../CalendarItem.vue";

describe("CalendarItem", () => {
  it("emits click", () => {
    const wrapper = mount(CalendarItem, {
      listeners: {
        click() {
          /* empty */
        }
      }
    });
    wrapper.trigger("click");
    const clicks = wrapper.emitted("click");
    expect(clicks).toHaveLength(1);
  });

  it("emits no click when disabled", () => {
    const wrapper = mount(CalendarItem, {
      propsData: { state: "disabled" },
      listeners: {
        click() {
          /* empty */
        }
      }
    });
    wrapper.trigger("click");
    const clicks = wrapper.emitted("click");
    expect(clicks === undefined || clicks.length === 0).toBe(true);
  });
});
