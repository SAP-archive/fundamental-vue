import parseDateRange from "./../date-range-parser";

const isOnSameDay = (received, expected) => {
  if (received == null) {
    return false;
  }
  const sameDay = received.getDay() === expected.getDay();
  const sameMonth = received.getMonth() === expected.getMonth();
  const sameYear = received.getYear() === expected.getYear();

  const pass = sameDay && sameMonth && sameYear;
  return pass;
};

describe("date range parser", () => {
  it("returns null range for ''", () => {
    expect(parseDateRange("")).toEqual({ from: null, to: null });
  });

  it("returns only start when start is given", () => {
    const range = parseDateRange("2012-01-26");
    expect(range).toBeDefined();
    const { from, to } = range;
    expect(to).toBeUndefined();
    expect(from).toBeDefined();

    expect(isOnSameDay(from, new Date(Date.parse("2012-01-26"))));
  });

  it("works with valid range", () => {
    const range = parseDateRange("2012-01-26 - 2012-01-28");
    expect(range).toBeDefined();
    const { from, to } = range;
    expect(to).toBeDefined();
    expect(from).toBeDefined();
    expect(isOnSameDay(from, new Date(Date.parse("2012-01-26"))));
    expect(isOnSameDay(to, new Date(Date.parse("2012-01-28"))));
  });
});
