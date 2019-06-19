import earlierDate from "./../earlier-date";
import laterDate from "./../later-date";

describe("utils", () => {
  describe("laterDate", () => {
    it("works with different month", () => {
      const d1 = new Date(2018, 5, 12);
      const d2 = new Date(2018, 6, 12);
      expect(laterDate(d1, d2)).toEqual(d2);
    });
    it("works with different day", () => {
      const d1 = new Date(2018, 6, 1);
      const d2 = new Date(2018, 6, 12);
      expect(laterDate(d1, d2)).toEqual(d2);
    });
    it("works with different year", () => {
      const d1 = new Date(2020, 6, 12);
      const d2 = new Date(2018, 6, 12);
      expect(laterDate(d1, d2)).toEqual(d1);
    });
  });
  describe("earlierDate", () => {
    it("works with different month", () => {
      const d1 = new Date(2018, 5, 12);
      const d2 = new Date(2018, 6, 12);
      expect(earlierDate(d1, d2)).toEqual(d1);
    });
    it("works with different day", () => {
      const d1 = new Date(2018, 6, 1);
      const d2 = new Date(2018, 6, 12);
      expect(earlierDate(d1, d2)).toEqual(d1);
    });
    it("works with different year", () => {
      const d1 = new Date(2020, 6, 12);
      const d2 = new Date(2018, 6, 12);
      expect(earlierDate(d1, d2)).toEqual(d2);
    });
  });
});
