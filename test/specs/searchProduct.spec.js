import { HomePage } from '../pageobjects/home.page.js'
import { ProductsPage } from '../pageobjects/products.page.js'

const homePage = new HomePage()
const productsPage = new ProductsPage()

describe('Funcionalidade: Busca de Produtos', () => {
  beforeEach(async () => {
    await homePage.open()
    await homePage.clickProductsButton()
  })

  it('CT01: Deve buscar produtos com sucesso', async () => {
    // Arrange
    const productToSearch = 'Blue Top'

    // Act
    await productsPage.searchProduct(productToSearch)

    // Assert
    await productsPage.verifySearchedProductsTitle()
    await productsPage.verifyProductsAreVisible()
    const foundProducts = await productsPage.getProductNames()
    expect(foundProducts.length).toBeGreaterThan(0)
  })

  it('CT02: Deve buscar produtos com termo genérico', async () => {
    // Arrange
    const genericSearchTerm = 'shirt'

    // Act
    await productsPage.searchProduct(genericSearchTerm)

    // Assert
    await productsPage.verifySearchedProductsTitle()
    await productsPage.verifyProductsAreVisible()
    const foundProducts = await productsPage.getProductNames()
    expect(foundProducts.length).toBeGreaterThan(0)
  })

  it('CT03: Deve buscar produtos com termo inexistente', async () => {
    // Arrange
    const nonExistentProduct = 'ProdutoInexistente123'

    // Act
    await productsPage.searchProduct(nonExistentProduct)

    // Assert
    await productsPage.verifySearchedProductsTitle()
    const foundProducts = await productsPage.getProductNames()
    expect(foundProducts.length).toBe(0)
  })
})
