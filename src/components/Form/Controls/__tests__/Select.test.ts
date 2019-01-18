import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import { Select } from '../Select';

describe('Select', () => {
  it('supports v-model', async () => {
    const localVue = createLocalVue();
    const Wrapper = localVue.extend({
      template: `
      <div>
        <button @click="color = green">ClickMe</button>
        <Select v-model="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </Select>
      </div>
      `,
      data: () => ({ color: 'red' }),
      components: { Select },
    });
    const wrapper = mount(Wrapper, { localVue });
    await localVue.nextTick();
    assert.strictEqual(wrapper.vm.color, 'red', 'red should be the default');
    const select = wrapper.find('select');
    select.setValue('green');

    select.trigger('input');
    await localVue.nextTick();

    // @ts-ignore
    const selectedIndex = select.element.selectedIndex;
    assert.strictEqual(selectedIndex, 1, 'selectedIndexshould be correct');
  });
});
