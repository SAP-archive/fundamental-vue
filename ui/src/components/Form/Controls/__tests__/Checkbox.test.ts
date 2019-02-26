import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import { Checkbox, Radio } from "../";
import FormItem from "../../FormItem.vue";

describe("Checkbox", () => {
  it("can be disabled", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `<Checkbox disabled value="i_like_cookies" v-model="checked" />`,
      data: () => ({ checked: "" }),
      components: { Checkbox }
    });
    const wrapper = mount(TestComponent, { localVue });
    assert.strictEqual(wrapper.vm.checked, "");
    const checkbox = wrapper.find(Checkbox);
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
        <FormItem>
          <Radio value="helloWorld" v-model="checked" />
        </FormItem>
        `,
        data: () => ({ checked: "" }),

        components: { FormItem, Radio }
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
        <FormItem>
          <Checkbox value="helloWorld" v-model="checked" />
        </FormItem>
        `,
        data: () => ({ checked: false }),
        components: { FormItem, Checkbox }
      });
      const form = mount(Parent, { localVue });
      assert.isFalse(form.vm.checked);
      const checkbox = form.find(Checkbox);
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
        <FormItem>
          <Checkbox value="check1" v-model="checked" />
          <Checkbox value="check2" v-model="checked" />
          <Checkbox value="check3" v-model="checked" />
          <Checkbox value="check4" v-model="checked" />
        </FormItem>
        `,
        data() {
          return {
            checked: []
          };
        },
        components: { FormItem, Checkbox }
      });
      const form = mount(Parent, { localVue });
      assert.lengthOf(form.vm.checked, 0);
      const checkboxes = form.findAll(Checkbox);
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
