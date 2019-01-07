import { assert } from 'chai';
import { Component, Prop, Base } from '@/core';

describe('Documentation of', () => {
  describe('TestComponent', () => {

    class Person {}

    @Component('TestComponent')
    class TestComponent extends Base {

      @Prop('anyProp')
      public anyProp!: any;

      @Prop('firstName', String)
      public firstName!: string;

      @Prop({ type: String, default: null })
      public label!: string | null;

      @Prop(Person)
      public person!: Person | null;
    }
    const tc = new TestComponent();
    const { $componentDocumentation: doc }  = tc.$options;
    describe('is defined', () => {
      assert.isDefined(doc);
      if(doc == null) {
        return;
      }
      it('props are correct', () => {
        assert.strictEqual(String, doc.getProp('firstName').vue.type);
        assert.isUndefined(doc.getProp('anyProp').vue.type);
      });

      it('person prop', () => {
        assert.deepStrictEqual({
          required: false,
          type: Person,
          default: undefined,
          validator: undefined,
         }, doc.getProp('person').vuePropOptions);
      });

      it('label prop correct', () => {
        const opts = doc.getProp('label').vuePropOptions;
        assert.isFalse(opts.required);
        assert.strictEqual(opts.type, String);
        assert.isNull(opts.default);
        assert.isUndefined(opts.validator);
      });
    });
  });
});
