const { faker } = require("@faker-js/faker");

/**
 * Represents the Random Functions
 *
 * @memberof Pages
 * @class
 */
class RandomMethods {
    /**
     * Generates a random user name consisting of a first name and last name.
     *
     * @returns {Object} An object containing a random first name and last name.
     * @property {string} firstName - The randomly generated first name.
     * @property {string} lastName - The randomly generated last name.
     */
    getUserName() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        }
    }

    /**
     * Stores employee credentials in a fixture file.
     * 
     * @param {string} fileName - The name of the fixture file where the credentials will be stored.
     * @param {string} username - The username of the employee.
     * @param {string} password - The password of the employee.
     * @param {string} employeeId - The ID of the employee.
     */
    storeEmployeeCredentials(fileName, username, password, employeeId) {
        cy.writeFile(`cypress/fixtures/${fileName}`, {
            username,
            password,
            employeeId
        })
    }

    /**
     * Generates a random string of specified length using a charset.
     *
     * @param {number} length - The length of the random string to generate.
     * @returns {string} The randomly generated string.
     */
    generateRandomString(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?";
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset[randomIndex];
        }
        return result;
    }

    /**
     * Generates a random username and password.
     * 
     * The username is a random string of 12 characters, and the password is a random string of 16 characters followed by a "9".
     *
     * @returns {Object} An object containing the randomly generated username and password.
     * @property {string} userName - The randomly generated username.
     * @property {string} password - The randomly generated password.
     */
    generateUserNameAndPassword() {
        const username = this.generateRandomString(12);
        const password = this.generateRandomString(16) + "9";
        return {
            userName: username,
            password: password
        };
    }

    /**
     * Scrolls to an element that contains the specified text.
     * 
     * @param {string} text - The text content of the element to scroll into view.
     */
    scrollToElementContaining(text) {
        cy.contains(text)
            .scrollIntoView();
    }

    /**
     * Selects a radio button with the label "Female".
     */
    selectRadioByLabel() {
        cy.get('label:contains("Female")').click()
    }
}

export default RandomMethods
