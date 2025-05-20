/// <reference types="cypress"/>

describe("Cypress Selectors", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/");
    });

    it('Practice Web Elements using - get and contains', () => {
        cy.get('.CardGrids_CardGrids__qDdyI').as('allCards')

        cy.get('@allCards')


        // handling multiple elements

        // first element 
        cy.get('.card').first()


         // last element 
         cy.get('.card').last()


         // target specific index of an element
         cy.get('.card').eq(8)


         // Locates the web element by its VISUAL text on the GUI
         cy.contains('HTML Elements')


        cy.contains('Elements')

        // This one tries to find elements with "HTML Elements" visible text inside the web element
        // using .card class name
        cy.contains('.card', 'HTML Elements')

// this will do the same thing as above locater in more explicit way 
// It will look for card with "HTML Elements" visible text only inside the class name

        cy.get('@allCards').contains('HTML Elements') 
    })

    it('Practice Web Elements using - find()', () => {
        // next() locates the next immediate sibling of a web element
        // nextAll() locates all the immediate siblings of a web element
        // prev() locates the previous sibling of a web element
        // prevAll() locates all the previous siblings of a web element

        cy.get('#testing_paragraph').parent()
        cy.get('#testing_paragraph').parents()
        cy.get('#testing_paragraph').parentsUntil()
        


        cy.get('#apple_check')
        .parents('#checkbox-button-group')
        .next()
        .find('div')
        .children()
        .find('input')
        .parent()
        .parent()
        .parent()
        .prev()

        
    })
})