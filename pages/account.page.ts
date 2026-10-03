import { expect, type Locator, type Page } from '@playwright/test';

export class AccountPage {
  readonly page: Page;
  readonly createAccountLink: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly phoneInput: Locator;
  readonly countrySelect: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly termsCheckbox: Locator;
  readonly createAccountButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createAccountLink = page.getByRole('link', { name: 'Create account' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone number' });
    this.countrySelect = page.getByLabel('Country');
    this.emailInput = page.getByRole('textbox', { name: 'Email address *' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
    this.termsCheckbox = page.getByRole('checkbox', { name: 'I agree with the terms and' });
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.successMessage = page.locator('#message');
  }

  async createAccount(input: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    email: string;
    password: string;
  }) {
    await this.createAccountLink.click();
    await this.firstNameInput.fill(input.firstName);
    await this.lastNameInput.fill(input.lastName);
    await this.phoneInput.fill(input.phoneNumber);
    await this.countrySelect.selectOption(input.country);
    await this.emailInput.fill(input.email);
    await this.passwordInput.fill(input.password);
    await this.termsCheckbox.check();
    await this.createAccountButton.click();
    await expect(this.successMessage).toContainText('Success!');
  }
}
