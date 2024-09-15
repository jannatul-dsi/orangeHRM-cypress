const employeeNameSelector = "h6"
const directoryPageSelector = "ul li a span:contains('Directory')"

class EmployeeInfoPageObjects {
    getEmployeeNameSelector() {
        return employeeNameSelector
    }
    getDirectorySelector() {
        return directoryPageSelector
    }
}

export default EmployeeInfoPageObjects
