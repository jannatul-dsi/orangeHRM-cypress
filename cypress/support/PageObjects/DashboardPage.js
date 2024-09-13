import DashboardPageObjects from "../Wiring/DashboardPageObjects"
import PIMPage from "./PIMPage"

const dashboardPageObjects = new DashboardPageObjects()
class DashboardPage {
    assertDashboardHeaderVisibility(){
        cy.waitTillVisible(dashboardPageObjects.getDashboardHeader())
        cy.get(dashboardPageObjects.getDashboardHeader()).should("have.text", "Dashboard")
        return this
    }
    navigateToPIM() {
        cy.get(dashboardPageObjects.getPIMSelector()).click()
        let pimPage = new PIMPage()
        return pimPage
    }
    
}

export default DashboardPage