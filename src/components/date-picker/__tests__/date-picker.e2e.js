const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`)
}

describe('date picker', () => {
  describe('default date picker', () => {
    it('works', () => {
      visitPage('date-picker/default')
      cy.get('.fd-calendar').should('not.be.visible')
      cy.get('.fd-input-group__addon > button').click()
      cy.get('.fd-calendar').should('be.visible')
      cy.get('.fd-calendar__action button')
        .eq(1)
        .click()

      cy.get('.fd-calendar__item--current').click()
      cy.get('.fd-calendar').should('be.visible')
      cy.get('.fd-calendar__dates').should('be.visible')
      // cy.get('.fd-calendar__item.fd-calendar__item--current').should('be.visible')
      cy.wait(1000)
      cy.get('.fd-calendar__dates').should('be.visible')
      // cy.get('input').click()
      // cy.get('.fd-popover__popper').should('be.visible')
      // cy.dataCy('item-1').click()
      // cy.get('input').should('have.value', 'Apple-v')
    })
  })
})
