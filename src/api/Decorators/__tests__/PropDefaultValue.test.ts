import { assert } from 'chai';
import { Prop } from '@/api/Decorators/Prop';
import { Base, Component } from '@/core';

// tslint:disable:member-access

describe('Default Value Documentation', () => {

  class Person {}

  describe('DefaultsOfSimpleProps', () => {
    const defaultFunctionValue = () => 'hi mom';
    @Component('DefaultsOfSimpleProps') class DefaultsOfSimpleProps extends Base {
      @Prop({ default: 'i am a string' }) stringProp!: string;
      @Prop({ default: 1337 }) numberProp!: string;
      @Prop({ default: () => [1, 2, 3], type: Array }) arrayProp!: number[];
      @Prop({
        default: () => ({ firstName: 'chris'}),
        type: Object,
      }) objectProp!: object;
      @Prop({ default: defaultFunctionValue, type: Function }) functionProp!: () => (string);
      @Prop({ default: () => new Person(), type: Person }) personProp!: Person | null;
    }

    const instance = new DefaultsOfSimpleProps();
    const { $componentDocumentation: doc }  = instance.$options;

    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('stringProp', () => {
      assert.strictEqual(doc.getProp('stringProp').defaultValue, 'i am a string');
    });

    it('numberProp', () => {
      assert.strictEqual(doc.getProp('numberProp').defaultValue, 1337);
    });

    it('arrayProp', () => {
      const prop = doc.getProp('arrayProp');
      assert.isFunction(prop.vue.default);
      assert.deepEqual(prop.defaultValue, [1, 2, 3]);
    });

    it('objectProp', () => {
      const prop = doc.getProp('objectProp');
      assert.isFunction(prop.vue.default);
      assert.deepEqual(prop.defaultValue, { firstName: 'chris' });
    });

    it('functionProp', () => {
      assert.strictEqual(doc.getProp('functionProp').defaultValue, defaultFunctionValue);
    });

    it('personProp', () => {
      const prop = doc.getProp('personProp');
      assert.isFunction(prop.vue.default);
      assert.instanceOf(prop.defaultValue, Person);
    });
  });
});
