import DashboardPage from "../support/Pages/DashboardPage";
import RandomMethods from "../support/Pages/RandomMethods";

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
            .selectNationality()
            .clickOnPersonalDetailsSaveButton()
            .assertSuccessMessage()
            .navigateToPIM()
            .assertPIMHeaderVisibility()
            .searchEmployeeByID(employeeCredentialsFile)
            .assertFirstNameVisibility(firstName)
            .navigateToDirectory()
            .searchEmployeeByName(firstName)
            .assertFullNameVisibility(fullName)
            .logout()
            .assertLoginPageVisibility()
        cy.login(userName, password)
        dashboard.assertDashboardHeaderVisibility()
            .assertFullNameVisibility(fullName)
        cy.visit("/")
        dashboard.navigateToMyInfo()
            .assertEmployeeNameVisibility(fullName)
            .selectGender()
            .clickOnPersonalDetailsSaveButton()
            .assertSuccessMessage()
        dashboard.navigateToMyInfo()
            .selectBloodGroup()
            .clickOnCustomDetailsSaveButton()
            .assertSuccessMessage()
        dashboard.logout()
            .assertLoginPageVisibility()
    })
})

