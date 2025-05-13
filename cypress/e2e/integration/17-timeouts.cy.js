/// <reference types="cypress"/>

describe("Cypress Custom Commands", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/html-elements");
    });
  
    it("Explicit abd Inline Timeouts", () => {
      cy.get('#main_heading', {timeout: 6000 })

      cy.get('#hello_paragraph', {timeout: 5000}).click({timeout: 10 * 1000})

      cy.get('#checkbox-button-group input', {
        multiple: true, 
        timeout: 5000, 
        force: true,
        log: true
      })
    })



    it('Waits', () => {
        cy.visit(`${Cypress.env("SITE_URL")}/frontend/waits`)

        cy.get('#red').click()

        cy.get('#box', { timeout: 10000 }).should('be.visible')
    })
  })