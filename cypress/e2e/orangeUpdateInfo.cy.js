import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginpage.js"
import DashboardPage from "../pages/dashboardPage.js"
import InfoPage from "../pages/infoPage.js"
import MenuPage from "../pages/menuPage.js"

const login = new LoginPage()
const dashboard = new DashboardPage()
const info = new InfoPage()
const menu = new MenuPage()

describe('Orange HRM Update Info', () => {
  it('User Info Update', () => {
    login.accessLoginPage()
    login.login(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.validateLogin()
    menu.accessMyInfo()
    info.updatePersonalDetails('Teste', 'de', 'Cypress')
    info.updateEmployeeDetails('EmployeeID', 'OtherID', 'Driver')
    info.updateOtherDetails('18-07-1994')
    info.saveInfo()
  })
})