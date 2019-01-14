import { assert } from 'chai';
import { Prop } from '@/api/Decorators/Prop';
import { Base, Component } from '@/core';

// tslint:disable:member-access

describe('Default Value Documentation', () => {

  class Person {}

  // This test exists because at some point a boolean default value in the second param
  // was displayed as 'no specified' in the docs.
  describe('default boolean value in second arg', () => {
    @Component('DefaultBooleanInSecondArg') class DefaultBooleanInSecondArg extends Base {
      @Prop('i am a bool', { default: true, type: Boolean }) flagProp!: boolean;
    }

    const instance = new DefaultBooleanInSecondArg();
    const { $componentDocumentation: doc }  = instance.$options;

    it('should generate correct prop documentation', () => {
      if(doc == null) {
        throw Error(`Expected ${instance} to have a component documentation.`);
      }
      assert(doc.hasProp('flagProp'), 'flagProp should exist');
      const prop = doc.getProp('flagProp');
      assert.isTrue(prop.defaultValue, 'flagProps default value should be true');
      assert.isUndefined(prop.readableDefaultValue, 'flagProps readable default value should be undefined');
    });
  });

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
