import { assert } from 'chai';
import { Component, Base } from '@/core';

describe('@Component decorator', () => {
  it('generates docs for empty component', () => {
    @Component('EmptyComponent')
    class EmptyComponent extends Base {}
    const component = new EmptyComponent();
    const { $componentDocumentation: doc }  = component.$options;
    assert.isDefined(doc);
  });
});
