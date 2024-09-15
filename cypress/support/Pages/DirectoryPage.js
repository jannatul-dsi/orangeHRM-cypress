import DirectoryPageObjects from "../Wiring/DirectoryPageObjects"
import DashboardPage from "./DashboardPage"

const directoryPageObjects = new DirectoryPageObjects()

/**
 * Represents the Directory Page.
 *
 * @memberof Pages
 * @class
 */
class DirectoryPage {
    /**
     * Searches for an employee by their first name and triggers the search.
     *
     * @param {string} firstName - The first name of the employee to search for.
     * @returns {DirectoryPage} The current instance of `DirectoryPage` for method chaining.
     */
    searchEmployeeByName(firstName) {
        cy.get(directoryPageObjects.getEmployeeSearchInputSelector()).type(firstName)
        cy.get(directoryPageObjects.getSearchSuggestionSelector()).click()
        cy.get(directoryPageObjects.getSearchButtonSelector()).click()
        return this
    }

    /**
     * Asserts that the full name displayed matches the expected value.
     * 
     * The full name is normalized by removing extra spaces and trimming.
     *
     * @param {string} fullName - The expected full name to be displayed on the page.
     * @returns {DashboardPage} An instance of `DashboardPage` to interact with the dashboard page.
     */
    assertFullNameVisibility(fullName) {
        cy.get(directoryPageObjects.getFullNameSelector())
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\s+/g, ' ').trim();
                expect(normalizedText).to.eq(fullName);
            });

        let dashboard = new DashboardPage()
        return dashboard
    }
}

export default DirectoryPage
