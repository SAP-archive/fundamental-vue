import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import { Combobox } from "./../";
import { MenuItem } from "./../../Menu";

describe("Combobox", () => {
  // There was an issue where the input component emitted objects/event objects instead of just strings.
  it("does not emit an object", () => {
    const combobox = mount(Combobox);
    const input = combobox.find("input");
    // @ts-ignore
    input.element.value = "hi";
    input.trigger("input");
    const events = combobox.emitted("update");
    expect(events).toHaveLength(1);
    const [event] = events;
    expect(event).toEqual(["hi"]);
  });

  it("supports vmodel", async () => {
    const localVue = createLocalVue();

    const wrapper = mount(
      {
        template: `
      <Combobox v-model="value">
        <MenuItem ref="menuItem1" value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
      </Combobox>
      `,
        data() {
          return {
            value: "abc"
          };
        },
        components: {
          Combobox,
          MenuItem
        }
      },
      { localVue }
    );
    await localVue.nextTick();
    const item = wrapper.find({ ref: "menuItem1" });
    item.find("a").trigger("click");
    assert.strictEqual(item.text(), "1"); // ensure that we have selected the correct item
    // @ts-ignore
    assert.strictEqual(wrapper.vm.value, "1");
  });
});
