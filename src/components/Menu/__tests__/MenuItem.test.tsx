import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import { MenuItem } from './..';

describe('MenuItem', () => {
  // There was a bug that causes '<MenuItem><a href='#'>Item 1</a></MenuItem>'
  // to render an a-element into another a-element.
  it.only('does render embeddded link only once', () => {
    const item = mount({ render: h => <MenuItem><a href='#'>Item 1</a></MenuItem> });
    debugger;
    assert.strictEqual(item.findAll('a').length, 1);
  });

  it('does render embeddded text as link', () => {
    const item = mount({ render: h => <MenuItem>Item 1</MenuItem> });
    assert.strictEqual(item.findAll('a').length, 1);
  });
});
