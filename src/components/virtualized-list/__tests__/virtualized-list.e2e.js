const visitPage = pagePath => {
  return cy.visit(`/pages/${pagePath}`)
}

describe('VirtualizedList', () => {
  beforeEach(() => {
    visitPage('virtualized-list/default')
  })

  it('works', () => {
    cy.get('[data-cy-loading-indicator]').should('not.exist')
    cy.get('[data-cy-list]').scrollTo('bottom')
    cy.get('[data-cy-loading-indicator]').should('exist')
  })
})
