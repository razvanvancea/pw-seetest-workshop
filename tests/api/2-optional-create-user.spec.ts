import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

/**
 * Uncomment the following test that creates a new user and fix it to make it pass
 */

// test('create user test', async ({ request }) => {
//   const randomEmail = faker.internet.email();

//   const requestBody = {
//     first_name: `${faker.person.firstName()}`,
//     last_name: `${faker.person.lastName()}`,
//     address: {
//       street: 'Street 1',
//       house_number: '12',
//       city: 'City',
//       state: 'State',
//       country: 'Country',
//       postal_code: '1234AA',
//     },
//     phone: '0987654321',
//     dob: '1970-01-01',
//     password: 'SuperSecure@123',
//     email: randomEmail,
//   };

//   const response = await request.post(`/users/register`, {
//     data: requestBody,
//   });

//   const respBody = await response.json();

//   expect(respBody.email).toBe(randomEmail);

//   expect(response.status()).toBe(200);
// });
