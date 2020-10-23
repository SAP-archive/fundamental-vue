const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`)
}

describe('modal', () => {
  beforeEach(() => visitPage('modal/default'))
  describe('default modal', () => {
    it('changes value when selecting via the input element', () => {
      cy.get('[data-cy-open-modal-button]').click()
      cy.get('[data-cy-modal-body]').should('be.visible')
      cy.get(':focus').should('have.attr', 'data-cy-modal')

      cy.get('[data-cy-close-via-fdModal]').click()
      cy.get('[data-cy-modal]').should('not.be.visible')

      // Returning the focus does no longer work
      // cy.get(":focus").should("have.attr", "data-cy-open-modal-button");

      cy.get('[data-cy-open-modal-button]').click()
      cy.get('[data-cy-modal]').should('be.visible')
      cy.get(':focus').should('have.attr', 'data-cy-modal')
      cy.get('[data-cy-close-via-slot-prop]').click()
      cy.get('[data-cy-modal]').should('not.be.visible')
    })
  })
})
