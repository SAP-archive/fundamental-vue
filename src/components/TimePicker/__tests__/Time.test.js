import { mount } from "@vue/test-utils";
import Time from "../Time/Time.vue";

describe("Time", () => {
  let value = "23";
  const placeholder = "Hour";
  const ariaLabel = "24-Hour";

  const wrapper = mount(Time, {
    propsData: {
      type: "hour24",
      placeholder,
      ariaLabel,
      value
    }
  });

  const input = wrapper.find("input");
  expect(input).toBeDefined();

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct placeholder and aria-label", () => {
    expect(input.attributes("placeholder")).toBe(placeholder);
    expect(wrapper.find(".fd-time__item").attributes("aria-label")).toBe(ariaLabel);
  });

  it("emits events and has correct inputValue and input element value", () => {
    const navDown = wrapper.find(".sap-icon--navigation-down-arrow");
    navDown.trigger("click");

    const expected = "22";

    expect(wrapper.emitted("input").length).toBeGreaterThan(0);

    const timeUpdate = wrapper.emitted("timeUpdate");
    expect(timeUpdate.length).toBeGreaterThan(0);
    expect(timeUpdate[timeUpdate.length - 1][0]).toEqual(expected);

    expect(wrapper.vm.$data.inputValue).toEqual(expected);
    expect(input.element.value).toEqual(expected);
  });

  describe("Hour24", () => {
    const wrapper = mount(Time, {
      propsData: {
        type: "hour24",
        value: "23"
      }
    });

    it("navigates to correct value", () => {
      const navUp = wrapper.find(".sap-icon--navigation-up-arrow");
      const navDown = wrapper.find(".sap-icon--navigation-down-arrow");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("00");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("01");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("00");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("23");
    });
  });

  describe("Hour12", () => {
    const wrapper = mount(Time, {
      propsData: {
        type: "hour12",
        value: "11"
      }
    });

    it("navigates to correct value", () => {
      const navUp = wrapper.find(".sap-icon--navigation-up-arrow");
      const navDown = wrapper.find(".sap-icon--navigation-down-arrow");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("12");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("01");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("12");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("11");
    });
  });

  describe("Minute", () => {
    const wrapper = mount(Time, {
      propsData: {
        type: "minute",
        value: "01"
      }
    });

    it("navigates to correct value", () => {
      const navUp = wrapper.find(".sap-icon--navigation-up-arrow");
      const navDown = wrapper.find(".sap-icon--navigation-down-arrow");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("00");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("59");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("00");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("01");
    });
  });

  describe("Second", () => {
    const wrapper = mount(Time, {
      propsData: {
        type: "second",
        value: "58"
      }
    });

    it("navigates to correct value", () => {
      const navUp = wrapper.find(".sap-icon--navigation-up-arrow");
      const navDown = wrapper.find(".sap-icon--navigation-down-arrow");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("59");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("00");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("59");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("58");
    });
  });

  describe("Meridian", () => {
    const wrapper = mount(Time, {
      propsData: {
        type: "meridian",
        value: "am"
      }
    });

    it("navigates to correct value", () => {
      const navUp = wrapper.find(".sap-icon--navigation-up-arrow");
      const navDown = wrapper.find(".sap-icon--navigation-down-arrow");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("pm");

      navUp.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("am");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("pm");

      navDown.trigger("click");
      expect(wrapper.vm.$data.inputValue).toEqual("am");
    });
  });
});
