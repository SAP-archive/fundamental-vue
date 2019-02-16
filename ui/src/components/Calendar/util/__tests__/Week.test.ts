import { weekFromDate } from "./../";
import { assert } from "chai";

describe("weekFromDate", () => {
  it("works with no options", () => {
    const date = new Date(2018, 11, 5);
    const [firstDate] = weekFromDate(date);
    assert.equal(
      firstDate.getDay(),
      0,
      "First day of a week must always be 0 (sun)"
    );
  });

  it("works with different firstDayOfWeek", () => {
    const date = new Date(2018, 11, 5);
    const [firstDate] = weekFromDate(date, { firstDayOfWeek: 1 });
    assert.equal(firstDate.getDay(), 1, "First day of a week must be 1 (mon)");
  });
});
