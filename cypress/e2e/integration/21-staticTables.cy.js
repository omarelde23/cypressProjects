
import TablesPage from "../../pages/TablesPage";
describe("Static Tables", () => {

    const tablesPage = new TablesPage()

    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/tables");

      cy.fixture('example').then(function(data) {
        this.headers = data.headers
})})
    
  
    /**
     * TEST CASE 1
     * Verify the headers of the table
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Tables" card
     * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
     */

    it("Verify the headers of the table", { tags: "@table" }, function () {
        tablesPage.getStaticTableHeaders().each((el, index) => {
            cy.wrap(el).should('have.text', this.headers[index])
        })
      })
    })

 

  // cy.fixture('example').then((data) => {
  //  this.username = data.username
   //  this.password = data.password
