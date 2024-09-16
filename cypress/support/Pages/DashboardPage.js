import DashboardPageObjects from "../Wiring/DashboardPageObjects"
import DirectoryPage from "./DirectoryPage"
import EmployeeInfoPage from "./EmployeeInfoPage"
import LoginPage from "./LoginPage"
import PIMPage from "./PIMPage"

const dashboardPageObjects = new DashboardPageObjects()

/**
 * Represents the Dashboard Page.
 *
 * @memberof Pages
 * @class
 */
class DashboardPage {
    /**
     * Asserts that the dashboard header is visible and has the correct text.
     *
     * @returns {DashboardPage} The current instance of `DashboardPage` for method chaining.
     */
    assertDashboardHeaderVisibility() {
        cy.waitTillVisible(dashboardPageObjects.getDashboardHeader())
        cy.get(dashboardPageObjects.getDashboardHeader()).should("have.text", "Dashboard")
        return this
    }

    /**
     * Navigates to the PIM (Personnel Information Management) page.
     *
     * @returns {PIMPage} An instance of the `PIMPage` class to interact with the PIM page.
     */
    navigateToPIM() {
        cy.get(dashboardPageObjects.getPIMSelector()).click()
        let pimPage = new PIMPage()
        return pimPage
    }

    /**
     * Navigates to the Directory page.
     *
     * @returns {DirectoryPage} An instance of the `DirectoryPage` class to interact with the Directory page.
     */
    navigateToDirectory() {
        cy.get(dashboardPageObjects.getDirectorySelector()).click()
        let directoryPage = new DirectoryPage()
        return directoryPage
    }

    /**
     * Navigates to the My Info page, which displays employee information.
     *
     * @returns {EmployeeInfoPage} An instance of the `EmployeeInfoPage` class to interact with the employee information page.
     */
    navigateToMyInfo() {
        cy.get(dashboardPageObjects.getMyInforSelector()).click()
        let employeeInfoPage = new EmployeeInfoPage()
        return employeeInfoPage
    }

    /**
     * Logs out of the application.
     *
     * @returns {DashboardPage} The current instance of `DashboardPage` for method chaining.
     */
    logout() {
        cy.get(dashboardPageObjects.getImageSelector()).click()
        cy.get(dashboardPageObjects.getLogoutSelector()).click()
        let loginPage = new LoginPage()
        return loginPage
    }

    /**
     * Asserts that the full name displayed on the dashboard matches the expected value.
     *
     * @param {string} fullName - The expected full name to be displayed on the dashboard.
     * @returns {DashboardPage} The current instance of `DashboardPage` for method chaining.
     */
    assertFullNameVisibility(fullName) {
        cy.get(dashboardPageObjects.getFullNameSelector()).should("have.text", fullName)
        return this
    }
}

export default DashboardPage
