import { assert } from 'chai';
import { ApiProp } from '../ApiProp';

describe('a prop', () => {
  let prop = new ApiProp({ key: 'firstName', description: 'first name' });

  beforeEach(() => {
    prop = new ApiProp({ key: 'firstName', description: 'first name' });
  });

  it('can be updated with prop options', () => {
    prop.updateWithPropValidator({
      type: String,
    });
    assert(prop.types[0] === String);
  });
  it('can be updated with prop options containing array types', () => {
    prop.updateWithPropValidator({
      type: [Number, String],
    });
    assert.lengthOf(prop.types, 2);
    assert.deepStrictEqual(prop.types, [Number, String]);
  });

  it('can be updated with default value', () => {
    prop.updateWithPropValidator({
      type: String,
      default: 'hi mom',
    });
    assert.deepStrictEqual(prop.defaultValue, 'hi mom');
  });
  it('can be updated with required flag', () => {
    prop.updateWithPropValidator({
      type: String,
      required: true,
    });
    assert.deepStrictEqual(prop.required, true);
  });
});
