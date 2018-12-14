import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import { Alert } from '../';

describe('Alert', () => {
  it('click on close hides the alert', () => {
    const alert = mount(Alert, { propsData: { dismissible: true }});
    assert(alert.isVisible());
    const closeButton = alert.find('button');
    assert.isDefined(closeButton);
    closeButton.trigger('click');
    assert(alert.isVisible() === false);
  });
});
