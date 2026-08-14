import { expect, APIRequestContext } from '@playwright/test';

export default async function getJwtToken(
  email: string = 'admin@practicesoftwaretesting.com',
  psw: string = 'welcome01',
  request: APIRequestContext
): Promise<string> {
  const response = await request.post(`/users/login`, {
    data: {
      email,
      password: psw,
    },
  });
  expect(response.status()).toBe(200);
  const loginResponseBody = await response.json();
  return loginResponseBody.access_token;
}
