import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import InfoPage from "../pages/infoPage.js"
import MenuPage from "../pages/menuPage.js"

const login = new LoginPage()
const dashboard = new DashboardPage()
const info = new InfoPage()
const menu = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorList = {
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.--close',
    dateTodayButton: '.--today',
    saveButton: '[type="submit"]',
    genericDropdownField: '[clear="false"]'
  }

  it('Login - Success', () => {
    login.accessLoginPage()
    login.login(userData.userSuccess.username, userData.userSuccess.password)
    login.validateLogin()
  })

  it('Login - Fail', () => {
    login.accessLoginPage()
    login.login(userData.userFail.username, userData.userFail.password)
    login.validateErrorMessage()
  })

  it.only('User Info Update', () => {
    login.accessLoginPage()
    login.login(userData.userSuccess.username, userData.userSuccess.password)
    login.validateLogin()
    menu.accessMyInfo()
    info.updatePersonalDetails('Teste', 'de', 'Cypress')
    info.updateEmployeeDetails('EmployeeID', 'OtherID', 'Driver')
    info.updateOtherDetails('1994-07-18')
  })
})