// https://docs.cypress.io/api/introduction/api.html

const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`);
};

describe("My First Test", () => {
  beforeEach(() => cy.visit("/"));
  it("Visits the app root url", () => {
    visitPage("search-input/completions");
    cy.get("input").click();
    cy.get(".fd-popover__popper").should("be.visible");
  });
});
