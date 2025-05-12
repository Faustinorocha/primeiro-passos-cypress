import userData from '../fixtures/users/userdata.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[type="submit"]',
      dashboardGrid: ".orangehrm-dashboard-grid",
      wrongCreadentialAlert: '[role="alert"]',
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      firstNameField: "[name='firstName']",
      middleNameFied: "[name='middleName']",
      lastNameField: "[name='lastName']",
      submitButton: "[type='submit']"
    
    }
  
  it.only('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Antonio')
    cy.get(selectorsList.middleNameFied).clear().type('Faustino')
    cy.get(selectorsList.lastNameField).clear().type('da Rocha Neto')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Exito')

    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCreadentialAlert)
  })
})