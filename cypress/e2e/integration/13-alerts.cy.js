/// <reference types="cypress"/>

describe("Handling Alerts", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/alerts");
    });
  
    it("Handling the Warning Alert", () => {
      cy.on("window:alert", (str) => {
        console.log(`My warning alert text content is: ${str}`);
        expect(str).to.eq("You are on TechGlobal Training application.");
      });
  
      cy.get("#warning_alert").click();
      // cy.get('#warning_alert').click()
      // cy.get('#warning_alert').click()
      // cy.get('#warning_alert').click()
      // cy.get('#warning_alert').click()
      // cy.get('#warning_alert').click()
    });
  
    /**
     * CONFIRMATION ALERT
     * 1. Go to https://techglobal-training.com/frontend/
     * 2. Click on the "Alerts" card
     * 3. Click on the "Confirmation alert" button
     * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
     * 5. Click on the "Cancel" button on the alert
     * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
     */
  
    it("Handling the Confirmation Alert", () => {
      cy.get('#confirmation_alert').click()
      cy.on('window:confirm', (str) => {
        expect(str).to.eq('Would you like to stay on TechGlobal Training application?')
        return false
      })

      cy.get('#action').should('have.text', 'You rejected the alert by clicking Cancel.')
    });


    it('Hadnling Prompt Alerts', () => {
        // clicks cancel for the prompt error

      //  cy.window().then((win) => {
       //     cy.stub(win, 'prompt').returns(null)
      //  })

/*
        cy.window().then((win) => {
            cy.stub(win, 'prompt')
            return false
        })
*/

   // cy.window().then((win) => {
     //   cy.stub(win, 'prompt').returns('OMARRR')
  //  })

  // validaye the alert message and click cancel

        cy.get('#prompt_alert').click()

        cy.window().then((win) => {
            cy.stub(win, 'prompt').callsFake((message) => {
                expect(message).to.eq("What would you like to say to TechGlobal?")
                return 'My message'
            })
        })
        cy.get('#prompt_alert').click()


    })

  });