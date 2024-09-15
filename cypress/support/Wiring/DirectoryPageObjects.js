const searchEmployeeInput = "input[placeholder='Type for hints...']"
const searchSuggestion = ".oxd-autocomplete-option > span"
const searchButtonSelector = "button[type='submit']"
const fullNameSelector = ".orangehrm-directory-card-header"

class DirectoryPageObjects {
    getEmployeeSearchInputSelector() {
        return searchEmployeeInput
    }
    getSearchSuggestionSelector() {
        return searchSuggestion
    }
    getSearchButtonSelector() {
        return searchButtonSelector
    }
    getFullNameSelector() {
        return fullNameSelector
    }

}
export default DirectoryPageObjects
