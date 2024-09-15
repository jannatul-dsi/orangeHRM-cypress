import EmployeeInfoPageObjects from "../Wiring/EmployeeInfoPageObjects"
import DashboardPage from "./DashboardPage"
import RandomMethods from "./RandomMethods"

const employeeInfoPageObjects = new EmployeeInfoPageObjects()
const randomMethods = new RandomMethods()

class EmployeeInfoPage {
    assertEmployeeNameVisibility(fullName) {
        cy.get(employeeInfoPageObjects.getEmployeeNameSelector()).should('contain', fullName)
        return this
    }
    selectNationality() {
        randomMethods.scrollToElementContaining("Nationality")
        cy.get(employeeInfoPageObjects.getNationalitySelector()).parent('div').siblings("div").find("i").click()
        cy.get(employeeInfoPageObjects.getListSelector()).should('be.visible')
        cy.get(employeeInfoPageObjects.getOptionSelector()).contains("Bangladeshi").click();
        return this
    }
    clickOnSaveButton() {
        cy.get(employeeInfoPageObjects.getSaveButtonSelector()).siblings("form").find("button[type='submit']").contains("Save").click()
        return this
    }
    assertSuccessMessage() {
        cy.get(employeeInfoPageObjects.getSuccessMessageSelector()).should("have.text", "Successfully Saved")
        let dashboard = new DashboardPage()
        return dashboard
    }
}

export default EmployeeInfoPage