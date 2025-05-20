import BasePage from "./BasePage";

class ButtonsPage extends BasePage {
    getOneWayRadioButton() {
        return cy.get('[class="radio ml-0"] .mr-1')
    }

    getRoundTripRadioButton() {
        return cy.get('[class="radio"] .mr-1')
    }

    getCabinClassLabel() {
        return cy.get('[class="label"]').contains('Cabin Class')
    }

    getCabinClassDropdown() {
        return cy.get('select[style="width: 100%;"]').first()
    }

    getFromLabel() {
        return cy.get('.field .label').contains('From')
    }

    getFromDropdown() {
        return cy.get('select[style="width: 100%;"]').eq(1)
    }

    getToLabel() {
        return cy.get('.field .label').contains('To')
    }

    getToDropdown() {
        return cy.get('select[style="width: 100%;"]').eq(2)
    }

    getDepartLabel() {
        return cy.get('.field .label').contains('Depart')
    }

    getDepartDatePicker() {
        return cy.get('[placeholder="MM/DD/YY"]').first()
    }

    getReturnLabel() {
        return cy.get('.field .label').contains('Return')
    }

    getReturnDatePicker() {
        return cy.get('[placeholder="MM/DD/YY"]').last()
    }

    getNumberOfPassengersLabel() {
        return cy.get('.field .label').contains('Number of passengers')
    }

    getNumberOfPassengersDropdown() {
        return cy.get('select[style="width: 100%;"]').eq(3)
    }

    getPassenger1Label() {
        return cy.get('.field .label').contains('Passenger 1')
    }

    getPassenger1Dropdown() {
        return cy.get('select[style="width: 100%;"]').eq(4)
    }

    getBookButton() {
        return cy.get('button[type="submit"]')
    }

    
}

export default ButtonsPage