import { assert } from 'chai';
import { Props, TimeItem } from '../TimeItem';
import { mount } from '@vue/test-utils';

describe('TimeItem', () => {
    it('Time rendered if meridian is shown', () => {
        const propsData: Props = {
            showMeridian: true,
            value: '11:30 am',
        };
        const timeItem = mount(TimeItem, { propsData });
        assert.strictEqual(timeItem.findAll('Time').length, 3);
    });
});
