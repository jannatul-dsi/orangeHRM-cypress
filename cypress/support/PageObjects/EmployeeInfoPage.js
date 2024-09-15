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
    selectGender() {
        randomMethods.scrollToElementContaining("Gender")
        cy.get(employeeInfoPageObjects.getGenderSelector()).then(() => {
            randomMethods.selectRadioByLabel()
        })
        return this
    }
    selectBloodGroup() {
        randomMethods.scrollToElementContaining("Blood Type")
        cy.get(employeeInfoPageObjects.getBloodGroupSelector()).parent('div').siblings("div").find("i").click()
        cy.get(employeeInfoPageObjects.getListSelector()).should('be.visible')
        cy.get(employeeInfoPageObjects.getOptionSelector()).contains("O+").click();
        return this
    }
    clickOnPersonalDetailsSaveButton() {
        cy.get(employeeInfoPageObjects.getPersonalDetailsSaveButtonSelector()).siblings("form").find("button[type='submit']").contains("Save").click()
        return this
    }
    clickOnCustomDetailsSaveButton() {
        cy.get(employeeInfoPageObjects.getCustomDetailsSaveButtonSelector()).siblings("form").find("button[type='submit']").contains("Save").click()
        return this
    }
    assertSuccessMessage() {
        cy.get(employeeInfoPageObjects.getSuccessMessageSelector()).should("have.text", "Success")
        let dashboard = new DashboardPage()
        return dashboard
    }
}

export default EmployeeInfoPage