import { test, expect } from '../../fixtures';

test.describe('Optional fundamentals test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  /**
   * OPTIONAL Exercise 4: create a test that tries to login with invalid credentials and verify that the appropriate error message is displayed
   * Hint: you can reuse existing test steps or create new ones using the codegen feature
   *
   * OPTIONAL Exercise 5: add a @smoke tag to this test and run only smoke tests from CLI
   *
   * OPTIONAL Exercise 6: run this test in debug mode and use Playwright Inspector to analyze the test execution, step by step
   *
   * OPTIONAL Exercise 7: run only the test that tries to login with invalid credentials, 10 times in a row, from CLI
   * */

  //   test('ex 4-7: the user should see an error message when logging in with invalid credentials', async ({
  //     page,
  //   }) => {
  //   });
});
