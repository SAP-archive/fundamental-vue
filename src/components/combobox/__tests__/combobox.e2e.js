const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`)
}

describe('combobox', () => {
  beforeEach(() => visitPage('combobox/default'))
  describe('default combobox', () => {
    it('changes value when selecting via the input element', () => {
      cy.get('input').click()
      cy.get('.fd-popover__popper').should('be.visible')
      cy.dataCy('item-1').click()
      cy.get('input').should('have.value', 'Apple-v')
    })

    // This was actually a bug
    it('click on button dismisses the menu even when focused', () => {
      cy.get('input')
        .first()
        .focus()
      cy.get('button')
        .first()
        .trigger('mousedown')
      cy.get('button')
        .first()
        .trigger('mouseup')
      cy.get('.fd-popover__popper').should('not.be.visible')
    })
  })
})
