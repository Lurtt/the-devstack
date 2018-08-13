describe('Simple test', () => {
  it('should work', () => {
    cy.visit('/')

    cy.get('h2').should('have.length', 1)
  })
})
