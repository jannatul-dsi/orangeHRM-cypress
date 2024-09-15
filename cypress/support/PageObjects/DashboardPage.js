import DashboardPageObjects from "../Wiring/DashboardPageObjects"
import DirectoryPage from "./DirectoryPage"
import PIMPage from "./PIMPage"

const dashboardPageObjects = new DashboardPageObjects()
class DashboardPage {
    assertDashboardHeaderVisibility() {
        cy.waitTillVisible(dashboardPageObjects.getDashboardHeader())
        cy.get(dashboardPageObjects.getDashboardHeader()).should("have.text", "Dashboard")
        return this
    }
    navigateToPIM() {
        cy.get(dashboardPageObjects.getPIMSelector()).click()
        let pimPage = new PIMPage()
        return pimPage
    }
    navigateToDirectory() {
        cy.get(dashboardPageObjects.getDirectorySelector()).click()
        let directoryPage = new DirectoryPage()
        return directoryPage
    }
    logout() {
        cy.get(dashboardPageObjects.getImageSelector()).click()
        cy.get(dashboardPageObjects.getLogoutSelector()).click()
        return this
    }
    assertLoginPageVisibility() {
        cy.title().should("eq", "OrangeHRM")
        return this
    }

}

export default DashboardPage