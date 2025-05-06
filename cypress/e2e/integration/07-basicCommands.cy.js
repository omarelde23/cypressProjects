/// <reference types="cypress"/>

describe("Cypress Selectors", () => {
    beforeEach(() => {
      cy.visit('https://www.techglobal-training.com/frontend/html-elements');
    });


    /**
   * Visit the techglobal frontend page
   * Click and navigate to Html Elements page
   * Click on the Register button on the Html Elements Page
   * Validate "You clicked on "Register" text is visible
   * And click on the "Sign in" button
   * Validate "You clicked on "Sign in"" text is visible
   */
  it("Click Action - click()", () => {
    cy.get('#register_button').click()
    cy.get('.mt-1').should('have.text', 'You clicked on “Register”')

    cy.get('#signin_button').click()
    cy.get('.mt-1').should('have.text', 'You clicked on “Sign in”')

  });


  it('Checkbox & Radio Buttons - check()', () => {

    cy.get('#checkbox_1')
    .check()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked')

  })


  it('Checkbox radio buttons 2', () => {
    cy.get('#checkbox_3')
    .check()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked')
  })

  
  it('Checkbox radio buttons 3', () => {
    cy.get('#radio_1_option_1')
    .check()
    .should('be.checked')

    cy.get('#radio_1_option_2')
    .should('not.be.checked')
    .check()
    .should('be.checked')

    cy.get('#radio_1_option_1')
    .should('not.be.checked')

  })


  it('Checkbox radio buttons 4', () => {
    cy.get('input[id^="radio_1"]')
    .should('have.length', 3)
    .each((ele) => {
        cy.wrap(ele).check().should('be.checked')
    })

  })

});


