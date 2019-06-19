import { mount } from "@vue/test-utils";

import FdCalendar from "./../Calendar.vue";
import FdCalendarHeader from "./../CalendarHeader.vue";

describe("fd-calendar", () => {
  it("handles 31rd of May 2019 correctly", () => {
    const wrapper = mount(FdCalendar, {
      propsData: {
        today: new Date("2019-05-31"),
        mode: "single",
        defaultValue: new Date("2019-05-31")
      }
    });
    const header = wrapper.find(FdCalendarHeader);
    expect(header.exists()).toBe(true);
    expect(header.props("year")).toEqual(2019);
    expect(header.props("month")).toEqual("May");
    wrapper.vm.next();
    expect(header.props("year")).toEqual(2019);
    expect(header.props("month")).toEqual("Jun.");
  });
});
