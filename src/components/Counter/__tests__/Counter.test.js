import { mount } from "@vue/test-utils";
import { Counter } from "../";

describe("Counter", () => {
  const infoCounter = mount(Counter, {
    propsData: {
      type: "info",
      value: 44,
      ariaLabel: "Counter"
    }
  });
  const notCounter = mount(Counter, {
    propsData: {
      type: "notification"
    }
  });
  it("renders correctly", () => {
    expect(infoCounter.element).toMatchSnapshot();
    expect(notCounter.element).toMatchSnapshot();
  });
  it("renders type correctly", () => {
    expect(infoCounter.classes("fd-counter")).toBe(true);
    expect(notCounter.classes("fd-counter--notification")).toBe(true);
  });
  it("renders value correctly", () => {
    expect(infoCounter.props().value).toBe(44);
    expect(notCounter.props().value).toBe(0);
  });
});
