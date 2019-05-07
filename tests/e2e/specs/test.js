// https://docs.cypress.io/api/introduction/api.html

const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`);
};

describe("My First Test", () => {
  beforeEach(() => cy.visit("/"));
  it("Visits the app root url", () => {
    visitPage("popover/click-outside")
      .get("#app")
      .contains("h1", "outside");
  });
});
