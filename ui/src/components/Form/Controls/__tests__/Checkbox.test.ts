import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import FdCheckbox from "../Checkbox.vue";
import FdRadio from "../Radio.vue";
import FdFormItem from "../../FormItem.vue";

describe("Checkbox", () => {
  it("can be disabled", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `<FdCheckbox disabled value="i_like_cookies" v-model="checked" />`,
      data: () => ({ checked: "" }),
      components: { FdCheckbox }
    });
    const wrapper = mount(TestComponent, { localVue });
    assert.strictEqual(wrapper.vm.checked, "");
    const checkbox = wrapper.find(FdCheckbox);
    assert.isDefined(checkbox);
    checkbox.trigger("click");
    await localVue.nextTick();
    assert.strictEqual(wrapper.vm.checked, "");
    assert.propertyVal(
      checkbox.attributes(),
      "disabled",
      "disabled",
      "disabled attribute should be present"
    );
  });
});

describe("FormItem", () => {
  describe("with single Radio Button", () => {
    it("supports v-model", async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template: `
        <FdFormItem>
          <FdRadio value="helloWorld" v-model="checked" />
        </FdFormItem>
        `,
        data: () => ({ checked: "" }),

        components: { FdFormItem, FdRadio }
      });
      const form = mount(Parent, { localVue });
      assert.strictEqual(form.vm.checked, "");
      const radio = form.find("input");
      assert.isDefined(radio);
      // @ts-ignore
      radio.element.value = "helloWorld";
      radio.trigger("input");
      await localVue.nextTick();
      assert.strictEqual(form.vm.checked, "helloWorld");
    });
  });

  describe("with single Checkbox", () => {
    it("supports v-model", async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template: `
        <FdFormItem>
          <FdCheckbox value="helloWorld" v-model="checked" />
        </FdFormItem>
        `,
        data: () => ({ checked: false }),
        components: { FdFormItem, FdCheckbox }
      });
      const form = mount(Parent, { localVue });
      assert.isFalse(form.vm.checked);
      const checkbox = form.find(FdCheckbox);
      assert.isDefined(checkbox);
      checkbox.trigger("click");
      await localVue.nextTick();
      assert.isTrue(form.vm.checked);
    });
  });

  describe("with multiple Checkboxes", () => {
    it("supports v-model", async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template: `
        <FdFormItem>
          <FdCheckbox value="check1" v-model="checked" />
          <FdCheckbox value="check2" v-model="checked" />
          <FdCheckbox value="check3" v-model="checked" />
          <FdCheckbox value="check4" v-model="checked" />
        </FdFormItem>
        `,
        data() {
          return {
            checked: []
          };
        },
        components: { FdFormItem, FdCheckbox }
      });
      const form = mount(Parent, { localVue });
      assert.lengthOf(form.vm.checked, 0);
      const checkboxes = form.findAll(FdCheckbox);
      assert.lengthOf(checkboxes, 4);
      const expectedValues: any[] = [];
      assert.sameMembers(form.vm.checked, expectedValues);
      for (const checkbox of checkboxes.wrappers) {
        const value = (checkbox.vm as any).value;
        checkbox.trigger("click");
        expectedValues.push(value);
        assert.sameMembers(form.vm.checked, expectedValues);
      }
    });
  });
});
