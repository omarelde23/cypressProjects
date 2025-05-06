/// <reference types="cypress"/>

describe('Cypress Advanced Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/actions')
    })


    it('Type and clear actions', () => {
        cy.get('#input_box')
        .should('exist')
        .and('be.visible')
        .and('be.enabled')
        .and('have.attr', 'placeholder', 'Enter your message...')
        .and('have.attr', 'value', '')
        .type('TechGlobal')
        .should('have.attr', 'value', 'TechGlobal')
        .clear()
        .should('have.attr', 'value', '')
        .and('be.empty')

        cy.get('#input_box').then((ele) => { // convert to jacquin

        })  // selector in cypress is a chainable
    })


    it('Right-Click and Double-Click', () => {
        cy.get('#right-click').rightclick()
        cy.get('#right_click_result')
        .should('be.visible')
        .and('have.text', 'You right-clicked on a button!')


        cy.get('#double-click').dblclick()
        cy.get('#double_click_result')
        .should('be.visible')
        .and('have.text', 'You double-clicked on a button!')
    })


    it('Drag and Drop', () => {
        cy.get('#drag_element').drag('#drop_element')
        cy.get('#drag_and_drop_result')
        .should('be.visible')
        .and('have.text', 'An element dropped here!')
    })


    it('Hover Over', () => {
        cy.visit('https://www.techglobal-training.com/')

        cy.get('#dropdown-testing').realHover('')
        cy.get('#backend-option').click()
        cy.url().should('include', 'backend')

        
        // cy.on() is used to listen if we get any "uncaught:eception" almost like telling it to ignore the error
        // return false 

        cy.on('uncaught:exception', () => {
            return false
        })

    })
})

