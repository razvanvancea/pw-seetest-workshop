import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 15000,
  expect: {
    timeout: 15000,
  },
  testDir: './tests/api/',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  use: {
    baseURL: `${process.env.BASE_URL || 'https://api.practicesoftwaretesting.com'}`,
    trace: 'retain-on-failure',
    video: 'off',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
});
