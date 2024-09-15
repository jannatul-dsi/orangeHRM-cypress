import DashboardPage from "../support/PageObjects/DashboardPage";
import RandomMethods from "../support/PageObjects/RandomMethods";

describe("orangeHRM", () => {
    const adminUserName = "Admin";
    const adminPassword = "admin123";
    const employeeCredentialsFile = "employeeCredentials.json";

    const randomMethods = new RandomMethods()

    const { firstName, lastName } = randomMethods.getUserName()
    const { userName, password } = randomMethods.generateUserNameAndPassword()
    const fullName = firstName + " " + lastName

    const dashboard = new DashboardPage()
    before(() => {
        // cy.clearSession()
        cy.login(adminUserName, adminPassword)
    });
    it("passes", () => {
        dashboard.assertDashboardHeaderVisibility()
            .navigateToPIM()
            .assertPIMHeaderVisibility()
            .clickOnAddEmployeeButton()
            .enterFirstName(firstName)
            .enterLastName(lastName)
            .clickOnToggleCheckbox()
            .enterUserName(userName)
            .enterPassword(password)
            .enterConfirmPassword(password)
            .saveEmployeeDetails(employeeCredentialsFile, userName, password)
            .clickOnSaveButton()
            .assertSuccessMessage()
            .assertEmployeeNameVisibility(fullName)
            .navigateToDirectory()


    })
})

