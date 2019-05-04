// https://docs.cypress.io/api/introduction/api.html

const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`);
};

describe("combobox", () => {
  beforeEach(() => cy.visit("/"));
  describe("default combobox", () => {
    it("changes value when selecting via the input element", () => {
      visitPage("combobox/default-combobox");
      cy.get("input").click();
      cy.get(".fd-popover__popper").should("be.visible");
      cy.get("#item-1").click();
    });
  });
});
