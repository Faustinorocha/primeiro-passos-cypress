import userData from '../fixtures/users/userdata.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[type="submit"]',
      wrongCreadentialAlert: '[role="alert"]'
    
    }
  
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.oxd-table-filter-header-title > .oxd-text')
    
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCreadentialAlert)
  })
})