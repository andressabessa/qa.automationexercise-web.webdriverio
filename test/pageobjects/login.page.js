import { element } from '../elements/login.elements.js'
import { faker } from '@faker-js/faker'

export class LoginPage {
  get nameInput() {
    return $(element.nameInput)
  }

  get emailInput() {
    return $(element.emailInput)
  }

  get signupButton() {
    return $(element.signupButton)
  }

  async fillNameAndEmail() {
    const name = faker.person.fullName()
    const email = faker.internet.email()

    await expect(this.nameInput).toBeDisplayed()
    await this.nameInput.setValue(name)

    await expect(this.emailInput).toBeDisplayed()
    await this.emailInput.setValue(email)
  }

  async clickButtonSignup() {
    await expect(this.signupButton).toBeDisplayed()
    await this.signupButton.click()
  }
};