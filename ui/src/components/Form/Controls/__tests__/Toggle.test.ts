import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import Toggle from "../Toggle.vue";
import FundamentalVue from "@/index";

describe("Toggle", () => {
  it("update event is emitted once", async () => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);
    const Wrapper = localVue.extend({
      data: () => ({
        active: false
      }),
      template: `
        <FdFormGroup>
          <FdFormItem label="toggle">
            <FdToggle v-model="active" />
          </FdFormItem>
        </FdFormGroup>
      `
    });
    const wrapper = mount(Wrapper, { localVue });
    await localVue.nextTick();
    assert.isFalse(wrapper.vm.active);
    const toggle = wrapper.find(Toggle);
    toggle.find("input").trigger("click");
    await localVue.nextTick();
    const events = toggle.emitted("update");
    assert.deepEqual(events, [[true]]);
    assert.isTrue(wrapper.vm.active);
  });

  it("does not react on click outside the input element when disabled", async () => {
    const localVue = createLocalVue();
    const Parent = localVue.extend({
      components: { Toggle },
      template: `<Toggle v-model="on" disabled />`,
      data() {
        return {
          on: false
        };
      }
    });
    const wrapper = mount(Parent, { localVue });
    assert.isFalse(wrapper.vm.on, "on should be false");
    const toggle = wrapper.find(Toggle);
    toggle.trigger("click");
    await localVue.nextTick();
    assert.isFalse(wrapper.vm.on, "after click on should still be false");
  });

  // Toggles which are not embedded in a form item have no default id.
  // If they have no id they should not render the id attribute.
  // The generated html was kinda funky:
  // <input type="checkbox" id>
  it("does not render empty id attribute", () => {
    const localVue = createLocalVue();
    const toggle = mount(Toggle, { localVue });
    const id = toggle.attributes("id");
    assert.isUndefined(id, "a default toggle should not have an id");
  });
  // We test this because there was a bug in the past which caused toggles to always be rendered
  // with the same size, no matter what value the size prop had.
  describe("renders correctly with size", () => {
    it("xs", () => {
      const toggle = mount(Toggle, { propsData: { size: "xs" } });
      assert(toggle.find(".fd-toggle").classes("fd-toggle--xs"));
    });
    it("s", () => {
      const toggle = mount(Toggle, { propsData: { size: "s" } });
      assert(toggle.find(".fd-toggle").classes("fd-toggle--s"));
    });
    it("l", () => {
      const toggle = mount(Toggle, { propsData: { size: "l" } });
      assert(toggle.find(".fd-toggle").classes("fd-toggle--l"));
    });
  });

  it("supports v-model", () => {
    const localVue = createLocalVue();
    const Wrapper = localVue.extend({
      components: { Toggle },
      template: `<Toggle v-model="on" />`,
      data() {
        return {
          on: false
        };
      }
    });
    const toggle = mount<InstanceType<typeof Wrapper>>(Wrapper, { localVue });
    assert.strictEqual(false, toggle.vm.on);
    toggle.setData({ on: true });
    assert.strictEqual(true, toggle.vm.on);
    toggle.find("input").trigger("click");
    assert.strictEqual(false, toggle.vm.on);
  });
});
