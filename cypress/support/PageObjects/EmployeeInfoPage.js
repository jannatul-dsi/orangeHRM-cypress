import EmployeeInfoPageObjects from "../Wiring/EmployeeInfoPageObjects"
import DirectoryPage from "./DirectoryPage"

const employeeInfoPageObjects = new EmployeeInfoPageObjects()

class EmployeeInfoPage {
    assertEmployeeNameVisibility(fullName) {
        cy.get(employeeInfoPageObjects.getEmployeeNameSelector()).should('contain', fullName)
        return this
    }
    navigateToDirectory() {
        cy.get(employeeInfoPageObjects.getDirectorySelector()).click()
        let directoryPage = new DirectoryPage()
        return directoryPage
    }
}

export default EmployeeInfoPage