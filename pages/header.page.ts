import { type Locator, type Page } from '@playwright/test';

export class HeaderPage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly userMenuOptionsBtn: Locator;
  readonly signOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.getByTestId('nav-sign-in');
    this.userMenuOptionsBtn = page.getByTestId('nav-menu');
    this.signOutButton = page.getByTestId('nav-sign-out');
  }
}
