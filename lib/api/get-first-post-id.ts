import { APIRequestContext, expect } from '@playwright/test';

export default async function getIdByProductNumber(postNumber: number, request: APIRequestContext) {
  const response = await request.get(`/products`);
  const respBody = await response.json();
  expect(response.status()).toBe(200);
  const product = respBody.data[postNumber - 1];
  if (!product) {
    throw new Error(`Product with number ${postNumber} not found`);
  }
  const productId = product.id;
  console.log(`Product ID: ${productId}`);
  return productId;
}
