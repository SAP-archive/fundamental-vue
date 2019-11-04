// Usage:
//
// in your.page.vue
// <button data-cy="my-button">OK</button>
//
// in: my.e2e.js (test file) you can get the button like this:
// cy.dataCy('my-button')
Cypress.Commands.add('dataCy', value => {
  return cy.get(`[data-cy=${value}]`)
})
