import { weekFromDate, monthFromDate, sameDay } from './..';
import { assert } from 'chai';

const sameDays = (lhs: Date[], rhs: Date[]) => {
  return lhs.length === rhs.length &&
  lhs.every((lDate, index) => {
    const rDate = rhs[index];
    return sameDay(rDate, lDate);
  });
};

const asDate = ([y, m, d]: number[]): Date => new Date(y, m, d);
const asDates = (dates: number[][]): Date[] => dates.map(asDate);

describe('Calendar', () => {
  // Test the very first week
  it('week #1 in feb 2018', () => {
    const week = weekFromDate(new Date(2018, 1, 1));
    assert(
      sameDays(week,
        [
          new Date(2018, 0, 28),
          new Date(2018, 0, 29),
          new Date(2018, 0, 30),
          new Date(2018, 0, 31),
          new Date(2018, 1, 1),
          new Date(2018, 1, 2),
          new Date(2018, 1, 3),
        ],
      ),
    );
  });

  it('week #2 in feb 2018', () => {
    const days = weekFromDate(new Date(2018, 1, 8));
    assert(
      sameDays(days,
        [
          new Date(2018, 1, 4),
          new Date(2018, 1, 5),
          new Date(2018, 1, 6),
          new Date(2018, 1, 7),
          new Date(2018, 1, 8),
          new Date(2018, 1, 9),
          new Date(2018, 1, 10),
        ],
      ),
    );
  });

  // Testing with a start date at the end of a week.
  it('week #3 in feb 2018', () => {
    const days = weekFromDate(new Date(2018, 1, 17));
    assert(
      sameDays(days,
        [
          new Date(2018, 1, 11),
          new Date(2018, 1, 12),
          new Date(2018, 1, 13),
          new Date(2018, 1, 14),
          new Date(2018, 1, 15),
          new Date(2018, 1, 16),
          new Date(2018, 1, 17),
        ],
      ),
    );
  });

  // Testing with a start date at the beginning of a week.
  it('week #4 in feb 2018', () => {
    const days = weekFromDate(new Date(2018, 1, 18));
    assert(
      sameDays(days,
        [
          new Date(2018, 1, 18),
          new Date(2018, 1, 19),
          new Date(2018, 1, 20),
          new Date(2018, 1, 21),
          new Date(2018, 1, 22),
          new Date(2018, 1, 23),
          new Date(2018, 1, 24),
        ],
      ),
    );
  });

  it('week #4 in feb 2018 using last day of the week', () => {
    const days = weekFromDate(new Date(2018, 1, 24));
    assert(
      sameDays(days,
        [
          new Date(2018, 1, 18),
          new Date(2018, 1, 19),
          new Date(2018, 1, 20),
          new Date(2018, 1, 21),
          new Date(2018, 1, 22),
          new Date(2018, 1, 23),
          new Date(2018, 1, 24),
        ],
      ),
    );
  });

  it('last in feb 2018 using middle day of the week', () => {
    const days = weekFromDate(new Date(2018, 1, 27));
    assert(
      sameDays(days,
        [
          new Date(2018, 1, 25),
          new Date(2018, 1, 26),
          new Date(2018, 1, 27),
          new Date(2018, 1, 28),
          new Date(2018, 2, 1),
          new Date(2018, 2, 2),
          new Date(2018, 2, 3),
        ],
      ),
    );
  });

  it('month', () => {
    const month = monthFromDate(new Date(2018, 1, 15));
    assert.lengthOf(month, 5);
    // We now test each week individually in order to get better jest error messages in case of a failure.
    const [week1, week2, week3, week4, week5] = month;
    assert(sameDays(week1, asDates([[2018, 0, 28], [2018, 0, 29], [2018, 0, 30], [2018, 0, 31], [2018, 1, 1], [2018, 1, 2], [2018, 1, 3]])));
    assert(sameDays(week2, asDates([[2018, 1, 4], [2018, 1, 5], [2018, 1, 6], [2018, 1, 7], [2018, 1, 8], [2018, 1, 9], [2018, 1, 10]])));
    assert(sameDays(week3, asDates([[2018, 1, 11], [2018, 1, 12], [2018, 1, 13], [2018, 1, 14], [2018, 1, 15], [2018, 1, 16], [2018, 1, 17]])));
    assert(sameDays(week4, asDates([[2018, 1, 18], [2018, 1, 19], [2018, 1, 20], [2018, 1, 21], [2018, 1, 22], [2018, 1, 23], [2018, 1, 24]])));
    assert(sameDays(week5, asDates([[2018, 1, 25], [2018, 1, 26], [2018, 1, 27], [2018, 1, 28], [2018, 2, 1], [2018, 2, 2], [2018, 2, 3]])));
  });
});
