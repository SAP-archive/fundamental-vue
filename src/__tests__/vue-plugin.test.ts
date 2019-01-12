import { assert } from 'chai';
import { createLocalVue } from '@vue/test-utils';
import FundamentalVue from './../';

describe('Fundamental Vue', () => {
  it('can be installed', () => {
    const localVue = createLocalVue();
    assert.isUndefined(localVue.component('FdButton'));
    localVue.use(FundamentalVue, {
      log: {
        registerComponent: false,
        welcome: false,
      },
    });
    assert.isDefined(localVue.component('FdButton'));
  });
});
