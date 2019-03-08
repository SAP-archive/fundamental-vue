import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import FdInput from "../Input.vue";

describe("FdInput", () => {
  it("renders initial value set via v-model", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { FdInput },
        template: `<fd-input v-model="value" />`,
        data: () => ({ value: "sap" })
      },
      { localVue }
    );
    await localVue.nextTick();
    const input = wrapper.find("input");
    assert.propertyVal(input.element, "value", "sap");
  });

  it("updates value of input when changed externally", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { FdInput },
        template: `<fd-input v-model="value" />`,
        data: () => ({ value: "sap" })
      },
      { localVue }
    );
    await localVue.nextTick();
    const input = wrapper.find("input");
    wrapper.setData({ value: "is cool" });
    assert.propertyVal(input.element, "value", "is cool");
  });

  it("supports v-model", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { FdInput },
        template: `<fd-input v-model="value" />`,
        data: () => ({ value: "sap" })
      },
      { localVue }
    );
    await localVue.nextTick();
    const input = wrapper.find("input");

    // @ts-ignore
    input.element.value = "walldorf";
    input.trigger("input");

    const events = wrapper.find(FdInput).emitted("update");
    assert.lengthOf(events, 1);
    assert.deepStrictEqual(events[0], ["walldorf"]);
  });
});
