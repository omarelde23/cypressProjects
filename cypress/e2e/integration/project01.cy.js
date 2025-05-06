/// <reference types="cypress"/>

describe("Cypress Selectors", () => {
    beforeEach(() => {
      cy.visit("https://techglobal-training.com/frontend/form-elements");
    });

/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the heading is “Contact Us”
Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
Validate the email is “info@techglobalschool.com"
Validate the phone number is “(224) 580-2150”
*/

it('Validate Contact Us', () => {
    cy.get('[class="is-size-3"]').should('have.text', 'Contact Us')

    cy.get('[id="address"]').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')

    cy.get('[id="email"]').should('have.text', 'info@techglobalschool.com')

    cy.get('[id="phone-number"]').should('have.text', '(224) 580-2150')
})


/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Full name input box is displayed
Validate that the Full name input box is required
Validate that the label of the Full name input box is “Full name *”
Validate that the placeholder of the Full name input box is “Enter your full name”
*/


it('Validate Full Name Input Box', () => {
    cy.get('div .field').first().should('be.visible')

    cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'required')

    cy.get('[for="name"]').should('have.text', 'Full name *')

    cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'placeholder', 'Enter your full name')

})


/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the label is “Gender *”
Validate that the Gender is required
Validate the options are “Female”, “Male” and “Prefer not to disclose”
Validate the options are clickable and not selected
Click on the “Male” option and validate it is selected while the others are not selected
Click on the “Female” option and validate it is selected while the others are not selected
*/


it('Validate the Gender radio button', () => {
    cy.get('.control .label').should('have.text', 'Gender *')

    cy.get('input.mr-1').eq(0).should('have.attr', 'required')

    const options = [ 'Male', 'Female', 'Prefer not to disclose']
    cy.get('label[class^="radio"]').each((el, index) => {
    cy.wrap(el).should('have.text', options[index])
    })

    cy.get('input[class^="mr-1"').should('be.enabled').and('not.be.selected')

    cy.get('.control > .radio > .mr-1').first().check().should('be.checked')
    cy.get('.mr-1').eq(1).check().should('be.checked')

})



it("Tabs", () => {
    cy.get("#microsoft").should("have.attr", "target", "_blank");

    cy.get("#microsoft").invoke("removeAttr", "target").click();
  });



/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Address input box is displayed
Validate that the Address input box is not required
Validate that the label of the Address input box is “Address”
Validate that the placeholder of the Address input box is “Enter your address*”
*/

it('validate address', () => {
    cy.get('input[placeholder="Enter your address"]').should('be.visible')
    cy.get('label').contains('Address').should('not.have.attr', 'required')
    cy.get('label').contains('Address').should('be.visible')
    cy.get('input[placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter your address')
})



/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Email input box is displayed
Validate that the Email input box is required
Validate that the label of the Email input box is “Email *”
Validate that the placeholder of the Email input box is “Enter your email”
*/


it('Validate Email', () => {
    cy.get('input[placeholder="Enter your email"]').should('be.visible')
    cy.get('input[placeholder="Enter your email"]').should('have.attr', 'required')
    cy.get('label.label').eq(3).should('have.text', 'Email *')
    cy.get('input[placeholder="Enter your email"]').should('have.attr', 'placeholder', 'Enter your email')
})


/*
Validate that the Phone input box is displayed
Validate that the Phone input box is not required
Validate that the label of the Phone input box is “Phone”
Validate that the placeholder of the Address input box is “Enter your phone number”
*/

it('Validate Phone', () => {
    cy.get('input[placeholder="Enter your phone number"]').should('be.visible')
    cy.get('input[placeholder="Enter your phone number"]').should('not.have.attr', 'required')
    cy.get('label.label').eq(4).should('have.text', 'Phone')
    cy.get('input[placeholder="Enter your phone number"]').should('have.attr', 'placeholder', 'Enter your phone number')
})

/*
Validate that the Message text area is displayed
Validate that the Message text area is not required
Validate that the label of the Message text area is “Message”
Validate that the placeholder of the Message text area is “Type your message here…”
*/

it('Validate Message text area', () => {
    cy.get('textarea[placeholder="Type your message here..."]').should('be.visible')
    cy.get('textarea[placeholder="Type your message here..."]').should('not.have.attr', 'required')
    cy.get('label.label').eq(5).should('have.text', 'Message')
    cy.get('textarea[placeholder="Type your message here..."]').should('have.attr', 'placeholder', 'Type your message here...')
})


/*
Validate the label is “I give my consent to be contacted.”
Validate that the Consent checkbox is required
Validate that the Consent checkbox is clickable
Click on the “I give my consent to be contacted.” checkbox and validate it is selected
Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
*/

it('Validate the consent checkbox', () => {
    cy.get('label.checkbox').should('have.text', ' I give my consent to be contacted.')
    cy.get('input[type="checkbox"]').should('have.attr', 'required')
    cy.get('input[type="checkbox"]')
    .should('be.enabled')
    .check().should('be.checked')
    .uncheck().should('not.be.checked')

})


/*
Validate the “SUBMIT” button is displayed
Validate the “SUBMIT” button is clickable
Validate that the button text is “SUBMIT”
*/

it('Validate the Submit button', () => {
    cy.get('button[class="button is-link"]')
    .should('be.visible')
    .should('be.enabled')
    .should('have.text', 'SUBMIT')
   // .and().should('be.enabled')
   // .and().should('have.text', 'SUBMIT')
})


it('Validate the form submission', () => {
    cy.get('input[placeholder="Enter your full name"]').type('Omar')
    cy.get('input.mr-1').eq(0).check()
    cy.get('input[placeholder="Enter your address"]').type('1234 S chicken Ave')
    cy.get('input[placeholder="Enter your email"]').type('johndoe12@gmail.com')
    cy.get('input[placeholder="Enter your phone number"]').type('1231231234')
    cy.get('textarea[placeholder="Type your message here..."]').type('My name is Omar, I am doing the project')
    cy.get('input[type="checkbox"]').check()
    cy.get('button[class="button is-link"]').click()
    cy.get('.mt-5').should('be.visible').should('have.text', 'Thanks for submitting!')
})

})



