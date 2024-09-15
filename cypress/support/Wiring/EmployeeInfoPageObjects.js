const employeeNameSelector = "h6"
const nationalitySelector = "label:contains('Nationality')"
const genderSelector = "label:contains('Gender')"
const bloodGroupSelector = "label:contains('Blood Type')"
const listSelector = "div[role='listbox']"
const optionSelector = "div[role='option']"
const personalDetailsSaveButtonSelector = "h6:contains('Personal Details')"
const customDetailsSaveButtonSelector = "h6:contains('Custom Fields')"
const successMessageSelector = "p[class*='oxd-text--toast-title']"

class EmployeeInfoPageObjects {
    getEmployeeNameSelector() {
        return employeeNameSelector
    }
    getNationalitySelector() {
        return nationalitySelector
    }
    getGenderSelector() {
        return genderSelector
    }
    getBloodGroupSelector() {
        return bloodGroupSelector
    }
    getListSelector() {
        return listSelector
    }
    getOptionSelector() {
        return optionSelector
    }
    getPersonalDetailsSaveButtonSelector() {
        return personalDetailsSaveButtonSelector
    }
    getCustomDetailsSaveButtonSelector() {
        return customDetailsSaveButtonSelector
    }
    getSuccessMessageSelector() {
        return successMessageSelector
    }

}

export default EmployeeInfoPageObjects
