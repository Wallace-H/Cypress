class LoginPage {

    selectorList(){
        const selectors = {
            username: '[name="username"]',
            password: '[name="password"]',
            loginButton: '.oxd-button',
            errorMessage: '.oxd-alert',
            dashboardValidation: 'div.orangehrm-dashboard-grid',
        }
        return selectors
    }
    
    accessLoginPage(){
        cy.visit('/auth/login')
    }

    login(username, password){
        cy.get(this.selectorList().username).type(username)
        cy.get(this.selectorList().password).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    validateErrorMessage(){
        cy.get(this.selectorList().errorMessage).should('be.visible')
    }

    
} 

export default LoginPage