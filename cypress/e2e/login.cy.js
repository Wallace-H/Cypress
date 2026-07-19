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
    cy.get(selectorList.username).type('Admin')
    cy.get(selectorList.password).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardValidation)
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.username).type('teste')
    cy.get(selectorList.password).type('teste')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.errorMessage).should('be.visible')
  })
})