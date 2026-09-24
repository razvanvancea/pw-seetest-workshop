import { test } from '../../fixtures';

test.describe('Setup check: User authentication test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('the user should be able to login', async ({ loginPage }) => {
    await loginPage.login('admin@admin.com', 'admin123');
  });
});
