import { test, expect } from '../../page-fixtures';

test.describe('Validate shipping details and place a sandbox order', () => {
  test('Validate shipping details and place a sandbox order', async ({ page, loginPage, headerPage }) => {
    await page.goto('/');
    await loginPage.login('admin@admin.com', 'admin123');
    await expect(headerPage.logoutBtn).toBeVisible();
    await expect(page.getByText('Essence Mascara Lash Princess')).toBeVisible();
    await page.getByRole('button', { name: 'ADD TO CART' }).first().click();

    // 1. Select PROCEED TO CHECKOUT and submit with shipping fields empty.
    await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
    await expect(page.getByRole('heading', { name: 'Shipping Details' })).toBeVisible();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await expect(page.getByRole('heading', { name: 'Shipping Details' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Order Confirmed!' })).toHaveCount(0);

    // 2. Fill shipping details, keep the default payment option, and select Place Order.
    await page.getByRole('textbox', { name: 'Phone Number *' }).fill('+1 (555) 123-4567');
    await page.getByRole('textbox', { name: 'Street Address *' }).fill('123 Main Street, Apt 4B');
    await page.getByRole('textbox', { name: 'City *' }).fill('New York');
    await page.getByRole('combobox').nth(1).selectOption('United States of America');
    await page.getByRole('button', { name: 'Place Order' }).click();

    // 3. Verify the confirmation includes the expected shipping details and $24.99 total.
    await expect(page.getByRole('heading', { name: 'Order Confirmed!' })).toBeVisible();
    await expect(page.getByText('123 Main Street, Apt 4B, New York, United States of America', { exact: true })).toBeVisible();
    await expect(page.getByText('+1 (555) 123-4567', { exact: true })).toBeVisible();
    await expect(page.getByText('$24.99', { exact: true })).toBeVisible();
  });
});