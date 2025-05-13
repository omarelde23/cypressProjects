/// <reference types="cypress"/>

describe("Practice", () => {
    beforeEach(() => {
      cy.visit("https://automationexercise.com/");
    });

/*
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
*/
    it('Register User', () => {
        cy.get('a[href="/login"]').click()
        cy.get('.signup-form h2').should('have.text', 'New User Signup!')
        cy.get('input[data-qa="signup-name"]').type('John Doe')
        cy.get('input[data-qa="signup-email"]').type('JJJohhhhnnnnnydoe@gmail.com')
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('.login-form .title').first().should('have.text', 'Enter Account Information')
        cy.get('#id_gender1').click()
        cy.get('#password').type('Johndoe1234')
        cy.get('#days').select('8')
        cy.get('#months').select('8')
        cy.get('#years').select('2016')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('#first_name').type('John')
        cy.get('#last_name').type('Doe')
        cy.get('#company').type('TechGlobal')
        cy.get('input[data-qa="address"]').type('1234 S johnny rd')
        cy.get('input[data-qa="address2"]').type('Room 124')
        cy.get('#country').select('United States')
        cy.get('input[data-qa="state"]').type('Illinois')
        cy.get('input[data-qa="city"]').type('Chicago')
        cy.get('input[data-qa="zipcode"]').type('60455')
        cy.get('input[data-qa="mobile_number"]').type('1231231234')
        cy.get('button[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible').and('have.text', 'Account Created!')
        cy.get('a[data-qa="continue-button"]').click()
        cy.get('[class="fa fa-user"]').parent().contains('Logged in as John Doe')
        cy.get('a[href="/delete_account"]').click()
        cy.get('.title').contains('Account Deleted!').should('be.visible')
        cy.get('a[data-qa="continue-button"]').click()

    })
})