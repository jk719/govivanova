import { createProduct } from './utils'
import { MENS_GROOMING } from '../categories/flat'
import type { Product } from '@/types'

export const mensGroomingProducts: Partial<Product>[] = [
  createProduct({
    name: "Gillette Fusion5 ProGlide Razor",
    price: 12.99,
    imageKey: 'gillette-fusion5-proglide',
    category: MENS_GROOMING,
    subcategoryIndex: 1, // Razors & Blades
    item: "Razors & Blades",
    itemSlug: "razors-blades",
    shortDescription: "5-blade shaving system",
    description: "Premium men's razor with FlexBall technology for a close, comfortable shave",
    dosageForm: "Device",
    stock: 50,
    isFeatured: true,
    keywords: ["razor", "shaving", "men's grooming"],
    sku: "SKU-GILLETTE-001",
    activeIngredients: [],
    warnings: [
      "Replace blade when dull",
      "Keep out of reach of children"
    ],
    directions: "Wet face, apply shaving cream, and shave",
    contraindications: ["Skin infections"],
    sideEffects: ["Minor skin irritation if used improperly"],
    storage: "Store in a dry place",
    tagline: "Effortless Essentials for Men"
  })
] 