import PIMPageObjects from "../Wiring/PIMPageObjects"
import CreateEmployeePage from "./CreateEmployeePage"

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
}

export default PIMPage