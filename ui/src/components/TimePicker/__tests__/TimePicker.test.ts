import { mount } from "@vue/test-utils";
import TimePicker from "../TimePicker.vue";

describe("TimePicker", () => {
  const placeholder = "Pick a time";
  const value = "11:01:58 am";
  const ariaLabel = "Clock In Time";

  const wrapper = mount(TimePicker, {
    propsData: {
      uid: "time-picker",
      placeholder,
      value,
      ariaLabel
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("shows up the picker", () => {
    const popoverBody = wrapper.find(".fd-popover__body");

    expect(popoverBody.attributes("aria-hidden")).toBe("true");

    const inputGroup = wrapper.find(".fd-input-group");
    inputGroup.trigger("click");

    expect(popoverBody.attributes("aria-hidden")).toBeUndefined();
  });

  describe("Compact Style", () => {
    const wrapper = mount(TimePicker, {
      propsData: {
        uid: "time-picker",
        compact: true,
        showMeridian: false
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has compact style", () => {
      expect(wrapper.contains(".fd-input--compact")).toBe(true);
    });

    it("does not have meridian", () => {
      expect(wrapper.findAll(".fd-time__input").length).toEqual(3);
    });
  });

  describe("With Meridian", () => {
    const wrapper = mount(TimePicker, {
      propsData: {
        uid: "time-picker",
        showMeridian: true,
        compact: false
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has meridian", () => {
      expect(wrapper.findAll(".fd-time__input").length).toEqual(4);
    });

    it("does not have compact style", () => {
      expect(wrapper.contains(".fd-input--compact")).toBe(false);
    });
  });
});
