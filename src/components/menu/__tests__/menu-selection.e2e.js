const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`)
}

describe('combobox', () => {
  beforeEach(() => {
    visitPage('menu/selection')
    cy.get('[data-highlighted-uid]').as('highlighted')
    cy.get('[data-selected-uid]').as('selected')
    cy.get('[data-cy-item-a-0]').as('item-a0')
    cy.get('[data-cy-item-a-1]').as('item-a1')
    cy.get('[data-cy-item-a-2]').as('item-a2')
    cy.get('[data-cy-highlight-next]').as('highlight-next')
    cy.get('[data-cy-highlight-previous]').as('highlight-previous')
  })

  describe('menu', () => {
    it('higlights when selected', () => {
      cy.get('@highlighted').should('have.text', '')
      cy.get('@selected').should('have.text', '')
      cy.get('@item-a1').click()

      cy.get('@selected').should('have.text', 'a-id-1')
      cy.get('@highlighted').should('have.text', 'a-id-1')

      cy.get('@item-a1')
        .find('a')
        .should('have.class', 'is-selected')
    })

    it('can be highlighted from the outside', () => {
      cy.get('[data-cy-uid-to-highlight]').type('a-id-1')
      cy.get('[data-cy-perform-highlight]').click()
      cy.get('@highlighted').should('have.text', 'a-id-1')
    })

    it('higlights the next/prev item but not beyond the last item', () => {
      cy.get('@highlighted').should('have.text', '')
      cy.get('@selected').should('have.text', '')

      cy.get('@highlight-next').click()
      cy.get('@highlighted').should('have.text', 'a-id-0')

      cy.get('@highlight-next').click()
      cy.get('@highlighted').should('have.text', 'a-id-1')

      cy.get('@highlight-next').click()
      cy.get('@highlighted').should('have.text', 'a-id-2')

      // highlight ends here
      cy.get('@highlight-next').click()
      cy.get('@highlighted').should('have.text', 'a-id-2')

      // Let's go back
      cy.get('@highlight-previous').click()
      cy.get('@highlighted').should('have.text', 'a-id-1')

      cy.get('@highlight-previous').click()
      cy.get('@highlighted').should('have.text', 'a-id-0')

      // highlight ends here
      cy.get('@highlight-previous').click()
      cy.get('@highlighted').should('have.text', 'a-id-0')
    })
  })
})
