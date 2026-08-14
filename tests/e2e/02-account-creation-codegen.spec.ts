import { test, expect } from '../../fixtures';
import { faker } from '@faker-js/faker';

test.describe('Account creation codegen test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  /**
   * Exercise 3A: use the codegen feature and record the test for creating an account
   * Exercise 3B: refactor the test by removing unnecessary steps and add assertions to verify that the account was created successfully
   * Exercise 3C: use faker library to generate random unique email address for each test run
   * 3C Note: feel free to use the randomEmail constant to fill the email address. It creates a random email address using the faker library and can be used to ensure that each test run uses a unique email address
   */
  //   test('ex 3: the user should be able to create a new account', async ({ page }) => {
  //     const randomEmail = faker.internet.email();
  //   });
});
