/// <reference types="cypress"/>

describe('Cypress Assertion', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/')
    })

    it('Default Assertions - 1', () => {
        cy.get('img[alt="Tech Global Logo"]')
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'alt', 'Tech Global Logo')
    })

    it('Default Assertions - 2', () => {
        cy.get('button')
        .contains('Mock Interviews')
       // .should('be.enabled')
        .click()
    })


    it('Explicit Assertions with then()', () => {
        cy.get('#dropdown-testing').then(el => { // then() is used to convert Cypress selector into JQuery
            const text = el.text()  // JQuery Method

            cy.log('Element is', el.css('color'))

            cy.log(text)
            
            // Explicit assertions
            expect(el).to.be.visible
            expect(text).eq('Testing')

            // cy.wrap() is used to convert back into Cypress
            cy.wrap(el).should('be.visible').and('have.text', 'Testing')
        })
    })

    it('Explicit Assertions with invoke()', () => {
        cy.get('#dropdown-testing').invoke('text').then((txt) => {
            cy.log(txt)
        })
    })

    it('Explicit Assertions with each()', () => {
        /*
        Hover over excersises nav item
        validate below options are visible, clickable, and make sure their text is correct
            Java Excersises
            JS Excersises
        */
        const expectedOptions = [ 'Java Exercises', 'JS Exercises']
        cy.get('#dropdown-exercises').realHover()
        cy.get('a[id^="j"]').should('have.length', 2).each((el, index) => {
            expect(el).to.be.visible
            expect(el.text()).eq(expectedOptions[index])
        })

    })

    it('Explicit Assertions with each() 2', () => {
        /*
        Validate the 5 social media icons are visible in the footer
        Validate all the links has 'techglobal' in href attribute
        validate all the links has target attribute value is '_blank'
        */

        
    })
})