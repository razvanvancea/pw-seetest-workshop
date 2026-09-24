import { type Locator, type Page } from '@playwright/test';

export class HeaderPage {
  readonly page: Page;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutBtn = page.getByRole('link', { name: 'Log Out' });
  }
}
