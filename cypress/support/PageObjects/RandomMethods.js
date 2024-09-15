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
    generateRandomString(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?";
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset[randomIndex];
        }
        return result;
    }

    generateUserNameAndPassword() {
        const username = this.generateRandomString(12); 
        const password = this.generateRandomString(16);
        return {
            userName: username,
            password: password
        };
    }
}

export default RandomMethods
