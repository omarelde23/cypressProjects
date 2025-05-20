/// <reference types="cypress"/>


describe('Dropdown select', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/dropdowns')
    })

    it('Select Product and Color', () => {
        cy.get('#product_dropdown').select('Apple Watch Series 8')
        cy.get('#color_dropdown').select('Yellow')

        cy.get()

    })



    it('Select Product and Color and Delievery', () => {

    })


/*
select a ipad pro 11
green
pickup
click on submit and see the result
*/

    it('Validate the result of selections', () => {

    })
})