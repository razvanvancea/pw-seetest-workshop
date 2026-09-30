## Playwright Testing Guidelines

### Code Quality Standards
- **Locators**: Prioritize user-facing, role-based locators (`getByRole`, `getByLabel`, `getByText`, etc.) for resilience and accessibility.
- **Assertions**: Use auto-retrying web-first assertions (e.g., `await expect(locator).toHaveText()`). Use `toBeVisible()` when visibility itself is part of the behavior being tested; otherwise, prefer an assertion that verifies the expected state or content.
- **Timeouts**: Rely on Playwright's built-in auto-waiting mechanisms. Avoid hard-coded waits or increased default timeouts.
- **Clarity**: Use descriptive test titles that clearly state the intent. Add comments only to explain complex logic or non-obvious interactions.


### Test Structure
- **Imports**: Import `test` and `expect` from `../../page-fixtures` in specs under `tests/e2e/` so tests can use the project's registered page-object fixtures.
- **Organization**: Group related tests for a feature under a `test.describe()` block.
- **Hooks**: Use `beforeEach` for setup actions common to all tests in a `describe` block (e.g., navigating to a page).
- **Titles**: Follow a clear naming convention, such as `Feature - Specific action or scenario`.


### File Organization
- **Location**: Store all test files in the `tests/` directory.
- **Naming**: Use the convention `<feature-or-page>.spec.ts` (e.g., `login.spec.ts`, `search.spec.ts`).
- **Scope**: Aim for one test file per major application feature or page.

### Assertion Best Practices
- **UI Structure**: Use `toMatchAriaSnapshot` when the accessibility tree structure is what the test needs to verify. For focused behavior checks, prefer assertions on the relevant role, text, value, or URL.
- **Element Counts**: Use `toHaveCount` to assert the number of elements found by a locator.
- **Text Content**: Use `toHaveText` for exact text matches and `toContainText` for partial matches.
- **Navigation**: Use `toHaveURL` to verify the page URL after an action.


## Example Test Structure

```typescript
import { test, expect } from '../../page-fixtures';

test.describe('User authentication test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('the user should be able to login', async ({ loginPage, headerPage }) => {
    await loginPage.login('admin@admin.com', 'admin123');
    await expect(headerPage.logoutBtn).toBeVisible();
  });
});
```

## Test Execution Strategy

1. **Initial Run**: Execute tests with `npx playwright test`
2. **Debug Failures**: Analyze test failures and identify root causes
3. **Iterate**: Refine locators, assertions, or test logic as needed
4. **Validate**: Ensure tests pass consistently and cover the intended functionality
5. **Report**: Provide feedback on test results and any issues discovered

## Quality Checklist — E2E Tests

Before finalizing tests, ensure:
- [ ] All locators are accessible and specific and avoid strict mode violations
- [ ] Tests are grouped logically and follow a clear structure
- [ ] Assertions are meaningful and reflect user expectations
- [ ] Tests follow consistent naming conventions
- [ ] Code is properly formatted and commented


---

## Page Object Model (POM) Guidelines

### Structure & Naming
- **Location**: Store all page objects in the `pages/` directory with naming convention `<feature>.page.ts` (e.g., `login.page.ts`, `header.page.ts`).
- **Class Pattern**: Export a class named `<Feature>Page` (e.g., `LoginPage`, `HeaderPage`).
- **Constructor**: Accept `page: Page` as the only parameter and assign it as `this.page`.

### Locator Declarations
- **Typed Properties**: Declare all locators as `readonly` properties with explicit type annotations:
  ```typescript
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  ```
- **Locator Strategy**: Prioritize in order:
  1. **Roles**: `page.getByRole('button', { name: 'Login' })`
  2. **Labels**: `page.getByLabel('Email')`
  3. **Text**: `page.getByText('Sign In')`
  4. **Test IDs**: `page.getByTestId('email')` when an accessible locator is unavailable or ambiguous
  5. **Avoid**: CSS selectors or XPath unless absolutely necessary

### Action Methods
- **Method Purpose**: Encapsulate user interactions and assertions that are specific to a page feature.
- **Naming**: Use verb-first naming (e.g., `login()`, `fillEmail()`, `submitForm()`).
- **Async Pattern**: All methods must be `async`.
- **Return Values**: Return `void` unless the method chains to another page object.
- **Assertions**: Include minimal assertions to verify actions completed (e.g., asserting successful login state).

### Example POM Structure
```typescript
import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInUsername: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loggedInUsername = page.getByTestId('nav-menu');
  }

  async login(email: string, password: string, expectedUsername: string = 'John Doe') {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.loggedInUsername).toContainText(expectedUsername);
  }
}
```

### Fixture Registration
- **Location**: Register page objects as fixtures in `page-fixtures.ts`.
- **Pattern**: Extend Playwright's `test` with a custom interface and provide setup logic:
  ```typescript
  interface PageFixtures {
    loginPage: LoginPage;
  }
  
  export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
    },
  });
  ```

### Quality Checklist — Page Objects
- [ ] Class name matches file name (LoginPage in login.page.ts)
- [ ] All locators are readonly with explicit Locator type
- [ ] Locators prefer accessible role, label, or text strategies, using test IDs when needed
- [ ] Action methods are async and encapsulate complete user flows
- [ ] Registered as fixtures in `page-fixtures.ts`
- [ ] No hardcoded waits or timeouts
