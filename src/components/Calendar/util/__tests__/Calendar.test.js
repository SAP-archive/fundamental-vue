import { weekFromDate, monthFromDate } from "./..";
import sameDay from "./../../../../util/date/same-day";

const sameDays = (lhs, rhs) => {
  return (
    lhs.length === rhs.length &&
    lhs.every((lDate, index) => {
      const rDate = rhs[index];
      return sameDay(rDate, lDate);
    })
  );
};

const asDate = ([y, m, d]) => new Date(y, m, d);
const asDates = dates => dates.map(asDate);

describe("Calendar", () => {
  // Test the very first week
  it("week #1 in feb 2018", () => {
    const week = weekFromDate(new Date(2018, 1, 1));
    expect(
      sameDays(week, [
        new Date(2018, 0, 28),
        new Date(2018, 0, 29),
        new Date(2018, 0, 30),
        new Date(2018, 0, 31),
        new Date(2018, 1, 1),
        new Date(2018, 1, 2),
        new Date(2018, 1, 3)
      ])
    ).toBe(true);
  });

  it("week #2 in feb 2018", () => {
    const days = weekFromDate(new Date(2018, 1, 8));
    expect(
      sameDays(days, [
        new Date(2018, 1, 4),
        new Date(2018, 1, 5),
        new Date(2018, 1, 6),
        new Date(2018, 1, 7),
        new Date(2018, 1, 8),
        new Date(2018, 1, 9),
        new Date(2018, 1, 10)
      ])
    ).toBe(true);
  });

  // Testing with a start date at the end of a week.
  it("week #3 in feb 2018", () => {
    const days = weekFromDate(new Date(2018, 1, 17));
    expect(
      sameDays(days, [
        new Date(2018, 1, 11),
        new Date(2018, 1, 12),
        new Date(2018, 1, 13),
        new Date(2018, 1, 14),
        new Date(2018, 1, 15),
        new Date(2018, 1, 16),
        new Date(2018, 1, 17)
      ])
    ).toBe(true);
  });

  // Testing with a start date at the beginning of a week.
  it("week #4 in feb 2018", () => {
    const days = weekFromDate(new Date(2018, 1, 18));
    expect(
      sameDays(days, [
        new Date(2018, 1, 18),
        new Date(2018, 1, 19),
        new Date(2018, 1, 20),
        new Date(2018, 1, 21),
        new Date(2018, 1, 22),
        new Date(2018, 1, 23),
        new Date(2018, 1, 24)
      ])
    ).toBe(true);
  });

  it("week #4 in feb 2018 using last day of the week", () => {
    const days = weekFromDate(new Date(2018, 1, 24));
    expect(
      sameDays(days, [
        new Date(2018, 1, 18),
        new Date(2018, 1, 19),
        new Date(2018, 1, 20),
        new Date(2018, 1, 21),
        new Date(2018, 1, 22),
        new Date(2018, 1, 23),
        new Date(2018, 1, 24)
      ])
    ).toBe(true);
  });

  it("last in feb 2018 using middle day of the week", () => {
    const days = weekFromDate(new Date(2018, 1, 27));
    expect(
      sameDays(days, [
        new Date(2018, 1, 25),
        new Date(2018, 1, 26),
        new Date(2018, 1, 27),
        new Date(2018, 1, 28),
        new Date(2018, 2, 1),
        new Date(2018, 2, 2),
        new Date(2018, 2, 3)
      ])
    ).toBe(true);
  });

  it("month", () => {
    const month = monthFromDate(new Date(2018, 1, 15));
    expect(month).toHaveLength(5);
    // We now test each week individually in order to get better jest error messages in case of a failure.
    const [week1, week2, week3, week4, week5] = month;
    expect(
      sameDays(
        week1,
        asDates([
          [2018, 0, 28],
          [2018, 0, 29],
          [2018, 0, 30],
          [2018, 0, 31],
          [2018, 1, 1],
          [2018, 1, 2],
          [2018, 1, 3]
        ])
      )
    ).toBe(true);
    expect(
      sameDays(
        week2,
        asDates([
          [2018, 1, 4],
          [2018, 1, 5],
          [2018, 1, 6],
          [2018, 1, 7],
          [2018, 1, 8],
          [2018, 1, 9],
          [2018, 1, 10]
        ])
      )
    ).toBe(true);
    expect(
      sameDays(
        week3,
        asDates([
          [2018, 1, 11],
          [2018, 1, 12],
          [2018, 1, 13],
          [2018, 1, 14],
          [2018, 1, 15],
          [2018, 1, 16],
          [2018, 1, 17]
        ])
      )
    ).toBe(true);
    expect(
      sameDays(
        week4,
        asDates([
          [2018, 1, 18],
          [2018, 1, 19],
          [2018, 1, 20],
          [2018, 1, 21],
          [2018, 1, 22],
          [2018, 1, 23],
          [2018, 1, 24]
        ])
      )
    ).toBe(true);
    expect(
      sameDays(
        week5,
        asDates([
          [2018, 1, 25],
          [2018, 1, 26],
          [2018, 1, 27],
          [2018, 1, 28],
          [2018, 2, 1],
          [2018, 2, 2],
          [2018, 2, 3]
        ])
      )
    ).toBe(true);
  });
});
