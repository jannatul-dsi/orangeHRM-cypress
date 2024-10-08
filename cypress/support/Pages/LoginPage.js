import LoginPageObjects from "../Wiring/LoginPageObjects";
import DashboardPage from "./DashboardPage";

const loginPageObjects = new LoginPageObjects();

/**
 * Represents the Login Page.
 *
 * @memberof Pages
 * @class
 */
class LoginPage {
  /**
   * Asserts that the login page is visible by checking the page title.
   *
   * @returns {DashboardPage} The current instance of `DashboardPage` for method chaining.
   */
  assertLoginPageVisibility() {
    cy.title().should("eq", "OrangeHRM");
    return this;
  }
  /**
   * Enters the username into the username field.
   *
   * @param {string} userName - The username to be entered.
   * @returns {LoginPage} The current instance of `LoginPage` for method chaining.
   */
  enterUserName(userName) {
    cy.get(loginPageObjects.getUserName()).type(userName);
    return this;
  }

  /**
   * Enters the password into the password field.
   *
   * @param {string} password - The password to be entered.
   * @returns {LoginPage} The current instance of `LoginPage` for method chaining.
   */
  enterPassword(password) {
    cy.get(loginPageObjects.getPassword()).type(password);
    return this;
  }

  /**
   * Clicks the submit button to log in.
   *
   * @returns {DashboardPage} An instance of `DashboardPage` to interact with the dashboard after logging in.
   */
  clickSubmitButton() {
    cy.get(loginPageObjects.getSubmitButton()).click();
    let dashboard = new DashboardPage();
    return dashboard;
  }
}

export default LoginPage;
