const dashboardHeader = "h6"
const PIMSelector = "ul li a span:contains('PIM')"
class DashboardPageObjects{
    getDashboardHeader() {
        return dashboardHeader
    }
    getPIMSelector() {
        return PIMSelector
    }

}

export default DashboardPageObjects
