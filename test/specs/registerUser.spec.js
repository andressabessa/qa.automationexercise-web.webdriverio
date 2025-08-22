import { HomePage } from '../pageobjects/home.page.js'
import { LoginPage } from '../pageobjects/login.page.js'
import { RegisterPage } from '../pageobjects/register.page.js'

const homePage = new HomePage()
const loginPage = new LoginPage()
const registerPage = new RegisterPage()

describe('Funcionalidade: Cadastro', () => {
  beforeEach(async () => {
    await homePage.open('/')
  })
  
  it('CT01: Deve cadastrar um usuário com sucesso', async () => {
    // Arrange - O ambiente já foi preparado no beforeEach (navegação para página inicial)
    
    // Act - Executando as ações do teste
    await homePage.clickSignupLogin()
    await loginPage.fillNameAndEmail()
    await loginPage.clickButtonSignup()
    await registerPage.fillPersonalDetails()
    await registerPage.selectNewsletter()
    await registerPage.selectSpecialOffers()
    await registerPage.fillAddressDetails()
    await registerPage.clickCreateAccount()
    await registerPage.clickContinue()
    await registerPage.clickDeleteAccount()
    
    // Assert - Verificando se o resultado é o esperado
    await registerPage.verifyAccountDeleted()
    await registerPage.clickContinue()
  })
})
