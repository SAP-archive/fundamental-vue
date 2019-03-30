import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import FdRadio from "./../Radio.vue";

describe("Radiobutton", () => {
  it("can be disabled", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `<FdRadio disabled value="i_like_cookies" v-model="checked" />`,
      data: () => ({ checked: "" }),
      components: { FdRadio }
    });
    const wrapper = mount(TestComponent, {
      localVue,
      components: { FdRadio }
    });
    assert.strictEqual(wrapper.vm.checked, "");
    const radio = wrapper.find(FdRadio);
    assert.isDefined(radio);
    radio.trigger("click");
    await localVue.nextTick();
    assert.strictEqual(wrapper.vm.checked, "");
    assert.propertyVal(
      radio.attributes(),
      "disabled",
      "disabled",
      "disabled attribute should be present"
    );
  });
});
