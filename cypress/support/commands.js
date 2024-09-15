// ***********************************************
// This file shows how to create custom commands and overwrite
// existing commands in Cypress. For more examples and comprehensive
// guidance on custom commands, visit:
// https://on.cypress.io/custom-commands
// ***********************************************

import LoginPage from "./Pages/LoginPage"

const loginPage = new LoginPage()

// Event handler for uncaught exceptions to prevent test failures
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false
})

/**
 * Waits until the specified element is visible on the page.
 *
 * @param {string} selector - The CSS selector for the element to wait for.
 * @param {number} [timeout=10000] - The time in milliseconds to wait before timing out.
 */
Cypress.Commands.add("waitTillVisible", (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should("be.visible")
})

/**
 * Logs in a user by visiting the login page and submitting credentials.
 *
 * @param {string} userName - The username for login.
 * @param {string} password - The password for login.
 *
 * @example
 * cy.login('username', 'password')
 */
Cypress.Commands.add("login", (userName, password) => {
    cy.session([userName, password], () => {
        cy.visit("/")
        cy.title().should("eq", "OrangeHRM")
        loginPage.enterUserName(userName)
            .enterPassword(password)
            .clickSubmitButton()
    }, {
        cacheAcrossSpecs: true
    })
    cy.visit("/") // Ensure the user is on the homepage after login
})
