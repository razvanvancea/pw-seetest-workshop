import { expect, type Locator, type Page } from '@playwright/test';
import { HeaderPage } from './header.page';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInUsername: Locator;
  readonly wrongCredsTextError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-submit');
    this.loggedInUsername = page.getByTestId('nav-menu');
    this.wrongCredsTextError = page.getByText('Invalid email or password');
  }

  async login(email: string, password: string) {
    const headerPage = new HeaderPage(this.page);
    await headerPage.signInButton.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.wrongCredsTextError).not.toBeVisible();
    await expect(headerPage.signInButton).not.toBeVisible();
  }
}
