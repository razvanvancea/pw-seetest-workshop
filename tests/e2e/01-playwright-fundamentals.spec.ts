import { test, expect } from '../../page-fixtures';

test.describe('Fundamentals test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  /**
   *Exercise 1: debug the test below and make it pass
   */
  // test('ex 1: the user should be able to logout', async ({ loginPage, headerPage, page }) => {
  //   await loginPage.login('admin@admin.com', 'admin123');
  //   await page.locator('a.header-logout').click();
  //   await expect(headerPage.logoutBtn).not.toBeVisible();
  // });

  /**
   * Exercise 2: use the codegen feature and record the test switching language to ES on the login page and verify that the language has been changed successfully
   */
  //   test('ex 2: the user should be able change the language to ES on the login page', async ({ page }) => {
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
