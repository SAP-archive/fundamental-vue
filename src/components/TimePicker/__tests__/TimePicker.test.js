import { mount } from "@vue/test-utils";
import TimePicker from "../TimePicker.vue";

jest.mock("./../../../lib/uuid", () => {
  return {
    shortUuid() {
      return "time-picker";
    }
  };
});

describe("TimePicker", () => {
  const placeholder = "Pick a time";
  const value = "11:01:58 am";
  const ariaLabel = "Clock In Time";

  it("renders correctly", async () => {
    const wrapper = mount(TimePicker, {
      propsData: {
        uid: "time-picker",
        placeholder,
        value,
        ariaLabel
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("shows up the picker", async () => {
    const wrapper = mount(TimePicker, {
      propsData: {
        uid: "time-picker",
        placeholder,
        value,
        ariaLabel
      }
    });
    await wrapper.vm.$nextTick();
    const popoverBody = wrapper.find(".fd-popover__popper");
    expect(popoverBody.attributes("aria-hidden")).toBe("true");

    const inputGroup = wrapper.find(".fd-input-group");
    inputGroup.trigger("click");

    expect(popoverBody.attributes("aria-hidden")).toBe("true");
  });

  describe("Compact Style", async () => {
    it("renders correctly", async () => {
      const wrapper = mount(TimePicker, {
        propsData: {
          uid: "time-picker",
          compact: true,
          showMeridian: false
        }
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has compact style", async () => {
      const wrapper = mount(TimePicker, {
        propsData: {
          uid: "time-picker",
          compact: true,
          showMeridian: false
        }
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.contains(".fd-input--compact")).toBe(true);
    });

    it("does not have meridian", async () => {
      const wrapper = mount(TimePicker, {
        propsData: {
          uid: "time-picker",
          compact: true,
          showMeridian: false
        }
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.findAll(".fd-time__input")).toHaveLength(3);
    });
  });

  describe("With Meridian", () => {
    it("renders correctly", async () => {
      const wrapper = mount(TimePicker, {
        propsData: {
          uid: "time-picker",
          showMeridian: true,
          compact: false
        }
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has meridian", async () => {
      const wrapper = mount(TimePicker, {
        propsData: {
          uid: "time-picker",
          showMeridian: true,
          compact: false
        }
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.findAll(".fd-time__input")).toHaveLength(4);
    });

    it("does not have compact style", async () => {
      const wrapper = mount(TimePicker, {
        propsData: {
          uid: "time-picker",
          showMeridian: true,
          compact: false
        }
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.contains(".fd-input--compact")).toBe(false);
    });
  });
});
