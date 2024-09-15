import EmployeeInfoPageObjects from "../Wiring/EmployeeInfoPageObjects"
import DashboardPage from "./DashboardPage"

const employeeInfoPageObjects = new EmployeeInfoPageObjects()

class EmployeeInfoPage {
    assertEmployeeNameVisibility(fullName) {
        cy.get(employeeInfoPageObjects.getEmployeeNameSelector()).should('contain', fullName)
        let dashboard = new DashboardPage()
        return dashboard
    }
}

export default EmployeeInfoPage