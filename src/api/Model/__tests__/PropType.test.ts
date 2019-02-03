import { stringifyPropType } from './../PropType';
import { assert } from 'chai';
const { strictEqual } = assert;
describe('PropType', () => {
  describe('has stringifyPropType', () => {
    it('converts type to string correctly', () => {
      class CustomCtor {}
      strictEqual(Function.name, stringifyPropType(Function));
      strictEqual(Object.name, stringifyPropType(Object));
      strictEqual(Array.name, stringifyPropType(Array));
      strictEqual(Number.name, stringifyPropType(Number));
      strictEqual(Date.name, stringifyPropType(Date));
      strictEqual(Boolean.name, stringifyPropType(Boolean));
      strictEqual(String.name, stringifyPropType(String));
      // tslint:disable-next-line: no-empty
      strictEqual('Function', stringifyPropType(() => {}));
      strictEqual(CustomCtor.name, stringifyPropType(CustomCtor));
    });
  });
});
