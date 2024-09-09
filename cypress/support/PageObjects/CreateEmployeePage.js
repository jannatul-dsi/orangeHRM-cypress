import CreateEmployeePageObjects from "../Wiring/CreateEmployeePageObjects"
import RandomMethods from "./RandomMethods"

const createEmployeeObjects = new CreateEmployeePageObjects()
const randomMethods = new RandomMethods()

class CreateEmployeePage {
    enterFirstName(firstName) {
        cy.get(createEmployeeObjects.getFirstNameSelector()).type(firstName)
        return this
    }

    enterLastName(lastName) {
        cy.get(createEmployeeObjects.getLastNameSelector()).type(lastName)
        return this
    }

    clickOnToggleCheckbox() {
        cy.get(createEmployeeObjects.getToggleSelector()).click({ force: true });
        return this
    }

    enterUserName(userName) {
        cy.get(createEmployeeObjects.getUserName()).parent().siblings('div').find('input').type(userName)
        return this
    }

    enterPassword(password) {
        cy.get(createEmployeeObjects.getPassword()).parent().siblings('div').find('input').type(password)
        return this
    }
    enterConfirmPassword(password) {
        cy.get(createEmployeeObjects.getConfirmPassword()).parent().siblings('div').find('input').type(password)
        return this
    }

    saveEmployeeDetails(fileName, userName, password) {
        cy.get('label').contains("Employee Id").parent().siblings('div').find('input').should('be.visible');
        let employeeId = "";
        cy.get('label').contains("Employee Id").parent().siblings('div').find('input').invoke("val").then((value) => {
            employeeId = value;
            randomMethods.storeEmployeeCredentials(fileName, userName, password, employeeId)
        })
        return this
    }
}

export default CreateEmployeePage
