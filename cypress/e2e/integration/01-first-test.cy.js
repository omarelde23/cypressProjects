



it('Validate TechGlobal URL and title', () => {
    cy.visit('https://www.techglobal-training.com/')

    // validate url 

    cy.url().should('eq', 'https://www.techglobal-training.com/')
    cy.url().should('contain', 'techglobal')
    cy.url().should('not.contain', 'apple')


    // validate title
    cy.title().should('eq', 'TechGlobal Training | Home')
})