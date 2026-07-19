import userData from "../fixtures/users/user-data.json"

describe('Orange HRM Tests', () => {

  const selectorList = {
    username: '[name="username"]',
    password: '[name="password"]',
    loginButton: '.oxd-button',
    dashboardValidation: 'div.orangehrm-dashboard-grid',
    errorMessage: '.oxd-alert',
    myInfoButton: 'a[href="/web/index.php/pim/viewMyDetails"]', 
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.--close',
    dateTodayButton: '.--today',
    saveButton: '[type="submit"]'
  }

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.username).type(userData.userSuccess.username)
    cy.get(selectorList.password).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardValidation)
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.username).type(userData.userFail.username)
    cy.get(selectorList.password).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.errorMessage).should('be.visible')
  })

  it.only('User Info Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.username).type(userData.userSuccess.username)
    cy.get(selectorList.password).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardValidation).should('be.visible')
    cy.get(selectorList.myInfoButton).click()
    cy.location('pathname').should('contain', 'pim/viewPersonalDetails')
    cy.get(selectorList.firstNameField).clear().type('Teste')
    cy.get(selectorList.middleNameField).clear().type('de')
    cy.get(selectorList.lastNameField).clear().type('Cypress')
    cy.get(selectorList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorList.genericField).eq(4).clear().type('Other')
    cy.get(selectorList.genericField).eq(5).clear().type('Driver')
    cy.get(selectorList.dateField).eq(0).click()
    cy.get(selectorList.dateTodayButton).eq(0).click()
    cy.get(selectorList.dateField).eq(1).clear().type('1994-18-07')
    cy.get(selectorList.dateCloseButton).eq(0).click()
    cy.get(selectorList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
})