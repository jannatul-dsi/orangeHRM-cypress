const userName = "input[name='username']"
const password = "input[name='password']"
const submitButton = "[type='submit']"

/**
 * @namespace Wiring
 */

/**
 * Represents the Login Page Objects.
 *
 * @memberof Wiring
 * @class
 */
class LoginPageObjects {
    /**
     * Returns the selector for the username input field.
     *
     * @returns {string} The CSS selector for the username input field.
     */
    getUserName() {
        return userName
    }

    /**
     * Returns the selector for the password input field.
     *
     * @returns {string} The CSS selector for the password input field.
     */
    getPassword() {
        return password
    }

    /**
     * Returns the selector for the submit button.
     *
     * @returns {string} The CSS selector for the submit button.
     */
    getSubmitButton() {
        return submitButton
    }
}

export default LoginPageObjects
