const userName = "input[name='username']"
const password = "input[name='password']"
const submitButton = "[type='submit']"

class LoginPageObjects{
    getUserName() {
        return userName
    }
    getPassword() {
        return password
    }
    getSubmitButton() {
        return submitButton
    }
}

export default LoginPageObjects
