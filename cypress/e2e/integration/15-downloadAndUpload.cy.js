/// <reference types="cypress"/>
import path from 'path'

describe("File download & File Upload", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/file-download");
    });
    
    const fileName = 'SampleText.txt'
    const downloadPath = path.join('cypress/downloads', fileName)


    it('File Download', () => {
        cy.get('#file_download').click()
        cy.readFile('cypress/downloads/SampleText.txt')
    })


    it('File Upload', () => {
        cy.get('#file_upload').realClick().selectFile(downloadPath)
        cy.get('#file_submit').realClick()
        cy.get('.notification').should('have.text', `You uploaded ${fileName}`)
    })

    


})