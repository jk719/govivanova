import { createProduct } from './utils'
import { FOOT_CARE } from '../categories/flat'
import type { Product } from '@/types'

export const footCareProducts: Partial<Product>[] = [
  createProduct({
    name: "Dr. Teal's Cooling Peppermint Pure Epsom Salt Foot Soak",
    price: 6.99,
    imageKey: 'dr-teals-cooling-peppermint-pure-epsom-salt-foot-soak-32oz',
    category: FOOT_CARE,
    subcategoryIndex: 4, // Foot Sprays
    item: "Foot Sprays",
    itemSlug: "foot-sprays",
    shortDescription: "Refreshing foot soak",
    description: "Revitalize and soothe tired feet with this refreshing blend of Epsom salt and peppermint essential oil",
    dosageForm: "Salt Soak",
    stock: 100,
    isFeatured: true,
    keywords: ["foot care", "epsom salt", "peppermint"],
    sku: "SKU-DRTEALS-001",
    activeIngredients: [
      { name: "Magnesium Sulfate", amount: "100%" },
      { name: "Peppermint Oil", amount: "Natural" }
    ],
    warnings: [
      "For external use only",
      "Do not use on broken skin"
    ],
    directions: "Dissolve 2 cups in warm water and soak feet for 20 minutes",
    contraindications: ["Open wounds", "Skin infections"],
    sideEffects: ["None when used as directed"],
    storage: "Store in a cool, dry place",
    tagline: "Happy Feet"
  })
] 