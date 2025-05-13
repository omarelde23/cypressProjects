/// <reference types="cypress"/>

describe("Handling Alerts", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/html-elements");
    });


    it('Parent Command', () => {
        cy.selectDropdown('#company_dropdown1', 'Apple')
        cy.login('randomemail@gmail.com', 'JOHNNYYY')

    })


    it('Child Commands', () => {
        cy.get('#main_heading').logText()
        cy.get('#main_heading').haveText('HTML Elements')
        
    })
    
})