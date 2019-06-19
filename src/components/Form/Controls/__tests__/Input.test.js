import { mount, createLocalVue } from "@vue/test-utils";
import FdInput from "../Input.vue";

describe("FdInput", () => {
  it("respects compact mode", () => {
    const wrapper = mount(FdInput, { propsData: { compact: true } });
    const classes = wrapper.classes();
    expect(classes).toContain("fd-input");
    expect(classes).toContain("fd-input--compact");
  });

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
    expect(input.element.value).toBe("sap");
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
    expect(input.element.value).toBe("is cool");
  });

  it("change event is emitted only once per actual change when wrapped with another component", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { FdInput },
        template: `<fd-input @change="$emit('change')" v-model="value" />`,
        data: () => ({ value: "sap" })
      },
      { localVue }
    );
    await localVue.nextTick();
    const input = wrapper.find("input");

    input.element.value = "walldorf";
    input.trigger("change");

    const changeEvents = wrapper.emitted("change");
    expect(changeEvents).toHaveLength(1);
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

    input.element.value = "walldorf";
    input.trigger("input");

    const events = wrapper.find(FdInput).emitted("update");
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual(["walldorf"]);
  });
});
