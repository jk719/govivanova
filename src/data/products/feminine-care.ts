import { createProduct } from './utils'
import { FEMININE_CARE } from '../categories/flat'
import type { Product } from '@/types'

export const feminineCareProducts: Partial<Product>[] = [
  createProduct({
    name: "Monistat 3 Vaginal Antifungal Prefilled Cream 3x5gm",
    price: 19.99,
    imageKey: 'monistat-3-vaginal-antifungal-prefilled-cream-3x5gm',
    category: FEMININE_CARE,
    subcategoryIndex: 4, // Vaginal Health Products
    item: "Vaginal Health Products",
    itemSlug: "vaginal-health-products",
    shortDescription: "Fast and effective yeast infection relief",
    description: "Discover fast and effective relief with Monistat 3 Vaginal Antifungal Prefilled Cream 3x5gm.",
    dosageForm: "Cream",
    stock: 50,
    isFeatured: false,
    keywords: ["yeast infection", "antifungal", "feminine care"],
    sku: "SKU-MONISTAT-001",
    activeIngredients: [
      { name: "Miconazole Nitrate", amount: "200mg" }
    ],
    warnings: [
      "For vaginal use only",
      "Do not use if pregnant without consulting doctor"
    ],
    directions: "Insert one applicator at bedtime for 3 days",
    contraindications: ["Pregnancy without doctor approval"],
    sideEffects: ["Mild burning", "Irritation"],
    storage: "Store at room temperature",
    tagline: "Her Comfort Essentials"
  }),

  createProduct({
    name: "Monistat 7 Vaginal Antifungal Cream Combination Pack",
    price: 24.99,
    imageKey: 'monistat-7-vaginal-antifungal-cream-combination-pack',
    category: FEMININE_CARE,
    subcategoryIndex: 4, // Vaginal Health Products
    item: "Vaginal Health Products",
    itemSlug: "vaginal-health-products",
    shortDescription: "Complete yeast infection treatment",
    description: "Get fast and effective relief with Monistat 7 Vaginal Antifungal Cream combination pack.",
    dosageForm: "Cream",
    stock: 45,
    isFeatured: false,
    keywords: ["yeast infection", "antifungal", "feminine care"],
    sku: "SKU-MONISTAT-002",
    activeIngredients: [
      { name: "Miconazole Nitrate", amount: "100mg" }
    ],
    warnings: [
      "For vaginal use only",
      "Do not use if pregnant without consulting doctor"
    ],
    directions: "Insert one applicator at bedtime for 7 days",
    contraindications: ["Pregnancy without doctor approval"],
    sideEffects: ["Mild burning", "Irritation"],
    storage: "Store at room temperature",
    tagline: "Her Comfort Essentials"
  })
] 