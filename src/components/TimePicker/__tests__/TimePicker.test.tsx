import { assert } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { TimePicker } from '../TimePicker';

describe('TimePicker', () => {
    it('emits timePickerUpdate', () => {
        const wrapper = shallowMount(TimePicker, {
            listeners: {
                timePickerUpdate() {/* empty */},
            },
        });
        wrapper.trigger('timePickerUpdate');
        const event = wrapper.emitted('timePickerUpdate');
        assert.isDefined(event);
        assert.isArray(event);
        assert.lengthOf(event,1);
    });
});
