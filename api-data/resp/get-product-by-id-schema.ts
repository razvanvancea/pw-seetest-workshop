import { z } from 'zod';

export const getProductByIdSchema = z.object({
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
    parent_id: z.string(),
  }),
  brand: z.object({ id: z.string(), name: z.string() }),
  specs: z.array(
    z.union([
      z.object({
        id: z.string(),
        product_id: z.string(),
        spec_name: z.string(),
        spec_value: z.string(),
        spec_unit: z.null(),
      }),
      z.object({
        id: z.string(),
        product_id: z.string(),
        spec_name: z.string(),
        spec_value: z.string(),
        spec_unit: z.string(),
      }),
    ])
  ),
});
