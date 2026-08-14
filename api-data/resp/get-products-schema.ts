import { z } from 'zod';

export const getProductsSchema = z.object({
  current_page: z.number(),
  data: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      price: z.number(),
      is_location_offer: z.boolean(),
      is_rental: z.boolean(),
      co2_rating: z.string(),
      in_stock: z.boolean(),
      is_eco_friendly: z.boolean(),
      product_image: z.object({
        id: z.string(),
        by_name: z.string(),
        by_url: z.string(),
        source_name: z.string(),
        source_url: z.string(),
        file_name: z.string(),
        title: z.string(),
      }),
      category: z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
      }),
      brand: z.object({ id: z.string(), name: z.string() }),
    })
  ),
  from: z.number(),
  last_page: z.number(),
  per_page: z.number(),
  to: z.number(),
  total: z.number(),
});
