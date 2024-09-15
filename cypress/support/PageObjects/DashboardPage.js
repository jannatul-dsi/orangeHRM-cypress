import DashboardPageObjects from "../Wiring/DashboardPageObjects"
import DirectoryPage from "./DirectoryPage"
import EmployeeInfoPage from "./EmployeeInfoPage"
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
    navigateToMyInfo() {
        cy.get(dashboardPageObjects.getMyInforSelector()).click()
        let employeeInfoPage = new EmployeeInfoPage()
        return employeeInfoPage

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
    assertFullNameVisibility(fullName) {
        cy.get(dashboardPageObjects.getFullNameSelector()).should("have.text", fullName)
        return this
    }

}

export default DashboardPage