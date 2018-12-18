import { laterDate, earlierDate } from './../';
import { assert } from 'chai';

describe('utils', () => {
  describe('laterDate', () => {
    it('works with different month', () => {
      const d1 = new Date(2018, 5, 12);
      const d2 = new Date(2018, 6, 12);
      assert(laterDate(d1, d2) === d2);
    });
    it('works with different day', () => {
      const d1 = new Date(2018, 6, 1);
      const d2 = new Date(2018, 6, 12);
      assert(laterDate(d1, d2) === d2);
    });
    it('works with different year', () => {
      const d1 = new Date(2020, 6, 12);
      const d2 = new Date(2018, 6, 12);
      assert(laterDate(d1, d2) === d1);
    });
  });
  describe('earlierDate', () => {
    it('works with different month', () => {
      const d1 = new Date(2018, 5, 12);
      const d2 = new Date(2018, 6, 12);
      assert(earlierDate(d1, d2) === d1);
    });
    it('works with different day', () => {
      const d1 = new Date(2018, 6, 1);
      const d2 = new Date(2018, 6, 12);
      assert(earlierDate(d1, d2) === d1);
    });
    it('works with different year', () => {
      const d1 = new Date(2020, 6, 12);
      const d2 = new Date(2018, 6, 12);
      assert(earlierDate(d1, d2) === d2);
    });
  });
});
