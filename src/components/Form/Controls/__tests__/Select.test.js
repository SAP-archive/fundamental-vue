import { mount, createLocalVue } from "@vue/test-utils";
import FdSelect from "./../Select.vue";

describe("Select", () => {
  it("supports v-model", async () => {
    const localVue = createLocalVue();
    const Wrapper = localVue.extend({
      components: { FdSelect },
      data: () => ({ color: "red" }),
      template: `
      <div>
        <button @click="color = green">ClickMe</button>
        <fd-select v-model="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </fd-select>
      </div>
      `
    });
    const wrapper = mount(Wrapper, { localVue });
    await localVue.nextTick();
    expect(wrapper.vm.color).toBe("red");
    const select = wrapper.find("select");
    select.setValue("green");
    select.trigger("input");
    await localVue.nextTick();
    const selectedIndex = select.element.selectedIndex;
    expect(selectedIndex).toBe(1);
  });
});
