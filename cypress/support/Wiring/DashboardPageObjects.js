const dashboardHeader = "h6"
const PIMSelector = "ul li a span:contains('PIM')"
const directoryPageSelector = "ul li a span:contains('Directory')"

class DashboardPageObjects {
    getDashboardHeader() {
        return dashboardHeader
    }
    getPIMSelector() {
        return PIMSelector
    }
    getDirectorySelector() {
        return directoryPageSelector
    }

}

export default DashboardPageObjects
