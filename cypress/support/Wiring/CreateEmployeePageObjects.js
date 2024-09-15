const firstNameSelector = "input[name='firstName']"
const lastNameSelector = "input[name='lastName']"
const toggleSelector = "input[type='checkbox']"
const userName = "label:contains('Username')"
const password = "label:contains('Password'):not(:contains('Confirm'))"
const confirmPassword = "label:contains('Confirm Password')"
const saveButton = "button[type='submit']"
const successMessage = "p[class*='oxd-text--toast-message']"

/**
 * Represents the Create Employee Page Objects.
 *
 * @memberof Wiring
 * @class
 */
class CreateEmployeePageObjects {
    /**
     * Returns the selector for the first name input field.
     *
     * @returns {string} The CSS selector for the first name input field.
     */
    getFirstNameSelector() {
        return firstNameSelector
    }

    /**
     * Returns the selector for the last name input field.
     *
     * @returns {string} The CSS selector for the last name input field.
     */
    getLastNameSelector() {
        return lastNameSelector
    }

    /**
     * Returns the selector for the toggle checkbox.
     *
     * @returns {string} The CSS selector for the toggle checkbox.
     */
    getToggleSelector() {
        return toggleSelector
    }

    /**
     * Returns the selector for the username label.
     *
     * @returns {string} The CSS selector for the username label.
     */
    getUserName() {
        return userName
    }

    /**
     * Returns the selector for the password label.
     *
     * @returns {string} The CSS selector for the password label.
     */
    getPassword() {
        return password
    }

    /**
     * Returns the selector for the confirm password label.
     *
     * @returns {string} The CSS selector for the confirm password label.
     */
    getConfirmPassword() {
        return confirmPassword
    }

    /**
     * Returns the selector for the save button.
     *
     * @returns {string} The CSS selector for the save button.
     */
    getSaveButton() {
        return saveButton
    }

    /**
     * Returns the selector for the success message.
     *
     * @returns {string} The CSS selector for the success message.
     */
    getSuccessMessage() {
        return successMessage
    }
}

export default CreateEmployeePageObjects
