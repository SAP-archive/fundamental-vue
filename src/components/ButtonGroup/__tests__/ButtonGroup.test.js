import { mount, createLocalVue } from "@vue/test-utils";
import FdButtonGroupButton from "./../ButtonGroupButton.vue";
import FundamentalVue from "@/index";

describe("ButtonGroup", () => {
  let localVue = createLocalVue();
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(FundamentalVue);
  });

  it("supports v-model", async () => {
    const Wrapper = localVue.extend({
      data: () => ({ value: [] }),
      template: `
    <fd-button-group v-model="value">
      <fd-button-group-button value="b0">b0</fd-button-group-button>
      <fd-button-group-button value="b1">b1</fd-button-group-button>
      <fd-button-group-button value="b2">b2</fd-button-group-button>
    </fd-button-group>
    `
    });
    const wrapper = mount(Wrapper, { localVue });
    await localVue.nextTick();
    const buttons = wrapper.findAll(FdButtonGroupButton);
    for (const buttonWrapper of buttons.wrappers) {
      const button = buttonWrapper.find("button");
      button.trigger("click");
      await localVue.nextTick();
      const buttonValue = buttonWrapper.vm.value;
      const value = wrapper.vm.value;
      const index = value.indexOf(buttonValue);
      expect(index).toBeGreaterThan(-1);
    }
  });

  it("renders compact buttons if group is compact", () => {
    const buttonGroup = mount(
      {
        template: `
      <fd-button-group compact>
        <fd-button-group-button>b1</fd-button-group-button>
        <fd-button-group-button>b2</fd-button-group-button>
        <fd-button-group-button>b3</fd-button-group-button>
      </fd-button-group>
      `
      },
      { localVue }
    );
    const buttons = buttonGroup.findAll(FdButtonGroupButton);
    expect(buttons).toHaveLength(3);
    // We have no public api in order to determine whether a button is compact or not.
    // Because of that we have to check if the compact class is present.
    // const buttonIsCompact = (button: Wrapper<any>) => button.classes("fd-button--compact");
    const buttonWrappers = buttons.wrappers;
    for (const buttonWrapper of buttonWrappers) {
      const classes = buttonWrapper.classes();
      expect(classes).toContain("fd-button--compact");
    }
  });

  // Yes this was actually a problem.
  it("renders buttons without compact class if group is not compact", () => {
    const buttonGroup = mount(
      {
        template: `
      <fd-button-group>
        <fd-button-group-button>b1</fd-button-group-button>
        <fd-button-group-button>b2</fd-button-group-button>
        <fd-button-group-button>b3</fd-button-group-button>
      </fd-button-group>
      `
      },
      { localVue }
    );
    const buttons = buttonGroup.findAll(FdButtonGroupButton);
    expect(buttons).toHaveLength(3);
    // We have no public api in order to determine whether a button is compact or not.
    // Because of that we have to check if the compact class is present.
    // const buttonIsCompact = (button: Wrapper<any>) => button.classes("fd-button--compact");
    const buttonWrappers = buttons.wrappers;
    for (const buttonWrapper of buttonWrappers) {
      const classes = buttonWrapper.classes();
      expect(classes).not.toContain("fd-button--compact");
    }
  });
});
