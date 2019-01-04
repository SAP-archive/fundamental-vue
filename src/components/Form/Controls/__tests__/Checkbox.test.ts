import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import { Checkbox, Radio } from '../';
import { FormItem } from '../../FormItem';

describe('FormItem', () => {
  describe('with single Radio Button', () => {
    it('supports v-model', async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template:
        `
        <FormItem>
          <Radio value="helloWorld" v-model="checked" />
        </FormItem>
        `,
        data() {
          return {
            checked: '',
          };
        },
        components: { FormItem, Radio },
      });
      const form = mount(Parent, { localVue });
      assert.strictEqual(form.vm.checked, '');
      const radio = form.find<Radio>(Radio);
      assert.isDefined(radio);
      radio.trigger('click');
      await localVue.nextTick();
      assert.strictEqual(form.vm.checked, 'helloWorld');
    });
  });

  describe('with single Checkbox', () => {
    it('supports v-model', async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template:
        `
        <FormItem>
          <Checkbox value="helloWorld" v-model="checked" />
        </FormItem>
        `,
        data() {
          return {
            checked: false,
          };
        },
        components: { FormItem, Checkbox },
      });
      const form = mount(Parent, { localVue });
      assert.isFalse(form.vm.checked);
      const checkbox = form.find<Checkbox>(Checkbox);
      assert.isDefined(checkbox);
      checkbox.trigger('click');
      await localVue.nextTick();
      assert.isTrue(form.vm.checked);
    });
  });

  describe('with multiple Checkboxes', () => {
    it('supports v-model', async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template:
        `
        <FormItem>
          <Checkbox value="check1" v-model="checked" />
          <Checkbox value="check2" v-model="checked" />
          <Checkbox value="check3" v-model="checked" />
          <Checkbox value="check4" v-model="checked" />
        </FormItem>
        `,
        data() {
          return {
            checked: [],
          };
        },
        components: { FormItem, Checkbox },
      });
      const form = mount(Parent, { localVue });
      assert.lengthOf(form.vm.checked, 0);
      const checkboxes = form.findAll<Checkbox>(Checkbox);
      assert.lengthOf(checkboxes, 4);
      const expectedValues: any[] = [];
      assert.sameMembers(form.vm.checked, expectedValues);
      for(const checkbox of checkboxes.wrappers) {
        const value = checkbox.vm.value;
        checkbox.trigger('click');
        expectedValues.push(value);
        assert.sameMembers(form.vm.checked, expectedValues);
      }
    });
  });
});
