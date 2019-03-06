import { mount } from "@vue/test-utils";
import Label from "../Label.vue";

describe("Label", () => {
  it("renders correctly", () => {
    const wrapper = mount(Label, {
      propsData: {
        type: "warning"
      },
      slots: {
        default: "Label"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct types", () => {
    const labelWarning = mount(Label, {
      propsData: {
        type: "warning"
      },
      slots: {
        default: "Label"
      }
    });
    const labelError = mount(Label, {
      propsData: {
        type: "error"
      },
      slots: {
        default: "Label"
      }
    });
    const labelSuccess = mount(Label, {
      propsData: {
        type: "success"
      },
      slots: {
        default: "Label"
      }
    });

    expect(labelWarning.classes("fd-label--warning")).toBe(true);
    expect(labelError.classes("fd-label--error")).toBe(true);
    expect(labelSuccess.classes("fd-label--success")).toBe(true);
  });

  it("renders default slot when passed", () => {
    const label = "Label";
    const wrapper = mount(Label, {
      slots: {
        default: label
      }
    });
    expect(wrapper.text()).toEqual(label);
  });
});
