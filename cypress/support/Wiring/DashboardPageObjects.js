const dashboardHeader = "h6"
const PIMSelector = "ul li a span:contains('PIM')"
const directoryPageSelector = "ul li a span:contains('Directory')"
const imageSelector = "span img"
const logoutSelector = "li a:contains('Logout')"


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
    getImageSelector() {
        return imageSelector
    }
    getLogoutSelector() {
        return logoutSelector
    }

}

export default DashboardPageObjects
