import userData from '../fixtures/users/userdata.json'
import LoginPage from '../pages/loginPage'
import MyInfoPage from '../pages/myInforPage.js'

const loginPage = new LoginPage()
const infoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

    const selectorsList = {
      // usernameField: '[name="username"]',
      // passwordField: '[name="password"]',
      // loginButton: '[type="submit"]',
      dashboardGrid: ".orangehrm-dashboard-grid",
      wrongCreadentialAlert: '[role="alert"]',
      // myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      // firstNameField: "[name='firstName']",
      // middleNameFied: "[name='middleName']",
      // lastNameField: "[name='lastName']",
      // submitButton: "[type='submit']",
      // comboboxnationalityselection: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
      // comboboxmaritalselection: ":nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input",
      // nationalityselection: ":nth-child(4) > span",
      // maritalselection: ".oxd-select-dropdown > :nth-child(3) > span"
    }
  
  it.only('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    // cy.visit('/auth/login')
    // cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    // cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    // cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    infoPage.accessInfoPage()
    infoPage.infoPageUser(userData.nameInfoPage.firstName, userData.nameInfoPage.meddleName, userData.nameInfoPage.lastName)
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('Hermenegildo')
    // cy.get(selectorsList.middleNameFied).clear().type('Zedek')
    // cy.get(selectorsList.lastNameField).clear().type('Pereira')
    // cy.get(selectorsList.comboboxnationalityselection).click()
    // cy.get(selectorsList.nationalityselection).click()
    //  cy.get(selectorsList.comboboxmaritalselection).click()
    // cy.get(selectorsList.maritalselection).click()
    // cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Success')

    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCreadentialAlert)
  })
})