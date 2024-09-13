const { faker } = require("@faker-js/faker");
class RandomMethods {
    getUserName() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        }
    }
    storeEmployeeCredentials(fileName, username, password, employeeId) {
        cy.writeFile(`cypress/fixtures/${fileName}`, {
            username,
            password,
            employeeId
        })
    }
     generateUserNameAndPassword(firstName, lastName) {
        return {
          userName: firstName + "123" + lastName,
          password: firstName + "123" + lastName,
        };
      }
}

export default RandomMethods
