import { weekFromDate } from "./../";

describe("weekFromDate", () => {
  it("works with no options", () => {
    const date = new Date(2018, 11, 5);
    const [firstDate] = weekFromDate(date);
    expect(firstDate.getDay()).toBe(0);
  });

  it("works with different firstDayOfWeek", () => {
    const date = new Date(2018, 11, 5);
    const [firstDate] = weekFromDate(date, { firstDayOfWeek: 1 });
    expect(firstDate.getDay()).toBe(1);
  });
});
