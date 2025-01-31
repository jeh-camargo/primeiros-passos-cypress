import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage

describe('Orange HRM Tests', () => {

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) 
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmploydId', 'otherId', chance.ssn({ dashes: false }), '2025-01-28')
    myInfoPage.fillStatus('1990-12-10')
    myInfoPage.saveForm() 
    myInfoPage.fillCustom('789')
    myInfoPage.saveFormCustom()
     
  })

})