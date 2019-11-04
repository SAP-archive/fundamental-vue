const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`)
}

describe('Popover', () => {
  beforeEach(() => visitPage('popover/default'))
  it('becomes visible when clicked on button and is dismissed when clicked outside of it', () => {
    cy.get('button').click()
    cy.get('.fd-popover__popper').should('be.visible')
    cy.get('body').click()
    cy.get('.fd-popover__popper').should('not.be.visible')
  })
})
