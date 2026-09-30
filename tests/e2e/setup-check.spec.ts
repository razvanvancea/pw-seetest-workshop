import { test, expect } from '../../page-fixtures';

test.describe('Setup check: User authentication test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('the user should be able to login', async ({ loginPage, headerPage }) => {
    await loginPage.login('admin@admin.com', 'admin123');
    await expect(headerPage.logoutBtn).toBeVisible();
  });
});
