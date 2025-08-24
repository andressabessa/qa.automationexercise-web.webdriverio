import { element } from '../elements/home.elements.js'

export class HomePage {
  async open() {
    await browser.url('https://automationexercise.com/')
  }

  async clickSignupLogin() {
    const signupLoginButton = await $(element.signupLoginButton)
    await expect(signupLoginButton).toBeDisplayed()
    await signupLoginButton.click()
  }

  async clickProductsButton() {
    const productsButton = await $('a[href="/products"]')
    await expect(productsButton).toBeDisplayed()
    await productsButton.click()
  }
}
