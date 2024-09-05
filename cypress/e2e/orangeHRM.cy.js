const { faker } = require("@faker-js/faker");

describe("template spec", () => {
  const adminUserName = "Admin";
  const adminPassword = "admin123";
  const employeeCredentialsFile = "employeeCredentials.json";

  function login(userName, password) {
    cy.waitTillVisible("input");
    cy.get("input[name='username']").type(userName);
    cy.get("input[name='password']").type(password);
    cy.get("[type='submit']").click();
  }

  function getUserName() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };
  }


  function logout() {
    cy.get("span img").click()
    cy.get("li a").contains("Logout").click()
    cy.waitTillVisible("h5")
  }
  function storeEmployeeCredentials(username, password, employeeId, fullName) {
    cy.writeFile(`cypress/fixtures/${employeeCredentialsFile}`, {
      username,
      password,
      employeeId,
      fullName
    });
  }

  function scrollToElementContaining(text) {
    cy.contains(text)
      .scrollIntoView();
  }
  function selectRadioByLabel() {
    cy.get('input[value = "2"]')
      .check({ force: true });
  }
  function updateGenderAndBloodGroup() {
    scrollToElementContaining('Gender')
    cy.get('label').contains('Gender').then(() => {
      selectRadioByLabel()
    })
    cy.get("button[type='submit']").contains("Save").first().click()
    cy.waitTillVisible(".oxd-text--toast-message");
    cy.get(".oxd-text--toast-message").should(
      "have.text",
      "Successfully Updated"
    );
    scrollToElementContaining('Blood Type')
    cy.get('label').contains("Blood Type").parent('div').siblings("div").find("i").click()
    cy.get('div[role="listbox"]').should('be.visible')
    cy.get('div[role="option"]').contains("O+").click();
    cy.get('h6').contains("Custom Fields").siblings("form").find("button[type='submit']").contains("Save").click()
    cy.waitTillVisible(".oxd-text--toast-message");
    cy.get(".oxd-text--toast-message").should(
      "have.text",
      "Successfully Saved"
    );
  }
  function generateUsernameAndPassword(firstName, lastName) {
    return {
      username: firstName + "123" + lastName,
      password: firstName + "123" + lastName,
    };
  }

  function createEmployee() {
    cy.get("span").contains("PIM").click();
    cy.waitTillVisible("h6");
    cy.get("h6").should("have.text", "PIM");
    cy.get("button").contains("Add").click();
    cy.waitTillVisible("h6");

    // Create a new employee using Faker
    const { firstName, lastName } = getUserName();
    const fullName = firstName + " " + lastName;

    cy.get("input[name='firstName']").type(firstName);
    cy.get("input[name='lastName']").type(lastName);

    const { username, password } = generateUsernameAndPassword(
      firstName,
      lastName
    );
    cy.get('label').contains("Employee Id").parent().siblings('div').find('input').should('be.visible');
    let employeeId = "";
    cy.get('label').contains("Employee Id").parent().siblings('div').find('input').invoke("val").then((value) => {
      employeeId = value;
      cy.log(employeeId)


      // cy.document().then((doc) => {
      //   employeeId = doc.querySelector('label'.contains('Employee Id').parent().siblings('div').find('input')).value;
      // })
      cy.log(employeeId)
      // cy.wait(1000000)
      // Save Employee Details to a file
      storeEmployeeCredentials(username, password, employeeId, fullName)
    }
    );
    cy.get("input[type='checkbox']").click({ force: true });
    cy.fixture(employeeCredentialsFile).then((employee) => {
      cy.get("label")
        .contains("Username")
        .parent()
        .siblings("div")
        .find("input")
        .type(employee.username);
      cy.get("label")
        .contains("Password")
        .parent()
        .siblings("div")
        .find("input")
        .type(employee.password);
      cy.get("label")
        .contains("Confirm Password")
        .parent()
        .siblings("div")
        .find("input")
        .type(employee.password);


      cy.get("button[type='submit']").click();
      cy.waitTillVisible(".oxd-text--toast-message");
      cy.get(".oxd-text--toast-message").should(
        "have.text",
        "Successfully Saved"
      );

      cy.waitTillVisible("h6");
      cy.get("h6").should("contain.text", "Personal Details");
    });
  }

  before(() => {
    cy.visit("/");
    cy.title().should("eq", "OrangeHRM");
    login(adminUserName, adminPassword);
  });

  it("passes", () => {
    cy.waitTillVisible("h6");
    cy.get("h6").should("have.text", "Dashboard");
    createEmployee();

    cy.get("a").contains("PIM").click();
    cy.waitTillVisible("h5");
    cy.get("h5").should("have.text", "Employee Information");
    // Click On Employee List and search by Employee ID
    cy.get("li a").contains("Employee List").click()
    cy.waitTillVisible('h6')
    cy.fixture(employeeCredentialsFile).then((employee) => {
      cy.get('label').contains("Employee Id").parent().siblings('div').find('input').type(employee.employeeId)
      cy.get("button[type='submit']").click()
      //Assert the firstName of the Employee is showing.
      const firstName = employee.fullName.split(' ')[0]
      cy.get("div[role='cell'] div").contains(firstName).invoke('text')
        .then((text) => {
          const expectedText = text.replace(/\s+/g, ' ').trim(); // Collapse multiple spaces into one and trim
          expect(expectedText).to.eq(firstName);
        });
    })


    cy.get("span").contains("Directory").click()
    cy.waitTillVisible("h5")
    cy.fixture(employeeCredentialsFile).then((employee) => {
      const firstName = employee.fullName.split(' ')[0]
      cy.get("input[placeholder='Type for hints...']").type(firstName)
      cy.get('.oxd-autocomplete-option > span').click()
      cy.get("button[type='submit']").click()


      cy.get(".orangehrm-directory-card-header")
        .invoke('text')
        .then((text) => {
          const normalizedText = text.replace(/\s+/g, ' ').trim();
          expect(normalizedText).to.eq(employee.fullName);
        });

      logout()
      cy.waitTillVisible("h5").contains("Login")
      login(employee.username, employee.password)
      cy.waitTillVisible("h6")
      cy.get("p.oxd-userdropdown-name").should("have.text", employee.fullName)
      cy.get("a").contains("My Info").click();
      cy.waitTillVisible("h6");
      cy.get("h6").contains(employee.fullName).should("have.text", employee.fullName);

      updateGenderAndBloodGroup()
    })
  })
})
