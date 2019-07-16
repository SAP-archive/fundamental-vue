import { mount } from "@vue/test-utils";
import TimeItem from "../TimeItem.vue";

describe("TimeItem", () => {
  let hour = "11";
  let minute = "05";
  let second = "58";
  let meridian = "am";
  const timeValue = `${hour}:${minute}:${second} ${meridian}`;

  const wrapper = mount(TimeItem, {
    propsData: {
      value: timeValue,
      showMeridian: true
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("has correct data", () => {
    expect(wrapper.vm.$data.hour).toEqual(hour);
    expect(wrapper.vm.$data.minute).toEqual(minute);
    expect(wrapper.vm.$data.second).toEqual(second);
    expect(wrapper.vm.$data.meridian).toEqual(meridian);
    expect(wrapper.vm.$data.timeValue).toEqual(timeValue);
  });

  it("adds/subtracts hours correctly", () => {
    const navUp = wrapper.find(".fd-time__item:nth-child(1) .sap-icon--navigation-up-arrow");
    const navDown = wrapper.find(".fd-time__item:nth-child(1) .sap-icon--navigation-down-arrow");

    navUp.trigger("click");
    expect(wrapper.vm.$data.hour).toEqual("12");

    navUp.trigger("click");
    expect(wrapper.vm.$data.hour).toEqual("01");

    navDown.trigger("click");
    expect(wrapper.vm.$data.hour).toEqual("12");

    navDown.trigger("click");
    expect(wrapper.vm.$data.hour).toEqual("11");
  });

  it("adds/subtracts minutes correctly", () => {
    const navUp = wrapper.find(".fd-time__item:nth-child(2) .sap-icon--navigation-up-arrow");
    const navDown = wrapper.find(".fd-time__item:nth-child(2) .sap-icon--navigation-down-arrow");

    navUp.trigger("click");
    expect(wrapper.vm.$data.minute).toEqual("06");

    navDown.trigger("click");
    expect(wrapper.vm.$data.minute).toEqual("05");
  });

  it("adds/subtracts seconds correctly", () => {
    const navUp = wrapper.find(".fd-time__item:nth-child(3) .sap-icon--navigation-up-arrow");
    const navDown = wrapper.find(".fd-time__item:nth-child(3) .sap-icon--navigation-down-arrow");

    navUp.trigger("click");
    expect(wrapper.vm.$data.second).toEqual("59");

    navUp.trigger("click");
    expect(wrapper.vm.$data.second).toEqual("00");

    navDown.trigger("click");
    expect(wrapper.vm.$data.second).toEqual("59");
  });

  it("flips meridian correctly", () => {
    const navUp = wrapper.find(".fd-time__item:nth-child(4) .sap-icon--navigation-up-arrow");
    const navDown = wrapper.find(".fd-time__item:nth-child(4) .sap-icon--navigation-down-arrow");

    navUp.trigger("click");
    expect(wrapper.vm.$data.meridian).toEqual("pm");

    navUp.trigger("click");
    expect(wrapper.vm.$data.meridian).toEqual("am");

    navDown.trigger("click");
    expect(wrapper.vm.$data.meridian).toEqual("pm");
  });
});
