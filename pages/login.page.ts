import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly languageButton: Locator;
  readonly languageSelect: Locator;
  readonly loginSection: Locator;
  readonly errorAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByTestId('submitBtn');
    this.languageButton = page.getByRole('button', { name: 'LANG' });
    this.languageSelect = page.getByLabel('Language', { exact: true });
    this.loginSection = page.locator('#loginSection');
    this.errorAlert = page.getByRole('alert');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithInvalidCredentials(email: string, password: string, expectedMessage: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.errorAlert).toContainText(expectedMessage);
  }

  async changeLanguage(languageCode: string, expectedText: string) {
    await this.languageButton.click();
    await this.languageSelect.selectOption(languageCode);
    await expect(this.loginSection).toContainText(expectedText);
  }
}
