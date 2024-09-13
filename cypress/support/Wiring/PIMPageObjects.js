const pimHeader = "h6"
const addEmployeeButton = "button:contains('Add')"
class PIMPageObjects{
    getPIMHeader() {
        return pimHeader
    }
    getAddEmployeeButton() {
        return addEmployeeButton
    }
}

export default PIMPageObjects
