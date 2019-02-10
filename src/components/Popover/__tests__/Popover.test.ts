import { expect, assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import MenuList from '../../Menu/MenuList.vue';
import { Popover } from '../../Popover';
import FundamentalVue from '@/index';

describe('Popover', () => {
  let localVue = createLocalVue();
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(FundamentalVue);
  });

  it('renders menu list as default slot', async () => {
    const wrapper = mount({
      template: `
        <FdPopover>
        <FdMenuItem>Hi</FdMenuItem>
        </FdPopover>
        `,
    }, { localVue });
    await localVue.nextTick();
    const list = wrapper.find(MenuList);
    assert.isDefined(list);
  });

  it('renders custom content in body slot', async () => {
    const wrapper = mount({
      template: `
        <FdPopover>
        <template v-slot:default>
        <div>Hi</div>
        </template>
        </FdPopover>
        `,
    }, { localVue });
    await localVue.nextTick();
    assert.include(wrapper.find('div').text(), 'Hi');
  });

  it('clicking control slot content emits visible event', async () => {
    const wrapper = mount({
      template: `
        <FdPopover>
        <template v-slot:control>
          <button>show</button>
        </template>
        <FdMenuItem>hi</FdMenuItem>
        </FdPopover>
        `,
    }, { localVue });
    await localVue.nextTick();
    wrapper.find('button').trigger('click');
    wrapper.find('button').trigger('click');
    // After click, wrapper.emitted().visible = [ [false], [true] ]
    const popover = wrapper.find(Popover);
    const events = popover.emitted('visible');
    assert.lengthOf(events, 2);
    assert.deepEqual(events, [[true], [false]]);
  });
});
