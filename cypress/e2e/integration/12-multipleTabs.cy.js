describe('Handling iFrames', () => {
   // beforeEach(() => {
     //   cy.visit('https://www.techglobal-training.com/frontend')
     //   cy.contains('.card', 'IFrames').click()
  //   })

    it('iFrames', () => {
        cy.get('#form_frame')
        .its('0.contentDocument.body')
        .find('#first_name')
        .type('Omar')
    })
/*
    it("Tabs", () => {
        cy.get("#microsoft").should("have.attr", "target", "_blank");
    
        cy.get("#microsoft").invoke("removeAttr", "target").click();
      });
*/


/*
* Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link
   * Validate that the child window title is "Apple"
   * Navigate back to main page
   * Validate title contains "techglobal"
*/



it('Test Case', () => {
    cy.visit('https://www.techglobal-training.com/frontend/multiple-windows')


    cy.get('#apple').invoke('removeAttr', 'target').click()
    cy.title().should('contain', 'Apple')
  
    cy.go(-1)
  
    cy.title().then((title) => {
      cy.wrap(title.toLowerCase()).should('contain', 'techglobal')
    })
  })    

})
