import { element } from '../elements/products.elements.js'

export class ProductsPage {
  get searchInput() {
    return $(element.searchInput)
  }

  get searchButton() {
    return $(element.searchButton)
  }

  get searchedProductsTitle() {
    return $(element.searchedProductsTitle)
  }

  get productItems() {
    return $$(element.productItems)
  }

  get productNames() {
    return $$(element.productNames)
  }

  get addToCartButtons() {
    return $$(element.addToCartButtons)
  }

  get continueShoppingButton() {
    return $(element.continueShoppingButton)
  }

  get firstProductViewButton() {
    return $(element.firstProductViewButton)
  }

  get productName() {
    return $(element.productName)
  }

  get productPrice() {
    return $(element.productPrice)
  }

  get quantityInput() {
    return $(element.quantityInput)
  }

  get addToCartButton() {
    return $(element.addToCartButton)
  }

  get viewCartButton() {
    return $(element.viewCartButton)
  }

  get successMessage() {
    return $(element.successMessage)
  }

  async clickFirstProductView() {
    await expect(this.firstProductViewButton).toBeDisplayed()
    await this.firstProductViewButton.click()
  }

  async searchProduct(productName) {
    await expect(this.searchInput).toBeDisplayed()
    await this.searchInput.setValue(productName)

    await expect(this.searchButton).toBeDisplayed()
    await this.searchButton.click()
  }

  async verifySearchedProductsTitle() {
    await expect(this.searchedProductsTitle).toBeDisplayed()
    const titleText = await this.searchedProductsTitle.getText()
    expect(titleText).toContain('SEARCHED PRODUCTS')
  }

  async verifyProductsAreVisible() {
    await expect(this.productItems).toBeElementsArrayOfSize({ gte: 1 })

    const products = await this.productItems
    expect(products.length).toBeGreaterThan(0)

    for (let i = 0; i < products.length; i++) {
      await expect(products[i]).toBeDisplayed()
    }
  }

  async getProductNames() {
    const productNames = await this.productNames
    const names = []
    for (let i = 0; i < productNames.length; i++) {
      const name = await productNames[i].getText()
      names.push(name)
    }
    return names
  }

  async getProductDetails() {
    const name = await this.productName.getText()
    const price = await this.productPrice.getText()
    return { name, price }
  }

  async setQuantity(quantity) {
    await expect(this.quantityInput).toBeDisplayed()
    await this.quantityInput.clearValue()
    await this.quantityInput.setValue(quantity.toString())
  }

  async clickAddToCart() {
    await expect(this.addToCartButton).toBeDisplayed()
    await this.addToCartButton.click()
  }

  async clickViewCart() {
   
    await browser.pause(1000)

    await expect(this.viewCartButton).toBeDisplayed()

    
    await this.viewCartButton.click()
  }

  async verifySuccessMessage() {
    
    await browser.pause(1000)

    await expect(this.successMessage).toBeDisplayed()

    
    await this.successMessage.waitForDisplayed({ timeout: 10000 })

    const messageText = await this.successMessage.getText()
    expect(messageText).toContain('Added!')
  }

  async hoverOverProduct(index = 0) {
    const productItems = await this.productItems
    await expect(productItems[index]).toBeDisplayed()

   
    await browser.pause(1000)

   
    await productItems[index].scrollIntoView()
    await browser.pause(500)

    
    await productItems[index].moveTo()
    await browser.pause(1000)
  }

  async clickAddToCartFromList(index = 0) {
   
    await browser.pause(1000)

    const addToCartButtons = await this.addToCartButtons
    await expect(addToCartButtons[index]).toBeDisplayed()

    await addToCartButtons[index].scrollIntoView()
    await browser.pause(500)

    
    await browser.executeScript('arguments[0].click();', [
      addToCartButtons[index],
    ])
  }

  async clickContinueShopping() {
  
    await browser.pause(1000)

    await expect(this.continueShoppingButton).toBeDisplayed()

 
    await this.continueShoppingButton.click()


    await browser.pause(1000)
  }
}
