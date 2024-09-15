const searchEmployeeInput = "input[placeholder='Type for hints...']"
const searchSuggestion = ".oxd-autocomplete-option > span"
const searchButtonSelector = "button[type='submit']"
const fullNameSelector = ".orangehrm-directory-card-header"

/**
 * Represents the Directory Page Objects.
 *
 * @memberof Wiring
 * @class
 */
class DirectoryPageObjects {
    /**
     * Returns the selector for the employee search input field.
     *
     * @returns {string} The CSS selector for the employee search input field.
     */
    getEmployeeSearchInputSelector() {
        return searchEmployeeInput
    }

    /**
     * Returns the selector for the search suggestion element.
     *
     * @returns {string} The CSS selector for the search suggestion element.
     */
    getSearchSuggestionSelector() {
        return searchSuggestion
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
     * Returns the selector for the full name element in the directory.
     *
     * @returns {string} The CSS selector for the full name element.
     */
    getFullNameSelector() {
        return fullNameSelector
    }
}

export default DirectoryPageObjects
