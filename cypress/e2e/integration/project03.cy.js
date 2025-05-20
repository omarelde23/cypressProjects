/// <reference types="cypress"/>

import ButtonsPage from "../../pages/ButtonsPage";

describe("Project 3", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/booking");
    });
    const buttonPage = new ButtonsPage()

    it('Validate the default Book your trip form', () => {
      /* 
Validate that the “One way” radio button is displayed enabled and selected by default
Validate that the “Round trip” radio button is displayed enabled and not selected by default
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed and disabled
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
      */

      buttonPage.getOneWayRadioButton().should('be.visible')
      .and('be.enabled').and('be.checked')

      buttonPage.getRoundTripRadioButton().should('be.visible')
      .and('be.enabled').and('not.be.checked')

      buttonPage.getCabinClassLabel().should('be.visible')
      buttonPage.getCabinClassDropdown().should('be.visible')
      buttonPage.getFromLabel().should('be.visible')
      buttonPage.getFromDropdown().should('be.visible')
      buttonPage.getToLabel().should('be.visible')
      buttonPage.getToDropdown().should('be.visible')
      buttonPage.getDepartLabel().should('be.visible')
      buttonPage.getDepartDatePicker().should('be.visible')
      buttonPage.getReturnLabel().should('be.visible')
      buttonPage.getReturnDatePicker().should('be.visible')
      buttonPage.getNumberOfPassengersLabel().should('be.visible')
      buttonPage.getNumberOfPassengersDropdown().should('be.visible')
      .and('have.text', '1')

      buttonPage.getPassenger1Label().should('be.visible')
      buttonPage.getPassenger1Dropdown().should('be.visible')
      .and('have.text', 'Adult (16-64)')


      buttonPage.getBookButton().should('be.visible')
      .and('be.enabled')
    })


    it('Validate the Book your trip form when Round trip is selected', () => {

      /*
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
      */

      buttonPage.getRoundTripRadioButton().click().should('be.checked')
      buttonPage.getOneWayRadioButton().should('not.be.checked')
      buttonPage.getCabinClassLabel().should('be.visible')
      buttonPage.getCabinClassDropdown().should('be.visible')
      buttonPage.getFromLabel().should('be.visible')
      buttonPage.getFromDropdown().should('be.visible')
      buttonPage.getToLabel().should('be.visible')
      buttonPage.getToDropdown().should('be.visible')
      buttonPage.getDepartLabel().should('be.visible')
      buttonPage.getDepartDatePicker().should('be.visible')
      buttonPage.getReturnLabel().should('be.visible')
      buttonPage.getReturnDatePicker().should('be.visible')
      buttonPage.getNumberOfPassengersLabel().should('be.visible')
      buttonPage.getNumberOfPassengersDropdown().should('be.visible')
      buttonPage.getPassenger1Label().should('be.visible')
      buttonPage.getPassenger1Dropdown().should('be.visible')

      buttonPage.getBookButton().should('be.visible')
      .and('be.enabled')

    })



    it('Validate the booking for 1 passenger and one way', () => {

      /*
Select the “One way” radio button
Select “Business” for the “Cabin Class” dropdown
Select “Illinois” for the “From” dropdown
Select “Florida” for the “To” dropdown
Select the next week for the ”Depart”
Select “1” for the “Number of passengers” dropdown
Select “Senior (65+)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
IL to FL
{dynamic date}
Number of passengers: 1
Passenger 1: Senior (65+)
Cabin Class: Business
      */

      buttonPage.getOneWayRadioButton().check()
      buttonPage.getCabinClassDropdown().realClick().select('Business')
      buttonPage.getFromDropdown().realClick().select('Illinois')
      buttonPage.getToDropdown().realClick().select('Florida')
      const baseDate = new Date()
        const departingDate = dayjs(baseDate).add(7, "day").format("MM/DD/YYYY")
      buttonPagePage.getDepartDatePicker().clear().type(departingDate)

      buttonPage.getNumberOfPassengersDropdown().realClick().select('1')
      buttonPage.getPassenger1Dropdown().realClick().select('Senior (65+)')
      buttonPage.getBookButton().click()

      cy.get(".ml-3").should('be.visible')

    })



    it('Validate the booking for 1 passenger and round trip', () => {
      buttonPage.getRoundTripRadioButton().realClick()

      buttonPage.getCabinDropdown().realClick().select("First")
      buttonPage.getFromDropdown().realClick().select("California")
      buttonPage.getDestinationDropdown().realClick().select("Illinois")
        const baseDate = new Date()
        const departingDate = dayjs(baseDate).add(7, "day").format("MM/DD/YYYY")
        const returningDate = dayjs(baseDate).add(1, "month").format("MM/DD/YYYY")
        buttonPage.getDepartDatePicker().clear().type(departingDate)
        buttonPage.getReturnDatePicker().clear().type(returningDate)
        buttonPage.getNumberOfPassengersDropdown().realClick().select("1")
        buttonPage.getPassengerDropdown().realClick().select("Adult (16-64)")
        buttonPage.getBookButton().click()
        cy.get(".ml-3").should('be.visible')
    })


    it('Validate booking for 2 passengers and one way', () => {
      buttonPage.getOneWayTrip().click()
      buttonPage.getCabinDropdown().realClick().select("Premium Economy")
      buttonPage.getFromDropdown().realClick().select("New York")
      buttonPage.getDestinationDropdown().realClick().select("Texas")
        const baseDate = new Date()
        const departingDate = dayjs(baseDate).add(1, "day").format("MM/DD/YYYY")
        buttonPage.getDepartDatePicker().clear().type(departingDate)
        buttonPage.getNumberOfPassengersDropdown().realClick().select("2")
        buttonPage.getPassengerDropdown().realClick().select("Adult (16-64)")
        cy.get(".select > select").eq(5).realClick().select("Child (2-11)")
        buttonPage.getBookButton().click()
        cy.get(".ml-3").should('be.visible')
    })

    
    
})