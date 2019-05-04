const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`);
};

describe("combobox", () => {
  beforeEach(() => visitPage("combobox-default"));
  describe("default combobox", () => {
    it("changes value when selecting via the input element", () => {
      cy.get("input").click();
      cy.get(".fd-popover__popper").should("be.visible");
      cy.get("#item-1").click();
      cy.get("input").should("have.value", "Apple-v");
    });
  });
});
