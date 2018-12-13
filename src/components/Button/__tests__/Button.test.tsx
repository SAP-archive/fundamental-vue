import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { Button } from '../Button';

describe('Button', () => {
  it('renders default slot when passed', () => {
    const title = 'Button Title';
    const wrapper = shallowMount(Button, {
      slots: {
        default: title,
      },
    });
    expect(wrapper.text()).to.include(title);
  });
});
