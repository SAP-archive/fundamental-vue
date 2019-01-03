import { assert } from 'chai';
import { PropDocumentation } from '../PropDocumentation';

describe('a prop', () => {
  let prop!: PropDocumentation;

  beforeEach(() => {
    prop = new PropDocumentation({ key: 'firstName' });
  });

  describe('can be converted to vue options', () => {
    it('string type', () => {
      const p = new PropDocumentation({ key: 'firstName' });
      p.vueTypes = String;
      assert.deepStrictEqual(p.vuePropOptions, {
        required: false,
        default: undefined,
        type: String,
      });
    });

    it('required any', () => {
      const p = new PropDocumentation({ key: 'firstName' });
      p.required = true;
      assert.deepStrictEqual(p.vuePropOptions, {
        required: true,
        default: undefined,
        type: undefined,
      });
    });

    it('function type', () => {
      const p = new PropDocumentation({ key: 'firstName' });
      p.updateWithOptions({ type: Function });
      assert.deepStrictEqual(p.vuePropOptions, {
        required: false,
        default: undefined,
        type: Function,
      });
    });
  });

  it('can be updated with prop options', () => {
    prop.updateWithOptions({
      type: String,
    });
    const types = prop.vueTypes;
    assert.strictEqual(types, String);
  });

  it('can be updated with prop options containing array types', () => {
    prop.updateWithOptions({
      type: [Number, String],
    });
    const types = prop.vueTypes;
    assert.isArray(types);
    if(Array.isArray(types)) {
      assert.lengthOf(types, 2);
    }
    assert.deepStrictEqual(types, [Number, String]);
  });

  it('can be updated with default value', () => {
    prop.updateWithOptions({
      type: String,
      default: 'hi mom',
      readableDefaultValue: 'hi mom',
    });
    assert.strictEqual(prop.defaultValue, 'hi mom');
    assert.strictEqual(prop.readableDefaultValue, 'hi mom');
  });

  it('can be updated with required flag', () => {
    prop.updateWithOptions({
      type: String,
      required: true,
    });
    assert.deepStrictEqual(prop.required, true);
  });
});
