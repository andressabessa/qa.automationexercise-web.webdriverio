import { faker } from '@faker-js/faker'

export const userData = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  company: faker.company.name(),
  address: faker.location.streetAddress(),
  address2: faker.location.secondaryAddress(),
  country: 'United States',
  state: faker.location.state(),
  city: faker.location.city(),
  zipcode: faker.location.zipCode(),
  mobileNumber: faker.phone.number(),
  birthDay: '15',
  birthMonth: 'March',
  birthYear: '1990'
} 