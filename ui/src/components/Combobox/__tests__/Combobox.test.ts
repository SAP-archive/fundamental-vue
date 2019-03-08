import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import { Combobox } from "./../";
import { MenuItem } from "./../../Menu";

describe("Combobox", () => {
  it("supports vmodel", async () => {
    const localVue = createLocalVue();

    const wrapper = mount(
      {
        template: `
      <Combobox v-model="value">
        <MenuItem ref="menuItem1" value='1'>1</MenuItem>
        <MenuItem value='2'>2</MenuItem>
        <MenuItem value='3'>3</MenuItem>
        <MenuItem value='4'>4</MenuItem>
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
