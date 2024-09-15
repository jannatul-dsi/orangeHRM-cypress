const pimHeader = "h6"
const addEmployeeButton = "button:contains('Add')"
const searchEmployeeIdInput = "label:contains('Employee Id')"
const searchButtonSelector = "button[type='submit']"
const firstNameSelector = "div[role='cell'] div"
class PIMPageObjects {
    getPIMHeader() {
        return pimHeader
    }
    getAddEmployeeButton() {
        return addEmployeeButton
    }
    getSearchemployeeIdInput() {
        return searchEmployeeIdInput
    }
    getSearchButtonSelector() {
        return searchButtonSelector
    }
    getFirstNameSelector() {
        return firstNameSelector
    }
}

export default PIMPageObjects