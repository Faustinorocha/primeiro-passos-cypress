import userData from '../fixtures/users/userdata.json'
import LoginPage from '../pages/loginPage'
import MyInfoPage from '../pages/myInforPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const infoPage = new MyInfoPage() 
const dashboardpage = new DashboardPage()

describe('Orange HRM Tests', () => {

  
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardpage.selectorslist()
    infoPage.accessInfoPage()
    infoPage.infoPageUser(userData.nameInfoPage.firstName, userData.nameInfoPage.meddleName, userData.nameInfoPage.lastName)
    
    cy.get('body').should('contain', 'Success')

    
  })
  it('Login - Fail', () => {
     loginPage.accessLoginPage()
     loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
     loginPage.checkwrong()
    
  })
})