import { createProduct } from './utils'
import { WEIGHT_MANAGEMENT } from '../categories/flat'
import type { Product } from '@/types'

export const weightManagementProducts: Partial<Product>[] = [
  createProduct({
    name: "Alli Weight Loss Aid Capsules 120ct",
    price: 69.99,
    imageKey: 'alli-weight-loss-aid-capsules',
    category: WEIGHT_MANAGEMENT,
    subcategoryIndex: 0, // Weight Loss Supplements
    item: "Weight Loss Supplements",
    itemSlug: "weight-loss-supplements",
    shortDescription: "FDA-approved weight loss aid",
    description: "The only FDA-approved over-the-counter weight loss aid that helps block about 25% of the fat you eat",
    dosageForm: "Capsule",
    stock: 40,
    isFeatured: true,
    keywords: ["weight loss", "fat blocker", "diet aid"],
    sku: "SKU-ALLI-001",
    activeIngredients: [
      { name: "Orlistat", amount: "60mg" }
    ],
    warnings: [
      "For overweight adults",
      "Take with a daily multivitamin"
    ],
    directions: "1 capsule with each meal containing fat",
    contraindications: ["Pregnancy", "Eating disorders"],
    sideEffects: ["Changes in bowel habits"],
    storage: "Store at room temperature",
    tagline: "Your Weight Loss Journey"
  }),
  createProduct({
    name: "Ensure Plus Nutrition Shake Vanilla 6pk",
    price: 12.99,
    imageKey: 'ensure-plus-vanilla',
    category: WEIGHT_MANAGEMENT,
    subcategoryIndex: 0, // Meal Replacements
    item: "Meal Replacements",
    itemSlug: "meal-replacements",
    shortDescription: "Complete nutrition shake",
    description: "Complete, balanced nutrition to help gain or maintain a healthy weight",
    dosageForm: "Liquid",
    stock: 100,
    isFeatured: true,
    keywords: ["meal replacement", "nutrition shake", "weight gain"],
    sku: "SKU-ENSURE-001",
    activeIngredients: [
      { name: "Protein Blend", amount: "16g" },
      { name: "Vitamins & Minerals", amount: "27" },
      { name: "Calories", amount: "350" }
    ],
    warnings: [
      "Not for individuals with galactosemia",
      "Consult doctor if on low protein diet"
    ],
    directions: "Shake well and serve cold",
    contraindications: ["Galactosemia"],
    sideEffects: ["None when used as directed"],
    storage: "Store unopened at room temperature",
    tagline: "Complete Nutrition"
  })
] 