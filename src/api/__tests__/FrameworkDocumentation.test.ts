import { assert } from 'chai';
import { FrameworkDocumentation } from '../FrameworkDocumentation';
import { ComponentDocumentation } from '../ComponentDocumentation';
import { componentName } from '@/util';

describe('FrameworkDocumentation', () => {
  let collection!: FrameworkDocumentation;
  const names = {
    componentA: componentName('ComponentA'),
    componentB: componentName('ComponentB'),
    mixinA: componentName('MixinA'),
  };

  beforeEach(() => collection = new FrameworkDocumentation());

  // Tests
  it('component api can be added and retrieved', () => {
    const compA = new ComponentDocumentation(names.componentA);
    collection.add(compA);
    assert.lengthOf(collection.apis, 1);
    assert.strictEqual(collection.apis[0].componentName, names.componentA);
  });

  it('mixin can be added and retrieved', () => {
    const compA = new ComponentDocumentation(names.componentA);

    const mixinA = new ComponentDocumentation(names.mixinA);

    compA.addMixin(names.mixinA);

    collection.add(compA);
    collection.add(mixinA);

    const mixins = collection.mixinsOf(compA);
    assert.lengthOf(mixins, 1);
    assert.strictEqual(mixins[0].componentName, names.mixinA);
  });

});
