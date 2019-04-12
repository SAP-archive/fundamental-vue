import { Counter } from "@/components/Counter";
import { mount } from "@vue/test-utils";

describe("Counter", () => {
  it("info type counter rendered if type is info", () => {
    const propsData = {
      type: "info",
      value: 23
    };
    const counter = mount(Counter, { propsData });
    expect(counter.classes("fd-counter")).toBe(true);
  });

  it("info type counter rendered if type is notification", () => {
    const propsData = {
      type: "notification",
      value: 23
    };
    const counter = mount(Counter, { propsData });
    expect(counter.classes("fd-counter--notification")).toBe(true);
  });
});
