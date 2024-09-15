const employeeNameSelector = "h6"
const nationalitySelector = "label:contains('Nationality')"
const listSelector = "div[role='listbox']"
const optionSelector = "div[role='option']"
const saveButtonSelector = "h6:contains('Custom Fields')"
const successMessageSelector = "p[class*='oxd-text--toast-message']"

class EmployeeInfoPageObjects {
    getEmployeeNameSelector() {
        return employeeNameSelector
    }
    getNationalitySelector() {
        return nationalitySelector
    }
    getListSelector() {
        return listSelector
    }
    getOptionSelector() {
        return optionSelector
    }
    getSaveButtonSelector() {
        return saveButtonSelector
    }
    getSuccessMessageSelector() {
        return successMessageSelector
    }

}

export default EmployeeInfoPageObjects
