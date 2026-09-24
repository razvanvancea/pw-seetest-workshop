import { test, expect } from '../../fixtures';

test.describe('Fundamentals test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  /**
   *Exercise 1: debug the test below and make it pass
   */
  //   test('ex 1: the user should be able to logout', async ({ loginPage, page }) => {
  //     await loginPage.login('admin@practicesoftwaretesting.com', 'welcome01');
  //     await page.locator('[data-test="nav-sign-out"]').click();
  //     await expect(page.locator('[data-test="nav-sign-in"]')).toContainText('Sign in');
  //   });

  /**
   * Exercise 2: use the codegen feature and record the test switching language to ES and verify that the language has been changed successfully
   */
  //   test('ex 2: the user should be able change the language to ES', async ({ page }) => {
  //   });

  /**
   * Quality checkpoint:
   *
   * Before moving forward, run from CLI:
   * npm run format
   * npm run lint
   * npm run test
   */
});
