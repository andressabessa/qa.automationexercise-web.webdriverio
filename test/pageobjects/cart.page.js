import { $, $$ } from '@wdio/globals'
import { element } from '../elements/cart.elements.js'

export class CartPage {
  get cartTable() {
    return $(element.cartTable)
  }

  get cartItems() {
    return $$(element.cartItems)
  }

  async verifyCartIsDisplayed() {
    await expect(this.cartTable).toBeDisplayed()
  }

  async clickDelete(productIndex = 0) {
    const deleteButtons = await $$(element.deleteButton)
    if (deleteButtons.length > productIndex) {
      await deleteButtons[productIndex].click()
    } else {
      throw new Error(`Botão de deletar no índice ${productIndex} não encontrado`)
    }
  }

  async verifyProductExistsInCart(productName) {
    const productNames = await $$(element.productNameInCart)
    let found = false

    for (const nameElement of productNames) {
      const name = await nameElement.getText()
      if (name === productName) {
        found = true
        break
      }
    }

    expect(found).toBe(true)
  }

  async verifyProductQuantity(productName, expectedQuantity) {
    const productNames = await $$(element.productNameInCart)
    const quantities = await $$(element.productQuantityInCart)
    let found = false

    for (let i = 0; i < productNames.length; i++) {
      const name = await productNames[i].getText()
      if (name === productName) {
        const quantity = await quantities[i].getText()
        expect(parseInt(quantity)).toBe(expectedQuantity)
        found = true
        break
      }
    }

    if (!found) {
      throw new Error(`Produto "${productName}" não encontrado no carrinho`)
    }
  }
}
