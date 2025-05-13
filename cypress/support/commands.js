// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('selectDropdown', (locater, option) => {
    cy.get(locater).select(option)
})

Cypress.Commands.add('login', (email, name) => {
    cy.get('input[placeholder="Your Email"]').type(email)
    cy.get('input[placeholder="First Name"]').clear().type(name)
    cy.get('.mb-3 + button').click()
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//


Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
    const text = subject.text()
    cy.log(text)
})
/*
Create a child custom command that will validate the attribute and the value of previos subject
*/

Cypress.Commands.add('attr', { prevSubject: true }, (subject, attr, value) => {
    if(value === null) {
        cy.wrap(subject).should('have.attr', attr)
    }
    else cy.wrap(subject).should('have.attr', attr).and('have.value', value)
})


Cypress.Commands.add('haveText', { prevSubject: 'element' }, (subject, expectedText) => {
    cy.wrap(subject).should('have.text', expectedText)
})
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//




//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })