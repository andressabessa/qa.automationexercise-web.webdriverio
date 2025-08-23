import { HomePage } from '../pageobjects/home.page.js'
import { ProductsPage } from '../pageobjects/products.page.js'
import { CartPage } from '../pageobjects/cart.page.js'

const homePage = new HomePage()
const productsPage = new ProductsPage()
const cartPage = new CartPage()

describe('Funcionalidade: Verificar quantidade de produto no carrinho', () => {
  beforeEach(async () => {
    await homePage.open()
  })

  it('CT01: Deve verificar quantidade de produto no carrinho', async () => {
    // Arrange
    const expectedQuantity = 4

    // Act
    await productsPage.clickFirstProductView()
    const productDetails = await productsPage.getProductDetails()
    const productName = productDetails.name

    await productsPage.setQuantity(expectedQuantity)
    await productsPage.clickAddToCart()
    await productsPage.verifySuccessMessage()
    await productsPage.clickViewCart()

    // Assert
    await cartPage.verifyCartIsDisplayed()
    await cartPage.verifyProductExistsInCart(productName)
    await cartPage.verifyProductQuantity(productName, expectedQuantity)
  })
})
