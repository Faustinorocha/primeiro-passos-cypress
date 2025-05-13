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
      submitButton: "[type='submit']",
      comboboxnationalityselection: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
      comboboxmaritalselection: ":nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input",
      nationalityselection: ":nth-child(4) > span",
      maritalselection: ".oxd-select-dropdown > :nth-child(2) > span"
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
    cy.get(selectorsList.comboboxnationalityselection).click()
    cy.get(selectorsList.nationalityselection).click()
     cy.get(selectorsList.comboboxmaritalselection).click()
    cy.get(selectorsList.maritalselection).click()
    cy.get(selectorsList.submitButton).eq(0).click()
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