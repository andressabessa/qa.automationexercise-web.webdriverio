import { element } from '../elements/register.elements.js'
import { faker } from '@faker-js/faker'

export class RegisterPage {
  get titleMr() {
    return $(element.titleMr)
  }

  get titleMrs() {
    return $(element.titleMrs)
  }

  get nameInput() {
    return $(element.nameInput)
  }

  get emailInput() {
    return $(element.emailInput)
  }

  get passwordInput() {
    return $(element.passwordInput)
  }

  get birthDaySelect() {
    return $(element.birthDaySelect)
  }

  get birthMonthSelect() {
    return $(element.birthMonthSelect)
  }

  get birthYearSelect() {
    return $(element.birthYearSelect)
  }

  get newsletterCheckbox() {
    return $(element.newsletterCheckbox)
  }

  get specialOffersCheckbox() {
    return $(element.specialOffersCheckbox)
  }

  get firstNameInput() {
    return $(element.firstNameInput)
  }

  get lastNameInput() {
    return $(element.lastNameInput)
  }

  get companyInput() {
    return $(element.companyInput)
  }

  get address1Input() {
    return $(element.address1Input)
  }

  get address2Input() {
    return $(element.address2Input)
  }

  get countrySelect() {
    return $(element.countrySelect)
  }

  get stateInput() {
    return $(element.stateInput)
  }

  get cityInput() {
    return $(element.cityInput)
  }

  get zipcodeInput() {
    return $(element.zipcodeInput)
  }

  get mobileNumberInput() {
    return $(element.mobileNumberInput)
  }

  get createAccountButton() {
    return $(element.createAccountButton)
  }

  get continueButton() {
    return $(element.continueButton)
  }

  get deleteAccountButton() {
    return $(element.deleteAccountButton)
  }

  get accountDeletedMessage() {
    return $(element.accountDeletedMessage)
  }

  async fillPersonalDetails() {
    await expect(this.titleMr).toBeDisplayed()
    await this.titleMr.click()

    const name = faker.person.fullName()
    await expect(this.nameInput).toBeDisplayed()
    await this.nameInput.setValue(name)

    const password = faker.internet.password()
    await expect(this.passwordInput).toBeDisplayed()
    await this.passwordInput.setValue(password)

    const day = '15'
    const month = 'January'
    const year = '1990'

    await expect(this.birthDaySelect).toBeDisplayed()
    await this.birthDaySelect.selectByVisibleText(day)

    await expect(this.birthMonthSelect).toBeDisplayed()
    await this.birthMonthSelect.selectByVisibleText(month)

    await expect(this.birthYearSelect).toBeDisplayed()
    await this.birthYearSelect.selectByVisibleText(year)
  }

  async selectNewsletter() {
    await expect(this.newsletterCheckbox).toBeDisplayed()
    await this.newsletterCheckbox.click()
  }

  async selectSpecialOffers() {
    await expect(this.specialOffersCheckbox).toBeDisplayed()
    await this.specialOffersCheckbox.click()
  }

  async fillAddressDetails() {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const company = faker.company.name()
    const address1 = faker.location.streetAddress()
    const address2 = faker.location.secondaryAddress()
    const state = faker.location.state()
    const city = faker.location.city()
    const zipcode = faker.location.zipCode()
    const mobileNumber = faker.phone.number()

    await expect(this.firstNameInput).toBeDisplayed()
    await this.firstNameInput.setValue(firstName)

    await expect(this.lastNameInput).toBeDisplayed()
    await this.lastNameInput.setValue(lastName)

    await expect(this.companyInput).toBeDisplayed()
    await this.companyInput.setValue(company)

    await expect(this.address1Input).toBeDisplayed()
    await this.address1Input.setValue(address1)

    await expect(this.address2Input).toBeDisplayed()
    await this.address2Input.setValue(address2)

    await expect(this.countrySelect).toBeDisplayed()
    await this.countrySelect.selectByVisibleText('United States')

    await expect(this.stateInput).toBeDisplayed()
    await this.stateInput.setValue(state)

    await expect(this.cityInput).toBeDisplayed()
    await this.cityInput.setValue(city)

    await expect(this.zipcodeInput).toBeDisplayed()
    await this.zipcodeInput.setValue(zipcode)

    await expect(this.mobileNumberInput).toBeDisplayed()
    await this.mobileNumberInput.setValue(mobileNumber)
  }

  async clickCreateAccount() {
    await expect(this.createAccountButton).toBeDisplayed()
    await this.createAccountButton.click()
  }

  async clickContinue() {
    await expect(this.continueButton).toBeDisplayed()
    await this.continueButton.click()
  }

  async clickDeleteAccount() {
    await expect(this.deleteAccountButton).toBeDisplayed()
    await this.deleteAccountButton.click()
  }

  async verifyAccountDeleted() {
    await expect(this.accountDeletedMessage).toBeDisplayed()
    await expect(this.accountDeletedMessage).toHaveText('ACCOUNT DELETED!')
  }
}
