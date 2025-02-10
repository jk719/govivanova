import { createProduct } from './utils'
import { SMOKING_CESSATION } from '../categories/flat'
import type { Product } from '@/types'

export const smokingCessationProducts: Partial<Product>[] = [
  createProduct({
    name: "Nicorette Nicotine Gum 4mg Original 100ct",
    price: 49.99,
    imageKey: 'nicorette-gum-4mg-original',
    category: SMOKING_CESSATION,
    subcategoryIndex: 0, // Nicotine Replacement
    item: "Nicotine Replacement",
    itemSlug: "nicotine-replacement",
    shortDescription: "Stop smoking aid",
    description: "Helps reduce withdrawal symptoms including nicotine craving associated with quitting smoking",
    dosageForm: "Gum",
    stock: 50,
    isFeatured: true,
    keywords: ["quit smoking", "nicotine gum", "smoking cessation"],
    sku: "SKU-NICORETTE-001",
    activeIngredients: [
      { name: "Nicotine Polacrilex", amount: "4mg" }
    ],
    warnings: [
      "Not for sale to persons under 18",
      "Stop smoking completely when using this product"
    ],
    directions: "Chew one piece slowly until you notice a tingling sensation",
    contraindications: ["Recent heart attack", "Jaw problems"],
    sideEffects: ["Hiccups", "Mouth irritation"],
    storage: "Store at room temperature",
    tagline: "Your Path to Freedom"
  })
] 