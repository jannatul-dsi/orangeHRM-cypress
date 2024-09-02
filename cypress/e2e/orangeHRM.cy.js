const { faker } = require("@faker-js/faker");
const { after, values, invoke } = require("lodash");

describe("template spec", () => {
  const adminUserName = "Admin";
  const adminPassword = "admin123";
  const employeeCredentialsFile = "employeeCredentials.json";

  function login(userName, password) {
    cy.waitTillVisible("input");
    cy.get("input[name='username'").type(userName);
    cy.get("input[name='password'").type(password);
    cy.get("[type='submit']").click();
  }

  function getUserName() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
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
    cy.waitTillVisible("input");

    const { firstName, lastName } = getUserName();

    cy.get("input[name='firstName']").type(firstName);
    cy.get("input[name='lastName']").type(lastName);

    const fullName = firstName + " " + lastName;


    const { username, password } = generateUsernameAndPassword(
      firstName,
      lastName
    );
    cy.get("label")
      .contains("Employee Id")
      .parent()
      .siblings("div")
      .find("input")
      .clear()
      .type("0303");
    cy.get("span")
      .contains("Employee Id already exists")
      .should("be.visible")
      .then(() => {
        const generateUniqueId = () =>
          Math.floor(1000 + Math.random() * 9000).toString();
        const checkUniqueId = () => {
          const newId = generateUniqueId();
          cy.get("label")
            .contains("Employee Id")
            .parent()
            .siblings("div")
            .find("input")
            .clear()
            .type(newId);
          cy.get("span")
            .contains("Employee Id already exists")
            .should("not.exist")
            .then(() => {
              cy.get("input[type='checkbox']").click({ force: true });
            });
        };
        checkUniqueId();
        cy.get("label")
          .contains("Username")
          .parent()
          .siblings("div")
          .find("input")
          .type(username);
        cy.get("label")
          .contains("Password")
          .parent()
          .siblings("div")
          .find("input")
          .type(password);
        cy.get("label")
          .contains("Confirm Password")
          .parent()
          .siblings("div")
          .find("input")
          .type(password);
      });


    cy.get("button[type='submit']").click();
    cy.waitTillVisible(".oxd-text--toast-message");
    cy.get(".oxd-text--toast-message").should(
      "have.text",
      "Successfully Saved"
    );
    cy.waitTillVisible("h6");
    cy.get("h6").should("contain.text", fullName);

    return {
      fullName,
      username,
      password,
    };
  }

  function storeEmployeeCredentials(username, password) {
    cy.writeFile(`cypress/fixtures/${employeeCredentialsFile}`, {
      username,
      password,
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
    const { fullName, username, password } = createEmployee();

    storeEmployeeCredentials(username, password);

    cy.get("a").contains("PIM").click();
    cy.waitTillVisible("h5");
    cy.get("h5").should("have.text", "Employee Information");

    cy.get("span").contains("Directory").click()
    cy.waitTillVisible("h5")
    const firstName = fullName.split(' ')[0]
    cy.get("input[placeholder='Type for hints...']").type(firstName)
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get("button[type='submit']").click()
    
    cy.get(".orangehrm-directory-card-header")
      .invoke('text')
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, ' ').trim(); // Collapse multiple spaces into one and trim
        expect(normalizedText).to.eq(fullName);
      });

  });
});
