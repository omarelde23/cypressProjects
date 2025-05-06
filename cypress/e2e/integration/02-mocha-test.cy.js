

describe('TechGlobal  Training Home Page Validation', () => {
    before(() => {
        cy.log('Starting TechGlobal Training Home Page Validation')
    })
    after(() => {
        cy.log('Ending TechGlobal Training Home Page Validation')
    })
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/')
    })
    afterEach(() => {
        cy.log('test is completed!')
    })
    it('Validate Welcome Section', () => {
    })
    it('Validate About Us section', () => {
    })
    it('Validate Program Section', () => {
    })
})