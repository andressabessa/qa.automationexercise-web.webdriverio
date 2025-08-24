import { HomePage } from '../pageobjects/home.page.js'
import { ProductsPage } from '../pageobjects/products.page.js'
import { CartPage } from '../pageobjects/cart.page.js'

const homePage = new HomePage()
const productsPage = new ProductsPage()
const cartPage = new CartPage()

describe('Funcionalidade: Remover Produtos do Carrinho', () => {
  beforeEach(async () => {
    await homePage.open()
    await homePage.clickProductsButton()
  })

  it('CT01: Deve remover produto do carrinho com sucesso', async () => {
    // Arrange
    const productIndex = 0

    // Act
    await productsPage.hoverOverProduct(productIndex)
    await productsPage.clickAddToCartFromList(productIndex)
    await productsPage.verifySuccessMessage()
    await productsPage.clickViewCart()

    const cartItemsBefore = await cartPage.cartItems
    await expect(cartItemsBefore).toHaveLength(1)

    await cartPage.clickDelete(productIndex)

    // Assert
    await browser.waitUntil(
      async () => {
        const cartItemsAfter = await cartPage.cartItems
        return cartItemsAfter.length === 0
      },
      {
        timeout: 5000,
        timeoutMsg:
          'Produto não foi removido do carrinho dentro do tempo esperado',
      }
    )
  })
})
