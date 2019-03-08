import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import { Radio } from "../";

describe("Radiobutton", () => {
  it("can be disabled", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `<Radio disabled value="i_like_cookies" v-model="checked" />`,
      data: () => ({ checked: "" }),
      components: { Radio }
    });
    const wrapper = mount(TestComponent, { localVue });
    assert.strictEqual(wrapper.vm.checked, "");
    const radio = wrapper.find(Radio);
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
