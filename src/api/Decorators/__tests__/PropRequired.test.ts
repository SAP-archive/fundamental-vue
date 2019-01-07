
import { assert } from 'chai';
import { Prop } from '@/api/Decorators/Prop';
import { Base, Component } from '@/core';

// tslint:disable:member-access

describe('Decorators', () => {
  describe('Required in FirstParam', () => {
    @Component('Child') class Child extends Base {
      @Prop({ required: true }) requiredProp!: any;
      @Prop({ required: false }) optionalProp!: any;
      @Prop({ required: undefined }) requiredUndefined!: any;
      @Prop({ }) requiredUndefinedEmpty!: any;
    }

    const instance = new Child();
    const { $componentDocumentation: doc }  = instance.$options;

    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('requiredProp', () => {
      assert.isTrue(doc.getProp('requiredProp').required);
    });

    it('optionalProp', () => {
      assert.isFalse(doc.getProp('optionalProp').required);
    });

    it('requiredUndefined', () => {
      assert.isFalse(doc.getProp('requiredUndefined').required);
    });

    it('requiredUndefinedEmpty', () => {
      assert.isFalse(doc.getProp('requiredUndefinedEmpty').required);
    });
  });

  describe('Required in Second', () => {
    @Component('Child') class Child extends Base {
      @Prop('requiredProp', { required: true }) requiredProp!: any;
      @Prop('optionalProp', { required: false }) optionalProp!: any;
      @Prop('requiredUndefined', { required: undefined }) requiredUndefined!: any;
      @Prop('requiredUndefinedEmpty', { }) requiredUndefinedEmpty!: any;
    }

    const instance = new Child();
    const { $componentDocumentation: doc }  = instance.$options;

    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('requiredProp', () => {
      assert.isTrue(doc.getProp('requiredProp').required);
    });

    it('optionalProp', () => {
      assert.isFalse(doc.getProp('optionalProp').required);
    });

    it('requiredUndefined', () => {
      assert.isFalse(doc.getProp('requiredUndefined').required);
    });

    it('requiredUndefinedEmpty', () => {
      assert.isFalse(doc.getProp('requiredUndefinedEmpty').required);
    });
  });
});
