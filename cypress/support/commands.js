// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import LoginPage from "./PageObjects/LoginPage"

const loginPage = new LoginPage()


// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("waitTillVisible", (selector, timeout = 20000) => {
    cy.get(selector, { timeout }).should("be.visible")
})
Cypress.Commands.add("login", (userName, password) => {
    cy.session([userName, password], () => {
        cy.visit("/")
        loginPage.enterUserName(userName)
            .enterPassword(password)
            .clickSubmitButton()
    }, {
        cacheAcrossSpecs: true
    })
    cy.visit("/")
})