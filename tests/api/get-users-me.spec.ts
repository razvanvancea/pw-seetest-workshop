import { test, expect } from '@playwright/test';
import getJwtToken from '../../lib/api/get-token';

test.describe('Bearer JWT get /users/me test suite', async () => {
  let jwtToken = '';

  test.beforeAll(async ({ request }) => {
    jwtToken = await getJwtToken('admin@practicesoftwaretesting.com', 'welcome01', request);
  });

  test('test authenticated get /users/me endpoint', async ({ request }) => {
    const response = await request.get(`/users/me`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    expect(response.status()).toBe(200);
  });
});
