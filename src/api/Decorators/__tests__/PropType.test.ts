import { assert } from 'chai';
import { Prop } from '@/api/Decorators/Prop';
import { Base, Component } from '@/core';

// tslint:disable:member-access

describe('Decorators', () => {

  class Person {}

  describe('SimplePropTypes', () => {
    @Component('SimplePropTypes') class SimplePropTypes extends Base {
      // Testing Props with Types
      @Prop(String) stringProp!: string;
      @Prop(Number) numberProp!: string;
      @Prop([String, Number]) stringOrNumberProp!: string;
      @Prop(Person) personProp!: Person | null;
    }

    const instance = new SimplePropTypes();
    const { $componentDocumentation: doc }  = instance.$options;

    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('stringProp', () => {
      assert.isTrue(doc.hasProp('stringProp'));
      const prop = doc.getProp('stringProp');
      assert.strictEqual(prop.vue.type, String);
    });

    it('numberProp', () => {
      assert.isTrue(doc.hasProp('numberProp'));
      const prop = doc.getProp('numberProp');
      assert.strictEqual(prop.vue.type, Number);
    });

    it('stringOrNumberProp', () => {
      assert.isTrue(doc.hasProp('stringOrNumberProp'));
      const prop = doc.getProp('stringOrNumberProp');
      const types = prop.vue.type;
      assert.isArray(prop.vue.type);
      if(Array.isArray(types)) {
        assert.sameMembers(types, [String, Number]);
      }
    });

    it('personProp', () => {
      assert.isTrue(doc.hasProp('personProp'));
      const prop = doc.getProp('personProp');
      assert.strictEqual(Person, prop.vue.type);
    });
  });

  describe('SimpleWithDescriptionPropTypes', () => {
    @Component('SimpleWithDescriptionPropTypes')
    class SimpleWithDescriptionPropTypes extends Base {
      // Testing Props with Description + Types
      // We prefix the description with a $ to make sure the custom name is also picked up
      @Prop()
      anyPropNoDescription!: any;

      @Prop('$anyProp')
      anyProp!: any;

      @Prop('$describedStringProp', String)
      describedStringProp!: string;

      @Prop('$describedNumberProp', Number)
      describedNumberProp!: string;

      @Prop('$describedStringOrNumberProp', [String, Number])
      describedStringOrNumberProp!: string;

      @Prop('$describedPersonProp', Person)
      describedPersonProp!: Person | null;
    }

    const instance = new SimpleWithDescriptionPropTypes();
    const { $componentDocumentation: doc }  = instance.$options;
    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('anyPropNoDescription', () => {
      assert.isTrue(doc.hasProp('anyPropNoDescription'));
      const prop = doc.getProp('anyPropNoDescription');
      assert.isUndefined(prop.vue.type);
    });

    it('$describedStringProp', () => {
      assert.isTrue(doc.hasProp('describedStringProp'));
      const prop = doc.getProp('describedStringProp');
      assert.strictEqual(prop.vue.type, String);
    });

    it('$describedNumberProp', () => {
      assert.isTrue(doc.hasProp('describedNumberProp'));
      const prop = doc.getProp('describedNumberProp');
      assert.strictEqual(prop.vue.type, Number);
    });

    it('$describedStringOrNumberProp', () => {
      assert.isTrue(doc.hasProp('describedStringOrNumberProp'));
      const prop = doc.getProp('describedStringOrNumberProp');
      const types = prop.vue.type;
      assert.isArray(prop.vue.type);
      if(Array.isArray(types)) {
        assert.sameMembers(types, [String, Number]);
      }
    });

    it('$describedPersonProp', () => {
      assert.isTrue(doc.hasProp('describedPersonProp'));
      const prop = doc.getProp('describedPersonProp');
      assert.strictEqual(prop.vue.type, Person);
    });
  });

  describe('PropTypesInOptions', () => {
    @Component('PropTypesInOptions')
    class PropTypesInOptions extends Base {
      @Prop({})
      anyProp!: any;

      @Prop({ type: String })
      describedStringProp!: string;

      @Prop({ type: Number })
      describedNumberProp!: string;

      @Prop({ type: [String, Number] })
      describedStringOrNumberProp!: string;

      @Prop({ type: Person })
      describedPersonProp!: Person | null;
    }

    const instance = new PropTypesInOptions();
    const { $componentDocumentation: doc }  = instance.$options;
    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('$describedStringProp', () => {
      assert.isTrue(doc.hasProp('describedStringProp'));
      const prop = doc.getProp('describedStringProp');
      assert.strictEqual(prop.vue.type, String);
    });

    it('$describedNumberProp', () => {
      assert.isTrue(doc.hasProp('describedNumberProp'));
      const prop = doc.getProp('describedNumberProp');
      assert.strictEqual(prop.vue.type, Number);
    });

    it('$describedStringOrNumberProp', () => {
      assert.isTrue(doc.hasProp('describedStringOrNumberProp'));
      const prop = doc.getProp('describedStringOrNumberProp');
      const types = prop.vue.type;
      assert.isArray(prop.vue.type);
      if(Array.isArray(types)) {
        assert.sameMembers(types, [String, Number]);
      }
    });

    it('$describedPersonProp', () => {
      assert.isTrue(doc.hasProp('describedPersonProp'));
      const prop = doc.getProp('describedPersonProp');
      assert.strictEqual(prop.vue.type, Person);
    });
  });

  describe('PropTypesInOptions2ndArg', () => {
    @Component('PropTypesInOptions2ndArg')
    class PropTypesInOptions2ndArg extends Base {
      @Prop('$anyProp', {})
      anyProp!: any;

      @Prop('$describedStringProp', { type: String })
      describedStringProp!: string;

      @Prop('$describedNumberProp', { type: Number })
      describedNumberProp!: string;

      @Prop('$describedStringOrNumberProp', { type: [String, Number] })
      describedStringOrNumberProp!: string;

      @Prop('$describedPersonProp', { type: Person })
      describedPersonProp!: Person | null;
    }

    const instance = new PropTypesInOptions2ndArg();
    const { $componentDocumentation: doc }  = instance.$options;
    if(doc == null) {
      throw Error(`Expected ${instance} to have a component documentation.`);
    }

    it('$describedStringProp', () => {
      assert.isTrue(doc.hasProp('describedStringProp'));
      const prop = doc.getProp('describedStringProp');
      assert.strictEqual(prop.vue.type, String);
    });

    it('$describedNumberProp', () => {
      assert.isTrue(doc.hasProp('describedNumberProp'));
      const prop = doc.getProp('describedNumberProp');
      assert.strictEqual(prop.vue.type, Number);
    });

    it('$describedStringOrNumberProp', () => {
      assert.isTrue(doc.hasProp('describedStringOrNumberProp'));
      const prop = doc.getProp('describedStringOrNumberProp');
      const types = prop.vue.type;
      assert.isArray(prop.vue.type);
      if(Array.isArray(types)) {
        assert.sameMembers(types, [String, Number]);
      }
    });

    it('$describedPersonProp', () => {
      assert.isTrue(doc.hasProp('describedPersonProp'));
      const prop = doc.getProp('describedPersonProp');
      assert.strictEqual(prop.vue.type, Person);
    });
  });
});
