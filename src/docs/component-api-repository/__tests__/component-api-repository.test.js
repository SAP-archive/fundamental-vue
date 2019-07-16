import ComponentApiRepository from "./../index";

describe("ComponentApiRepository", () => {
  it("returns displayable component name", () => {
    expect(new ComponentApiRepository([]).displayableComponentName("./FdAlert.json")).toEqual(
      "FdAlert"
    );
  });
});
