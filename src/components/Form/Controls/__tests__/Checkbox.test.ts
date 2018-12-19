import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import { Input } from '../Input';
import {  ComponentOptions } from 'vue';

describe('Input', () => {
  it('text works', () => {
    const initialFirstName = 'chris';
    const Parent: ComponentOptions<any> = {
      template: `
      <div>
        <Input v-model="firstName"></Input>
      </div>
      `,
      data() {
        return {
          firstName: initialFirstName,
        };
      },
      components: { Input },
    };
    const localVue = createLocalVue();
    const form = mount(Parent, { localVue });
    const input = form.find<Input>(Input);
    assert.strictEqual(initialFirstName, input.vm.value);
    const newFirstName = 'andi';
    form.setData({ firstName: newFirstName });
    assert.strictEqual(newFirstName, input.vm.value);
  });

  it('checkbox input', () => {
    const Parent: ComponentOptions<any> = {
      template: `
      <div>
        <Input type="checkbox" v-model="isCool"></Input>
      </div>
      `,
      data() {
        return {
          isCool: true,
        };
      },
      components: { Input },
    };
    const localVue = createLocalVue();
    const form = mount(Parent, { localVue });
    const input = form.find<Input>(Input);
    assert(input.vm.value);
  });
});
