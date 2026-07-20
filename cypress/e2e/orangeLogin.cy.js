import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginpage.js"
import DashboardPage from "../pages/dashboardPage.js"

const login = new LoginPage()
const dashboard = new DashboardPage()

describe('Orange HRM Login', () => {

  it('Login - Success', () => {
    login.accessLoginPage()
    login.login(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.validateLogin()
  })

  it('Login - Fail', () => {
    login.accessLoginPage()
    login.login(userData.userFail.username, userData.userFail.password)
    login.validateErrorMessage()
  })


})