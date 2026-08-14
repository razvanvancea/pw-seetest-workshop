import { test as base, type Page } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { HeaderPage } from './pages/header.page';

interface PageFixtures {
  loginPage: LoginPage;
  headerPage: HeaderPage;
}

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }: { page: Page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  headerPage: async ({ page }: { page: Page }, use) => {
    const headerPage = new HeaderPage(page);
    await use(headerPage);
  },
});

export { expect } from '@playwright/test';
