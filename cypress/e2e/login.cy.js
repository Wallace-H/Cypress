import userData from "../fixtures/user-data.json"

describe('Orange HRM Tests', () => {

  const selectorList = {
    username: '[name="username"]',
    password: '[name="password"]',
    loginButton: '.oxd-button',
    dashboardValidation: 'div.orangehrm-dashboard-grid',
    errorMessage: '.oxd-alert'
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.username).type(userData.userSuccess.username)
    cy.get(selectorList.password).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardValidation)
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.username).type(userData.userFail.username)
    cy.get(selectorList.password).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.errorMessage).should('be.visible')
  })
})