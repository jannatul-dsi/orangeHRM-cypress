const dashboardHeader = "h6"
const PIMSelector = "ul li a span:contains('PIM')"
const directoryPageSelector = "ul li a span:contains('Directory')"
const imageSelector = "span img"
const logoutSelector = "li a:contains('Logout')"
const fullNameSelector = "p[class='oxd-userdropdown-name']"
const myInfoSelector = "ul li a span:contains('My Info')"
/**
 * Represents the Dashboard Page Objects.
 *
 * @memberof Wiring
 * @class
 */
class DashboardPageObjects {
    /**
     * Returns the selector for the dashboard header.
     *
     * @returns {string} The CSS selector for the dashboard header.
     */
    getDashboardHeader() {
        return dashboardHeader
    }

    /**
     * Returns the selector for the PIM (Personnel Information Management) link.
     *
     * @returns {string} The CSS selector for the PIM link.
     */
    getPIMSelector() {
        return PIMSelector
    }

    /**
     * Returns the selector for the Directory link.
     *
     * @returns {string} The CSS selector for the Directory link.
     */
    getDirectorySelector() {
        return directoryPageSelector
    }

    /**
     * Returns the selector for the profile image.
     *
     * @returns {string} The CSS selector for the profile image.
     */
    getImageSelector() {
        return imageSelector
    }

    /**
     * Returns the selector for the Logout link.
     *
     * @returns {string} The CSS selector for the Logout link.
     */
    getLogoutSelector() {
        return logoutSelector
    }

    /**
     * Returns the selector for the user's full name.
     *
     * @returns {string} The CSS selector for the user's full name.
     */
    getFullNameSelector() {
        return fullNameSelector
    }

    /**
     * Returns the selector for the My Info link.
     *
     * @returns {string} The CSS selector for the My Info link.
     */
    getMyInforSelector() {
        return myInfoSelector
    }
}

export default DashboardPageObjects
