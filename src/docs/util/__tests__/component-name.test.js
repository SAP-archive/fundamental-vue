import ComponentName from "./../component-name";

describe("ComponentName", () => {
  it("handles invalid name", () => {
    expect(() => ComponentName.from()).toThrow();
    expect(() => ComponentName.from(null)).toThrow();
    expect(() => ComponentName.from(1)).toThrow();
    expect(() => ComponentName.from({})).toThrow();
    expect(() => ComponentName.from([])).toThrow();
    expect(() => ComponentName.from(new Date())).toThrow();
  });
  it("handles already normalized names", () => {
    expect(ComponentName.from("fd-button").normalized).toBe("fd-button");

    expect(ComponentName.from("fd-button-group").normalized).toBe("fd-button-group");
  });

  it("handles names without prefix", () => {
    expect(ComponentName.from("button").normalized).toBe("fd-button");
    expect(ComponentName.from("button–group").normalized).toBe("fd-button–group");
  });

  it("handles CamelCased names without prefix", () => {
    expect(ComponentName.from("Button").normalized).toBe("fd-button");
    expect(ComponentName.from("ButtonGroup").normalized).toBe("fd-button-group");
  });

  it("handles CamelCased names with prefix", () => {
    expect(ComponentName.from("FdButton").normalized).toBe("fd-button");
    expect(ComponentName.from("FdButtonGroup").normalized).toBe("fd-button-group");
  });

  it("handles show names without prefix", () => {
    expect(ComponentName.from("h").normalized).toBe("fd-h");
    expect(ComponentName.from("a").normalized).toBe("fd-a");
    expect(ComponentName.from("A").normalized).toBe("fd-a");
  });
});
