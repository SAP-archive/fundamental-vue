import createNormalizedDate from "./../normalized-date";

describe("NormalizedDate", () => {
  it("is null-date by default", () => {
    const date = createNormalizedDate();
    expect(date.start).toBeNull();
    expect(date.end).toBeNull();
    expect(date.from).toBeNull();
    expect(date.to).toBeNull();
  });

  it("is null-date when called with null", () => {
    const date = createNormalizedDate(null);
    expect(date.start).toBeNull();
    expect(date.end).toBeNull();
    expect(date.from).toBeNull();
    expect(date.to).toBeNull();
  });

  it("is null-date when called with undefined", () => {
    const date = createNormalizedDate();
    expect(date.start).toBeNull();
    expect(date.end).toBeNull();
    expect(date.from).toBeNull();
    expect(date.to).toBeNull();
  });

  it("does contain no other date if from/to is null", () => {
    let date = createNormalizedDate();
    expect(date.contains(new Date("2019-06-20"))).toBe(false);
    date = createNormalizedDate({ from: new Date("2019-06-19") });
    expect(date.contains(new Date("2019-06-20"))).toBe(false);
    date = createNormalizedDate({ to: new Date("2019-06-21") });
    expect(date.contains(new Date("2019-06-20"))).toBe(false);
  });

  it("does contain date if from/to is set", () => {
    const date = createNormalizedDate({
      from: new Date("2019-06-19"),
      to: new Date("2019-06-21")
    });
    expect(date.contains(new Date("2019-06-19"))).toBe(true);
    expect(date.contains(new Date("2019-06-20"))).toBe(true);
    expect(date.contains(new Date("2019-06-21"))).toBe(true);
  });

  it("does contain year if from/to is set", () => {
    const date = createNormalizedDate({
      from: new Date("2019-06-19"),
      to: new Date("2021-06-21")
    });
    expect(date.containsYear(2019)).toBe(true);
    expect(date.containsYear(2020)).toBe(true);
    expect(date.containsYear(2021)).toBe(true);
    expect(date.containsYear(2018)).toBe(false);
    expect(date.containsYear(2022)).toBe(false);
  });

  it("does contain month if from/to is set", () => {
    const date = createNormalizedDate({
      from: new Date("2019-01-19"),
      to: new Date("2019-04-19")
    });
    expect(date.containsMonth(0)).toBe(true);
    expect(date.containsMonth(1)).toBe(true);
    expect(date.containsMonth(2)).toBe(true);
    expect(date.containsMonth(3)).toBe(true);
    expect(date.containsYear(4)).toBe(false);
  });
});
