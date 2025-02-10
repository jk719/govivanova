import { createProduct } from './utils'
import { HAIR } from '../categories/flat'
import type { Product } from '@/types'

export const hairProducts: Partial<Product>[] = [
  createProduct({
    name: "Head & Shoulders Classic Clean 13.5oz",
    price: 7.99,
    imageKey: 'head-shoulders-classic',
    category: HAIR,
    subcategoryIndex: 0, // Shampoo
    item: "Head & Shoulders",
    itemSlug: "head-and-shoulders",
    shortDescription: "Anti-dandruff shampoo",
    description: "Clinically proven dandruff control with refreshing clean",
    dosageForm: "Liquid",
    stock: 120,
    isFeatured: true,
    keywords: ["shampoo", "dandruff", "scalp care"],
    sku: "SKU-HEADSHOULDERS-001",
    activeIngredients: [
      { name: "Pyrithione Zinc", amount: "1%" }
    ],
    warnings: [
      "For external use only",
      "Avoid contact with eyes"
    ],
    directions: "Massage into wet hair, rinse thoroughly",
    contraindications: ["Open scalp wounds"],
    sideEffects: ["Scalp irritation in sensitive individuals"],
    storage: "Store at room temperature",
    tagline: "Clinically Proven Dandruff Control"
  }),

  createProduct({
    name: "Pantene Pro-V Daily Moisture Renewal Conditioner 12oz",
    price: 6.99,
    imageKey: 'pantene-daily-moisture',
    category: HAIR,
    subcategoryIndex: 1, // Conditioner
    item: "Pantene",
    itemSlug: "pantene",
    shortDescription: "Daily moisturizing conditioner",
    description: "Nourishing conditioner for soft, manageable hair",
    dosageForm: "Cream",
    stock: 95,
    isFeatured: false,
    keywords: ["conditioner", "moisturizing", "hair care"],
    sku: "SKU-PANTENE-001",
    activeIngredients: [
      { name: "Pro-Vitamin B5", amount: "2%" }
    ],
    warnings: [
      "For external use only",
      "Keep out of eyes"
    ],
    directions: "Apply to wet hair after shampooing, rinse thoroughly",
    contraindications: ["None known"],
    sideEffects: ["Product buildup with overuse"],
    storage: "Store at room temperature",
    tagline: "Visibly Healthier Hair"
  }),

  createProduct({
    name: "Rogaine Men's Extra Strength 5% Minoxidil 3mo",
    price: 44.99,
    imageKey: 'rogaine-mens',
    category: HAIR,
    subcategoryIndex: 2, // Hair Loss Treatments
    item: "Rogaine",
    itemSlug: "rogaine",
    shortDescription: "Hair regrowth treatment",
    description: "Clinically proven to help regrow hair and prevent further hair loss",
    dosageForm: "Foam",
    stock: 50,
    isFeatured: true,
    keywords: ["hair loss", "minoxidil", "regrowth"],
    sku: "SKU-ROGAINE-001",
    activeIngredients: [
      { name: "Minoxidil", amount: "5%" }
    ],
    warnings: [
      "For external use only",
      "Stop if scalp irritation occurs"
    ],
    directions: "Apply half a capful twice daily to scalp",
    contraindications: ["Women", "Under 18 years"],
    sideEffects: ["Scalp irritation", "Unwanted hair growth"],
    storage: "Store at room temperature",
    tagline: "Proven Hair Regrowth"
  }),

  createProduct({
    name: "Moroccanoil Treatment Original 3.4oz",
    price: 34.99,
    imageKey: 'moroccanoil-treatment',
    category: HAIR,
    subcategoryIndex: 3, // Hair Treatments
    item: "Moroccanoil",
    itemSlug: "moroccanoil",
    shortDescription: "Argan oil hair treatment",
    description: "Conditioning and styling treatment that strengthens and adds shine",
    dosageForm: "Oil",
    stock: 70,
    isFeatured: false,
    keywords: ["hair oil", "argan oil", "shine"],
    sku: "SKU-MOROCCANOIL-001",
    activeIngredients: [
      { name: "Argan Oil", amount: "100%" }
    ],
    warnings: [
      "For external use only",
      "Keep away from heat"
    ],
    directions: "Apply small amount to damp or dry hair",
    contraindications: ["None known"],
    sideEffects: ["May weigh down fine hair"],
    storage: "Store in a cool, dry place",
    tagline: "Transform Your Hair"
  }),

  createProduct({
    name: "Tresemmé Extra Hold Hair Spray 11oz",
    price: 5.99,
    imageKey: 'tresemme-extra-hold',
    category: HAIR,
    subcategoryIndex: 4, // Styling Products
    item: "Tresemmé",
    itemSlug: "tresemme",
    shortDescription: "Professional hold hairspray",
    description: "Extra hold hairspray for all-day style control",
    dosageForm: "Spray",
    stock: 85,
    isFeatured: false,
    keywords: ["hairspray", "styling", "hold"],
    sku: "SKU-TRESEMME-001",
    activeIngredients: [],
    warnings: [
      "Flammable until dry",
      "Avoid spraying in eyes"
    ],
    directions: "Hold 10-12 inches from hair and spray evenly",
    contraindications: ["Use in well-ventilated area"],
    sideEffects: ["Product buildup"],
    storage: "Store at room temperature",
    tagline: "Professional Style Control"
  })
] 