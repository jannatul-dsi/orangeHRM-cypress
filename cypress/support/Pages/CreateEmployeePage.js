import CreateEmployeePageObjects from "../Wiring/CreateEmployeePageObjects"
import EmployeeInfoPage from "./EmployeeInfoPage"
import RandomMethods from "./RandomMethods"

const createEmployeeObjects = new CreateEmployeePageObjects()
const randomMethods = new RandomMethods()
/**
 * @namespace Pages
 */

/**
 * Represents the Create Employee Page.
 *
 * @memberof Pages
 * @class
 */
class CreateEmployeePage {
    /**
     * Enters the employee's first name.
     *
     * @param {string} firstName - The first name of the employee.
     * @returns {CreateEmployeePage} The current instance of `CreateEmployeePage` for method chaining.
     */
    enterFirstName(firstName) {
        cy.get(createEmployeeObjects.getFirstNameSelector()).type(firstName)
        return this
    }

    /**
     * Enters the employee's last name.
     *
     * @param {string} lastName - The last name of the employee.
     * @returns {CreateEmployeePage} The current instance of `CreateEmployeePage` for method chaining.
     */
    enterLastName(lastName) {
        cy.get(createEmployeeObjects.getLastNameSelector()).type(lastName)
        return this
    }

    /**
     * Clicks on the toggle checkbox to enable/disable an option.
     *
     * @returns {CreateEmployeePage} The current instance of `CreateEmployeePage` for method chaining.
     */
    clickOnToggleCheckbox() {
        cy.get(createEmployeeObjects.getToggleSelector()).click({ force: true })
        return this
    }

    /**
     * Enters the employee's username.
     *
     * @param {string} userName - The username for the employee.
     * @returns {CreateEmployeePage} The current instance of `CreateEmployeePage` for method chaining.
     */
    enterUserName(userName) {
        cy.get(createEmployeeObjects.getUserName()).parent().siblings('div').find('input').type(userName)
        return this
    }

    /**
     * Enters the employee's password.
     *
     * @param {string} password - The password for the employee.
     * @returns {CreateEmployeePage} The current instance of `CreateEmployeePage` for method chaining.
     */
    enterPassword(password) {
        cy.get(createEmployeeObjects.getPassword()).parent().siblings('div').find('input').type(password)
        return this
    }

    /**
     * Enters the confirmation password.
     *
     * @param {string} password - The confirmation password.
     * @returns {CreateEmployeePage} The current instance of `CreateEmployeePage` for method chaining.
     */
    enterConfirmPassword(password) {
        cy.get(createEmployeeObjects.getConfirmPassword()).parent().siblings('div').find('input').type(password)
        return this
    }

    /**
     * Saves employee details and stores them in a file.
     *
     * @param {string} fileName - The name of the file where credentials are stored.
     * @param {string} userName - The username of the employee.
     * @param {string} password - The password of the employee.
     * @returns {CreateEmployeePage} The current instance of `CreateEmployeePage` for method chaining.
     */
    saveEmployeeDetails(fileName, userName, password) {
        cy.get('label').contains("Employee Id").parent().siblings('div').find('input').should('be.visible')
        let employeeId = ""
        cy.get('label').contains("Employee Id").parent().siblings('div').find('input').invoke("val").then((value) => {
            employeeId = value
            randomMethods.storeEmployeeCredentials(fileName, userName, password, employeeId)
        })
        return this
    }

    /**
     * Clicks on the save button to submit the form.
     *
     * @returns {CreateEmployeePage} The current instance of `CreateEmployeePage` for method chaining.
     */
    clickOnSaveButton() {
        cy.get(createEmployeeObjects.getSaveButton()).click()
        return this
    }

    /**
     * Asserts that a success message is displayed after saving employee details.
     *
     * @returns {EmployeeInfoPage} An instance of `EmployeeInfoPage` to navigate to the employee information page.
     */
    assertSuccessMessage() {
        cy.get(createEmployeeObjects.getSuccessMessage()).should("have.text", "Successfully Saved")
        let employee = new EmployeeInfoPage()
        return employee
    }
}

export default CreateEmployeePage
