import { HomePage } from '../pageobjects/home.page.js'
import { ProductsPage } from '../pageobjects/products.page.js'
import { CartPage } from '../pageobjects/cart.page.js'

const homePage = new HomePage()
const productsPage = new ProductsPage()
const cartPage = new CartPage()

describe('Funcionalidade: Adicionar produtos ao carrinho', () => {
  beforeEach(async () => {
    await homePage.open()
    await homePage.clickProductsButton()
  })

  it('CT01: Deve adicionar múltiplos produtos ao carrinho com sucesso', async () => {
    // Arrange
    const expectedProductsCount = 2

    // Act
    await productsPage.hoverOverProduct(0)
    await productsPage.clickAddToCartFromList(0)
    await productsPage.verifySuccessMessage()
    await productsPage.clickContinueShopping()

    await productsPage.hoverOverProduct(1)
    await productsPage.clickAddToCartFromList(1)
    await productsPage.verifySuccessMessage()
    await productsPage.clickViewCart()

    // Assert
    await expect(browser).toHaveUrl(/\/view_cart/)
    await cartPage.verifyCartIsDisplayed()
  })
})
