import EmployeeInfoPageObjects from "../Wiring/EmployeeInfoPageObjects"
import DashboardPage from "./DashboardPage"
import RandomMethods from "./RandomMethods"

const employeeInfoPageObjects = new EmployeeInfoPageObjects()
const randomMethods = new RandomMethods()

/**
 * Represents the Employee Information Page.
 *
 * @memberof Pages
 * @class
 */
class EmployeeInfoPage {
    /**
     * Asserts that the employee's name is visible and matches the expected full name.
     *
     * @param {string} fullName - The expected full name to be displayed.
     * @returns {EmployeeInfoPage} The current instance of `EmployeeInfoPage` for method chaining.
     */
    assertEmployeeNameVisibility(fullName) {
        cy.get(employeeInfoPageObjects.getEmployeeNameSelector()).should('contain', fullName)
        return this
    }

    /**
     * Selects the employee's nationality from a dropdown.
     * 
     * The method scrolls to the Nationality field, opens the dropdown, and selects "Bangladeshi".
     *
     * @returns {EmployeeInfoPage} The current instance of `EmployeeInfoPage` for method chaining.
     */
    selectNationality() {
        randomMethods.scrollToElementContaining("Nationality")
        cy.get(employeeInfoPageObjects.getNationalitySelector()).parent('div').siblings("div").find("i").click()
        cy.get(employeeInfoPageObjects.getListSelector()).should('be.visible')
        cy.get(employeeInfoPageObjects.getOptionSelector()).contains("Bangladeshi").click();
        return this
    }

    /**
     * Selects the employee's gender by choosing the appropriate radio button.
     * 
     * The method scrolls to the Gender field and selects the radio button for the specified gender.
     *
     * @returns {EmployeeInfoPage} The current instance of `EmployeeInfoPage` for method chaining.
     */
    selectGender() {
        randomMethods.scrollToElementContaining("Gender")
        cy.get(employeeInfoPageObjects.getGenderSelector()).then(() => {
            randomMethods.selectRadioByLabel()
        })
        return this
    }

    /**
     * Selects the employee's blood group from a dropdown.
     * 
     * The method scrolls to the Blood Type field, opens the dropdown, and selects "O+".
     *
     * @returns {EmployeeInfoPage} The current instance of `EmployeeInfoPage` for method chaining.
     */
    selectBloodGroup() {
        randomMethods.scrollToElementContaining("Blood Type")
        cy.get(employeeInfoPageObjects.getBloodGroupSelector()).parent('div').siblings("div").find("i").click()
        cy.get(employeeInfoPageObjects.getListSelector()).should('be.visible')
        cy.get(employeeInfoPageObjects.getOptionSelector()).contains("O+").click();
        return this
    }

    /**
     * Clicks the "Save" button to save personal details.
     * 
     * The method finds the save button within the personal details form and clicks it.
     *
     * @returns {EmployeeInfoPage} The current instance of `EmployeeInfoPage` for method chaining.
     */
    clickOnPersonalDetailsSaveButton() {
        cy.get(employeeInfoPageObjects.getPersonalDetailsSaveButtonSelector()).siblings("form").find("button[type='submit']").contains("Save").click()
        return this
    }

    /**
     * Clicks the "Save" button to save custom details.
     * 
     * The method finds the save button within the custom details form and clicks it.
     *
     * @returns {EmployeeInfoPage} The current instance of `EmployeeInfoPage` for method chaining.
     */
    clickOnCustomDetailsSaveButton() {
        cy.get(employeeInfoPageObjects.getCustomDetailsSaveButtonSelector()).siblings("form").find("button[type='submit']").contains("Save").click()
        return this
    }

    /**
     * Asserts that a success message is displayed after saving details.
     * 
     * The method checks that the success message matches "Success".
     *
     * @returns {DashboardPage} An instance of `DashboardPage` to interact with the dashboard page.
     */
    assertSuccessMessage() {
        cy.get(employeeInfoPageObjects.getSuccessMessageSelector()).should("have.text", "Success")
        let dashboard = new DashboardPage()
        return dashboard
    }
}

export default EmployeeInfoPage
