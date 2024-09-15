import PIMPageObjects from "../Wiring/PIMPageObjects"
import CreateEmployeePage from "./CreateEmployeePage"
import DashboardPage from "./DashboardPage"

const pimPageObjects = new PIMPageObjects()

/**
 * Represents the PIM Page.
 *
 * @memberof Pages
 * @class
 */
class PIMPage {
    /**
     * Asserts that the PIM header is visible and contains the correct text.
     *
     * @returns {PIMPage} The current instance of `PIMPage` for method chaining.
     */
    assertPIMHeaderVisibility() {
        cy.waitTillVisible(pimPageObjects.getPIMHeader())
        cy.get(pimPageObjects.getPIMHeader()).should("have.text", "PIM")
        return this
    }

    /**
     * Clicks the "Add Employee" button to navigate to the employee creation page.
     *
     * @returns {CreateEmployeePage} An instance of `CreateEmployeePage` to interact with the employee creation page.
     */
    clickOnAddEmployeeButton() {
        cy.get(pimPageObjects.getAddEmployeeButton()).click()
        let createEmployeePage = new CreateEmployeePage()
        return createEmployeePage
    }

    /**
     * Searches for an employee by their ID using a fixture file.
     * 
     * The method reads employee credentials from a fixture file and performs the search.
     *
     * @param {string} employeeCredentialsFile - The name of the fixture file containing employee credentials.
     * @returns {PIMPage} The current instance of `PIMPage` for method chaining.
     */
    searchEmployeeByID(employeeCredentialsFile) {
        cy.fixture(employeeCredentialsFile).then((employee) => {
            cy.get(pimPageObjects.getSearchemployeeIdInput()).parent().siblings('div').find('input').type(employee.employeeId)
            cy.get(pimPageObjects.getSearchButtonSelector()).click()
        })
        return this
    }

    /**
     * Asserts that the first name of the employee is visible and matches the expected value.
     * 
     * The first name is normalized by removing extra spaces and trimming.
     *
     * @param {string} firstName - The expected first name to be displayed.
     * @returns {DashboardPage} An instance of `DashboardPage` to interact with the dashboard page.
     */
    assertFirstNameVisibility(firstName) {
        cy.get(pimPageObjects.getFirstNameSelector()).contains(firstName).invoke('text')
            .then((text) => {
                const expectedText = text.replace(/\s+/g, ' ').trim();
                expect(expectedText).to.eq(firstName);
            })
        let dashboard = new DashboardPage()
        return dashboard
    }
}

export default PIMPage
