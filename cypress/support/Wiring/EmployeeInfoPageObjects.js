const employeeNameSelector = "h6"
const nationalitySelector = "label:contains('Nationality')"
const genderSelector = "label:contains('Gender')"
const bloodGroupSelector = "label:contains('Blood Type')"
const listSelector = "div[role='listbox']"
const optionSelector = "div[role='option']"
const personalDetailsSaveButtonSelector = "h6:contains('Personal Details')"
const customDetailsSaveButtonSelector = "h6:contains('Custom Fields')"
const successMessageSelector = "p[class*='oxd-text--toast-title']"

/**
 * Represents the Employee Information Page Objects.
 *
 * @memberof Wiring
 * @class
 */
class EmployeeInfoPageObjects {
    /**
     * Returns the selector for the employee name element.
     *
     * @returns {string} The CSS selector for the employee name element.
     */
    getEmployeeNameSelector() {
        return employeeNameSelector
    }

    /**
     * Returns the selector for the nationality label.
     *
     * @returns {string} The CSS selector for the nationality label.
     */
    getNationalitySelector() {
        return nationalitySelector
    }

    /**
     * Returns the selector for the gender label.
     *
     * @returns {string} The CSS selector for the gender label.
     */
    getGenderSelector() {
        return genderSelector
    }

    /**
     * Returns the selector for the blood group label.
     *
     * @returns {string} The CSS selector for the blood group label.
     */
    getBloodGroupSelector() {
        return bloodGroupSelector
    }

    /**
     * Returns the selector for the listbox element containing options.
     *
     * @returns {string} The CSS selector for the listbox element.
     */
    getListSelector() {
        return listSelector
    }

    /**
     * Returns the selector for individual options within a listbox.
     *
     * @returns {string} The CSS selector for options within a listbox.
     */
    getOptionSelector() {
        return optionSelector
    }

    /**
     * Returns the selector for the Personal Details save button.
     *
     * @returns {string} The CSS selector for the Personal Details save button.
     */
    getPersonalDetailsSaveButtonSelector() {
        return personalDetailsSaveButtonSelector
    }

    /**
     * Returns the selector for the Custom Details save button.
     *
     * @returns {string} The CSS selector for the Custom Details save button.
     */
    getCustomDetailsSaveButtonSelector() {
        return customDetailsSaveButtonSelector
    }

    /**
     * Returns the selector for the success message element.
     *
     * @returns {string} The CSS selector for the success message element.
     */
    getSuccessMessageSelector() {
        return successMessageSelector
    }
}

export default EmployeeInfoPageObjects
