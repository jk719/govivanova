import { createProduct } from './utils'
import { EYE_CARE } from '../categories/flat'
import type { Product } from '@/types'

export const eyeCareProducts: Partial<Product>[] = [
  createProduct({
    name: "Systane Complete Lubricant Eye Drops 10mL",
    price: 14.99,
    imageKey: 'systane-complete-lubricant-eye-drops',
    category: EYE_CARE,
    subcategoryIndex: 0, // Eye Drops
    item: "Eye Drops",
    itemSlug: "eye-drops",
    shortDescription: "Complete eye lubrication",
    description: "Advanced eye drops that provide lasting relief from dry eye symptoms",
    dosageForm: "Drops",
    stock: 75,
    isFeatured: true,
    keywords: ["eye drops", "dry eyes", "eye care"],
    sku: "SKU-SYSTANE-001",
    activeIngredients: [
      { name: "Propylene Glycol", amount: "0.6%" }
    ],
    warnings: [
      "Remove contact lenses before use",
      "Replace cap after use"
    ],
    directions: "1-2 drops in affected eye(s) as needed",
    contraindications: ["Eye infection", "Eye injury"],
    sideEffects: ["Temporary blurred vision"],
    storage: "Store at room temperature",
    tagline: "Clear Vision Comfort"
  }),
  createProduct({
    name: "Visine Allergy Eye Drops 0.5oz",
    price: 11.99,
    imageKey: 'visine-allergy-drops',
    category: EYE_CARE,
    subcategoryIndex: 0, // Allergy Eye Care
    item: "Allergy Eye Care",
    itemSlug: "allergy-eye-care",
    shortDescription: "Fast eye allergy relief",
    description: "Relieves red, itchy, watery eyes due to allergies",
    dosageForm: "Eye Drops",
    stock: 75,
    isFeatured: false,
    keywords: ["eye drops", "allergy relief", "red eyes"],
    sku: "SKU-VISINE-001",
    activeIngredients: [
      { name: "Ketotifen", amount: "0.025%" }
    ],
    warnings: [
      "Remove contact lenses before use",
      "Wait 10 minutes before reinserting contacts"
    ],
    directions: "1-2 drops in affected eye(s) up to twice daily",
    contraindications: ["Eye infection", "Recent eye surgery"],
    sideEffects: ["Burning", "Stinging", "Eye irritation"],
    storage: "Store at room temperature",
    tagline: "See Clearly Again"
  })
] 