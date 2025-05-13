/// <reference types="cypress"/>

describe("Project 2", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/login");
    });

    /*
Validate that the username input box is displayed
Validate that the username input box is not required
Validate that the label of the username input box is “Please enter your username”
Validate that the password input box is displayed
Validate that the password input box is not required
Validate that the label of the password input box is “Please enter your password”
Validate the “LOGIN” button is displayed
Validate the “LOGIN” button is clickable
Validate that the button text is “LOGIN”
Validate the “Forgot Password?” link is displayed
Validate that the “Forgot Password?” link is clickable
Validate that the link text is “Forgot Password?”
    */

    it('Validate the login form', () => {
        cy.get('#username').should('be.visible').and('not.have.attr', 'required')
        cy.get('label[for="username"]').should('have.text', 'Please enter your username')
        cy.get('#password').should('be.visible').and('not.have.attr', 'required')
        cy.get('label[for="password"]').should('have.text', 'Please enter your password')
        cy.get('#login_btn').should('be.visible').and('be.enabled').and('have.text', 'LOGIN')
        cy.get('.LoginForm_form__m12Jc a[href="/frontend/login"]').should('be.visible')
        cy.get('.LoginForm_form__m12Jc a[href="/frontend/login"]').should('have.attr', 'href')
        cy.get('.LoginForm_form__m12Jc a[href="/frontend/login"]').should('have.text', 'Forgot Password?')
    })


    /*
    Enter the username as “TechGlobal”
    Enter the password as “Test1234”
    Click on the “LOGIN” button
    Validate the success message is displayed as “You are logged in”
    Validate the logout button displayed with the text “LOGOUT”
    */

    it('Validate the valid login', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#success_lgn').should('have.text', 'You are logged in')
        cy.get('#logout').should('be.visible').and('have.text', 'LOGOUT')
    })



    /*
    Enter the username as “TechGlobal”
    Enter the password as “Test1234”
    Click on the “LOGIN” button
    Click on the “LOGOUT” button
    Validate that the login form is displayed
    */

    it('Validate the logout', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#logout').click()
        cy.get('.LoginForm_content__GphXn').should('be.visible')
    })


    /*
    Click on the “Forgot Password?” link
    Validate that the modal heading “Reset Password” is displayed
    Validate that the close button is displayed
    Validate that the email input box is displayed
    Validate that the label of the email input box is 
    “Enter your email address and we'll send you a link to reset your password.”

    Validate the “SUBMIT” button is displayed
    Validate the “SUBMIT” button is clickable
    Validate that the button text is “SUBMIT”
    */

    it('Validate the Forogt Password', () => {
        cy.get('.LoginForm_form__m12Jc [href="/frontend/login"]').click()
        cy.get('#modal_title').should('be.visible')
        cy.get('button[aria-label="close"]').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('label[for="email"]')
        .should("have.text", "Enter your email address and we'll send you a link to reset your password. ")
        cy.get('#submit').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')
    })


    /*
    Click on the “Forgot Password?” link
    Validate that the “Reset Password” modal is displayed
    Click on the close button
    Validate that the “Reset Password” modal is closed
    */

    it('Validate the reset password modal close button', () => {
        cy.get('.LoginForm_form__m12Jc [href="/frontend/login"]').click()
        cy.get('[class^="modal-card"]').should('be.visible')
        cy.get('button[aria-label="close"]').click()
        cy.get('[class^="modal-card"]').should('not.exist')

    })



    /*
    Click on the “Forgot Password?” link
    Enter an email
    Click on the “SUBMIT” button
Validate the form message “A link to reset your password has been sent to your email address.” 
is displayed under the “SUBMIT” button
    */

    it('Validate the reset password form submission', () => {
        cy.get('.LoginForm_form__m12Jc [href="/frontend/login"]').click()
        cy.get('#email').type('Johndoe@gmail.com')
        cy.get('#submit').click()
        cy.get('#confirmation_message').should('have.text', 'A link to reset your password has been sent to your email address.')
    })




    /*
    Leave username empty
    Leave password empty
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
    */

    it('Validate the invalid login with empty credentials', () => {
        cy.get('#username').should('be.empty')
        cy.get('#password').should('be.empty')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
    })


    /*
    Enter the username as “John”
    Enter the password as “Test1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
    */


    it('Validate the invalid login with wrong username', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
    })



    /*
    Enter the username as “TechGlobal”
    Enter the password as “1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Password entered!” above the form
    */

    it('Validate the invalid login with wrong password', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Password entered!')
    })



    /*
    Enter the username as “John”
    Enter the password as “1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
    */

    it('Validate the invalid login with the wrong username and password', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
    })
    
})