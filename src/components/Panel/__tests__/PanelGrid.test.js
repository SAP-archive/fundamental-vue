import { mount } from "@vue/test-utils";
import PanelGrid from "../PanelGrid.vue";

describe("PanelGrid", () => {
  const col = 4;
  const nogap = true;
  const defaultSlot = "Default slot";

  const nogapPanelGrid = mount(PanelGrid, {
    propsData: {
      col,
      nogap
    },
    slots: {
      default: defaultSlot
    }
  });
  const panelGrid = mount(PanelGrid, {
    propsData: {
      col: 2
    }
  });
  it("renders correctly", () => {
    expect(nogapPanelGrid.element).toMatchSnapshot();
  });
  it("renders default slot", () => {
    expect(nogapPanelGrid.find(".fd-panel-grid").text()).toBe(defaultSlot);
  });
  it("renders correctly nogap:false ", () => {
    expect(panelGrid.element).toMatchSnapshot();
  });
});
