class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordFiel: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredencialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordFiel).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage