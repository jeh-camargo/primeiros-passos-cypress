import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericComboBoxButton: ".oxd-select-text--active",
    firstItemComboBox: '.oxd-select-dropdown > :nth-child(27)',
    secondItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
    thirdItemComboBox: '.oxd-select-dropdown > :nth-child(6)',
    genderField: ".oxd-radio-wrapper",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    
  }

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) 
    
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    //cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseNumberTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genderField).eq(1).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('1990-10-12')
    cy.get(selectorsList.dateCloseButton).click({force: true})
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericComboBoxButton).eq(0).click()
    cy.get(selectorsList.firstItemComboBox).click()
    cy.get(selectorsList.genericComboBoxButton).eq(1).click()
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.genericComboBoxButton).eq(2).click()
    cy.get(selectorsList.thirdItemComboBox).click()
    cy.get(selectorsList.genericField).eq(9).clear().type('500')
    cy.get(selectorsList.submitButton).eq(1).click({force: true})
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get('.oxd-toast-close')
    
    
  })
  it('Login - Fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordFiel).type(userData.userFail.password)
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredencialAlert)
  })
})