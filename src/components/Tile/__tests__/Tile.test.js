import { mount, createLocalVue } from "@vue/test-utils";
import FundamentalVue from "./../../../index";

describe("Tile", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);
    wrapper = mount(
      {
        data() {
          return {
            disabled: false,
            isButton: false
          };
        },
        template: `
      <fd-tile :is-button="isButton" :disabled="disabled">
        <fd-tile-content>
          <fd-tile-title>Title</fd-tile-title>
          <p>Description</p>
        </fd-tile-content>
      </fd-tile>`
      },
      { localVue }
    );
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot("default tile");
  });

  it("renders correctly when disabled", () => {
    expect(wrapper.element).toMatchSnapshot("renders disabled correctly");
  });

  it("renders correctly as button", () => {
    wrapper.vm.isButton = true;
    expect(wrapper.element).toMatchSnapshot("button tile");
  });
});
