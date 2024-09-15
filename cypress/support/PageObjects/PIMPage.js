import PIMPageObjects from "../Wiring/PIMPageObjects"
import CreateEmployeePage from "./CreateEmployeePage"
import DashboardPage from "./DashboardPage"

const pimPageObjects = new PIMPageObjects()
class PIMPage {
    assertPIMHeaderVisibility() {
        cy.waitTillVisible(pimPageObjects.getPIMHeader())
        cy.get(pimPageObjects.getPIMHeader()).should("have.text", "PIM")
        return this
    }
    clickOnAddEmployeeButton() {
        cy.get(pimPageObjects.getAddEmployeeButton()).click()
        let createEmployeePage = new CreateEmployeePage()
        return createEmployeePage
    }
    searchEmployeeByID(employeeCredentialsFile) {
        cy.fixture(employeeCredentialsFile).then((employee) => {
            cy.get(pimPageObjects.getSearchemployeeIdInput()).parent().siblings('div').find('input').type(employee.employeeId)
            cy.get(pimPageObjects.getSearchButtonSelector()).click()
        })
        return this
    }
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