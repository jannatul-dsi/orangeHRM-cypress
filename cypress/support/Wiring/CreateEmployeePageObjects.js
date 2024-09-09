
const firstNameSelector = "input[name='firstName']"
const lastNameSelector = "input[name='lastName']"
const toggleSelector = "input[type='checkbox']"
const userName = "label:contains('Username')"
const password = "label:contains('Password'):not(:contains('Confirm'))"
const confirmPassword = "label:contains('Confirm Password')"
const saveButton = "button[type='submit']"
const successMessage = "p[class*='oxd-text--toast-message']"

class CreateEmployeePageObjects {
    getFirstNameSelector() {
        return firstNameSelector
    }
    getLastNameSelector() {
        return lastNameSelector
    }
    getToggleSelector() {
        return toggleSelector
    }
    getUserName() {
        return userName
    }
    getPassword() {
        return password
    }
    getConfirmPassword() {
        return confirmPassword
    }
    getSaveButton() {
        return saveButton
    }
    getSuccessMessage() {
        return successMessage
    }

}

export default CreateEmployeePageObjects
