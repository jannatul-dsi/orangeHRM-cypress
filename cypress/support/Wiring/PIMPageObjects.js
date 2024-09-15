const pimHeader = "h6"
const addEmployeeButton = "button:contains('Add')"
const searchEmployeeIdInput = "label:contains('Employee Id')"
const searchButtonSelector = "button[type='submit']"
const firstNameSelector = "div[role='cell'] div"

/**
 * Represents the PIM Page Objects.
 *
 * @memberof Wiring
 * @class
 */
class PIMPageObjects {
    /**
     * Returns the selector for the PIM header.
     *
     * @returns {string} The CSS selector for the PIM header element.
     */
    getPIMHeader() {
        return pimHeader
    }

    /**
     * Returns the selector for the Add Employee button.
     *
     * @returns {string} The CSS selector for the Add Employee button.
     */
    getAddEmployeeButton() {
        return addEmployeeButton
    }

    /**
     * Returns the selector for the Employee Id search input field.
     *
     * @returns {string} The CSS selector for the Employee Id search input field.
     */
    getSearchemployeeIdInput() {
        return searchEmployeeIdInput
    }

    /**
     * Returns the selector for the search button.
     *
     * @returns {string} The CSS selector for the search button.
     */
    getSearchButtonSelector() {
        return searchButtonSelector
    }

    /**
     * Returns the selector for the first name element in the PIM table.
     *
     * @returns {string} The CSS selector for the first name element in the PIM table.
     */
    getFirstNameSelector() {
        return firstNameSelector
    }
}

export default PIMPageObjects
