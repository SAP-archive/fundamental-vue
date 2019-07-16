import { mount } from "@vue/test-utils";
import TimeAction from "../Time/TimeAction.vue";

describe("TimeAction", () => {
  const actionTitle = "Action Title";
  const actionIcon = "navigation-up-arrow";
  const actionType = "standard";
  const ariaLabel = "Increase Hour";
  const ariaControls = "Time Hour";

  const wrapper = mount(TimeAction, {
    propsData: {
      title: actionTitle,
      icon: actionIcon,
      type: actionType,
      disabled: false,
      ariaLabel: ariaLabel,
      ariaControls: ariaControls
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct button props", () => {
    expect(wrapper.find("button").text()).toBe(actionTitle);
    expect(wrapper.find("button").classes(`sap-icon--${actionIcon}`)).toBe(true);
    expect(wrapper.find("button").classes(`fd-button--${actionType}`)).toBe(true);
    expect(wrapper.find("button").attributes("aria-label")).toBe(ariaLabel);
    expect(wrapper.find("button").attributes("aria-controls")).toBe(ariaControls);
  });

  it("emitted click event", () => {
    wrapper.find("button").trigger("click");
    const clickEvents = wrapper.emitted("click");
    expect(clickEvents.length).toBeGreaterThan(0);
  });
});
