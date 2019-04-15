import { mount, createLocalVue } from "@vue/test-utils";
import { ClickOutside } from "./../../../mixins";
import FundamentalVue from "@/";

describe("on-click-outside", () => {
  describe("within the context of a basic example", () => {
    let localVue;
    let onOutside;
    let insideButton;
    let outsideButton;
    let artificialInsideButton;
    let wrapper;

    beforeEach(async () => {
      localVue = createLocalVue();
      localVue.use(FundamentalVue);
      onOutside = jest.fn();

      wrapper = mount(
        {
          mixins: [ClickOutside],
          template: `
          <div>
            <div v-on-click-outside="onOutside"><button ref="inside">inside</button></div>
            <div><button ref="outside">outside</button></div>
            <div v-is-inside><button ref="artificial-inside">inside too</button></div>
          </div>
        `,
          data: () => ({ active: true }),
          methods: { onOutside }
        },
        { localVue }
      );
      await localVue.nextTick();
      insideButton = wrapper.find({ ref: "inside" });
      outsideButton = wrapper.find({ ref: "outside" });
      artificialInsideButton = wrapper.find({ ref: "artificial-inside" });
    });

    it("click on inside button does not call onOutside", async () => {
      insideButton.trigger("click");
      await localVue.nextTick();
      expect(onOutside).not.toBeCalled();
    });

    it("click on outside button does call onOutside", async () => {
      outsideButton.trigger("click");
      await localVue.nextTick();
      expect(onOutside).not.toHaveBeenCalledTimes(1);
    });

    it("click on outside button does not call onOutside when inactive", async () => {
      wrapper.vm.active = false;
      outsideButton.trigger("click");
      await localVue.nextTick();
      expect(onOutside).not.toBeCalled();
    });

    it("click on outside button does not call onOutside when inactive but was previously active", async () => {
      wrapper.vm.active = true;
      await localVue.nextTick();
      wrapper.vm.active = false;
      await localVue.nextTick();
      outsideButton.trigger("click");
      await localVue.nextTick();
      expect(onOutside).not.toBeCalled();
    });

    it("click on v-is-inside does not call onOutside", async () => {
      artificialInsideButton.trigger("click");
      await localVue.nextTick();
      expect(onOutside).not.toBeCalled();
    });
  });

  describe("within the context of a real-world example", () => {
    let localVue;
    let onOutside;
    let insideButton;
    let outsideButton;
    let toggleButton;
    let artificialInsideButton;
    let wrapper;

    beforeEach(async () => {
      localVue = createLocalVue();
      localVue.use(FundamentalVue);

      wrapper = mount(
        {
          mixins: [ClickOutside],
          template: `
          <div>
            <div id="popover-body" v-if="active">
              <div v-on-click-outside="outside" v-detects-outside-interaction="active">
                <button ref="inside">inside</button>
              </div>
            </div>
            <div>
              <button ref="outside">outside</button>
            </div>
            <div v-is-inside>
              <button ref="artificial-inside">inside too</button>
            </div>
            <div>
              <button @click="active = true" ref="toggle">toggle body</button>
            </div>
          </div>
        `,
          data: () => ({ active: false }),
          methods: {
            outside() {
              this.active = false;
            }
          }
        },
        { localVue }
      );
      await localVue.nextTick();
      insideButton = wrapper.find({ ref: "inside" });
      toggleButton = wrapper.find({ ref: "toggle" });
      outsideButton = wrapper.find({ ref: "outside" });
      artificialInsideButton = wrapper.find({ ref: "artificial-inside" });
    });

    it("click on toggle button cause body to show", async () => {
      const body = wrapper.find("#popover-body");
      expect(body.exists()).toBe(false);
      toggleButton.trigger("click");
      await localVue.nextTick();
      expect(wrapper.find("#popover-body").exists()).toBe(true);
    });
  });
});
