
import { assert } from 'chai';
import { Prop } from '@/api/Decorators/Prop';
import { Base, Component } from '@/core';

// tslint:disable:member-access

describe('Prop with Acceptable Values', () => {
  describe('acceptableValues in FirstParam', () => {
    @Component('Child') class Child extends Base {
      @Prop({ acceptableValues: ['a', 'b', 'c'] }) stringProp!: string;
      @Prop({ acceptableValues: [1, 2, 3] }) numberProp!: number;
      @Prop({ acceptableValues: [] }) anyProp!: any;
      @Prop({ }) undefinedProp!: any;
    }

    const instance = new Child();
    const { $componentDocumentation: doc }  = instance.$options;

    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('stringProp', () => {
      assert.deepEqual(doc.getProp('stringProp').acceptableValues, ['a', 'b', 'c']);
    });

    it('numberProp', () => {
      assert.deepEqual(doc.getProp('numberProp').acceptableValues, [1,2,3]);
    });

    it('anyProp', () => {
      assert.deepEqual(doc.getProp('anyProp').acceptableValues, []);
    });

    it('undefinedProp', () => {
      assert.isUndefined(doc.getProp('undefinedProp').acceptableValues);
    });
  });

  describe('acceptableValues in 2nd params', () => {
    @Component('Child') class Child extends Base {
      @Prop('stringProp', { acceptableValues: ['a', 'b', 'c'] }) stringProp!: string;
      @Prop('numberProp', { acceptableValues: [1, 2, 3] }) numberProp!: number;
      @Prop('anyProp', { acceptableValues: [] }) anyProp!: any;
      @Prop('undefinedProp', { }) undefinedProp!: any;
    }

    const instance = new Child();
    const { $componentDocumentation: doc }  = instance.$options;

    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('stringProp', () => {
      assert.deepEqual(doc.getProp('stringProp').acceptableValues, ['a', 'b', 'c']);
    });

    it('numberProp', () => {
      assert.deepEqual(doc.getProp('numberProp').acceptableValues, [1,2,3]);
    });

    it('anyProp', () => {
      assert.deepEqual(doc.getProp('anyProp').acceptableValues, []);
    });

    it('undefinedProp', () => {
      assert.isUndefined(doc.getProp('undefinedProp').acceptableValues);
    });
  });
});
