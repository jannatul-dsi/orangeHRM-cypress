import LoginPageObjects from "../Wiring/LoginPageObjects"
import DashboardPage from "./DashboardPage"

const loginPageObjects = new LoginPageObjects()

class LoginPage {
    enterUserName(userName) {
        cy.get(loginPageObjects.getUserName()).type(userName)
        return this
    }
    enterPassword(password) {
        cy.get(loginPageObjects.getPassword()).type(password)
        return this
    }
    clickSubmitButton() {
        cy.get(loginPageObjects.getSubmitButton()).click()
        let dashboard = new DashboardPage()
        return dashboard
    }
}

export default LoginPage