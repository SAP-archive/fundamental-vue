import { assert } from "chai";
import { Counter } from "@/components/Counter";
import { mount } from "@vue/test-utils";

describe("Counter", () => {
  it("info type counter rendered if type is info", () => {
    const propsData = {
      type: "info",
      value: 23
    };
    const counter = mount(Counter, { propsData });
    assert(counter.classes("fd-counter"));
  });

  it("info type counter rendered if type is notification", () => {
    const propsData = {
      type: "notification",
      value: 23
    };
    const counter = mount(Counter, { propsData });
    assert(counter.classes("fd-counter--notification"));
  });
});
