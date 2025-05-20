import BasePage from "./BasePage"

class TablesPage extends BasePage{
    /* Methods */
    getStaticTableHeaders() {
        return cy.get('.header')
    }
}

export default TablesPage