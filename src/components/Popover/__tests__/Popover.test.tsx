import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import { Popover } from '../Popover';

describe('Popover', () => {
  it('renders custom body and no (legacy) menu', () => {
    const bodyId = 'aaabody';
    const popover = mount<Popover>(Popover, {
      slots: {
        default: `<div id="${bodyId}"> hello world</div>`,
      },
    });
    assert.strictEqual(popover.find(`#${bodyId}`).text(), 'hello world');
    assert.notInclude(popover.html(), 'menu');
  });
});
