import { test, expect } from '@playwright/test';
import { getProductByIdSchema } from '../../api-data/resp/get-product-by-id-schema';
import { validateSchemaZod } from 'playwright-schema-validator';
import getIdByProductNumber from '../../lib/api/get-first-post-id';

/**
 * Uncomment the following test and refactor it to verify the GET /products/id endpoint
 * Hint: use the 'getIdByProductNumber' function (already imported in this file) to extract the id of a specific product, then use it to make a request to GET /products/id
 * Assert the status code is 200
 * use 'validateSchemaZod' to assert the response body schema - schema is already created and imported in this file as 'getProductByIdSchema'
 */

// test('get product by id test', async ({ request }) => {
//   const response = await request.get(`/products`);
//   const respBody = await response.json();
//   expect(response.status()).toBe(200);
//   await validateSchemaZod({}, respBody, getProductsSchema);
// });
