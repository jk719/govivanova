import { createProduct } from './utils'
import { VITAMINS } from '../categories/flat'
import type { Product } from '@/types'

export const vitaminsProducts: Partial<Product>[] = [
  createProduct({
    name: "Nature Made Vitamin C 500mg 60ct",
    price: 9.99,
    imageKey: 'nature-made-vitamin-c',
    category: VITAMINS,
    subcategoryIndex: 2, // Immune Support
    item: "Nature Made",
    itemSlug: "nature-made",
    shortDescription: "Essential immune support",
    description: "Supports immune health and acts as an antioxidant",
    dosageForm: "Tablet",
    stock: 100,
    isFeatured: true,
    keywords: ["vitamin c", "immune support", "antioxidant"],
    sku: "SKU-NATUREMADE-001",
    activeIngredients: [
      { name: "Vitamin C (Ascorbic Acid)", amount: "500 mg" }
    ],
    warnings: [
      "Keep out of reach of children",
      "Store in a cool, dry place"
    ],
    directions: "Take one tablet daily with water and a meal",
    contraindications: ["Kidney stones"],
    sideEffects: ["Stomach upset at high doses"],
    storage: "Store at room temperature",
    tagline: "Support Your Immune System"
  }),

  createProduct({
    name: "MegaRed Omega-3 Krill Oil 60ct",
    price: 29.99,
    imageKey: 'megared-omega-3',
    category: VITAMINS,
    subcategoryIndex: 3, // Omega-3 Supplements
    item: "MegaRed",
    itemSlug: "megared",
    shortDescription: "Superior omega-3 absorption",
    description: "Supports heart, brain and eye health with premium krill oil",
    dosageForm: "Softgel",
    stock: 75,
    isFeatured: false,
    keywords: ["omega-3", "krill oil", "heart health", "brain health"],
    sku: "SKU-MEGARED-001",
    activeIngredients: [
      { name: "Krill Oil", amount: "350 mg" },
      { name: "Omega-3 Fatty Acids", amount: "100 mg" }
    ],
    warnings: [
      "Consult doctor if taking blood thinners",
      "Contains shellfish"
    ],
    directions: "Take one softgel daily with water",
    contraindications: ["Shellfish allergy", "Bleeding disorders"],
    sideEffects: ["Fishy burps", "Stomach upset"],
    storage: "Store in a cool, dry place",
    tagline: "Small Pill, Big Benefits"
  }),

  createProduct({
    name: "One A Day Women's Multivitamin 100ct",
    price: 19.99,
    imageKey: 'one-a-day-womens',
    category: VITAMINS,
    subcategoryIndex: 0, // Multivitamins
    item: "One A Day",
    itemSlug: "one-a-day",
    shortDescription: "Complete women's nutrition",
    description: "Supports bone health, immune health, and energy metabolism",
    dosageForm: "Tablet",
    stock: 90,
    isFeatured: true,
    keywords: ["women's health", "multivitamin", "daily vitamin"],
    sku: "SKU-ONEADAY-001",
    activeIngredients: [
      { name: "Vitamin D", amount: "1000 IU" },
      { name: "Calcium", amount: "500 mg" },
      { name: "Iron", amount: "18 mg" }
    ],
    warnings: [
      "Keep out of reach of children",
      "Do not exceed recommended dose"
    ],
    directions: "Take one tablet daily with food",
    contraindications: ["Iron overload disorders"],
    sideEffects: ["Mild stomach upset"],
    storage: "Store at room temperature",
    tagline: "Complete Daily Support"
  }),

  createProduct({
    name: "Nature's Bounty Melatonin 5mg 90ct",
    price: 11.99,
    imageKey: 'natures-bounty-melatonin',
    category: VITAMINS,
    subcategoryIndex: 2, // Sleep Support
    item: "Nature's Bounty",
    itemSlug: "natures-bounty",
    shortDescription: "Natural sleep support",
    description: "Helps with occasional sleeplessness and jet lag",
    dosageForm: "Tablet",
    stock: 85,
    isFeatured: false,
    keywords: ["sleep aid", "melatonin", "natural supplement"],
    sku: "SKU-NATURESBOUNTY-001",
    activeIngredients: [
      { name: "Melatonin", amount: "5 mg" }
    ],
    warnings: [
      "May cause drowsiness",
      "Not for use while driving"
    ],
    directions: "Take one tablet 30-60 minutes before bedtime",
    contraindications: ["Autoimmune conditions", "Depression"],
    sideEffects: ["Drowsiness", "Vivid dreams"],
    storage: "Store in a cool, dry place",
    tagline: "Rest Naturally"
  }),

  createProduct({
    name: "Move Free Advanced Plus MSM 120ct",
    price: 29.99,
    imageKey: 'move-free-advanced',
    category: VITAMINS,
    subcategoryIndex: 3, // Joint Health
    item: "Joint Health",
    itemSlug: "joint-health",
    shortDescription: "Joint health supplement",
    description: "Advanced joint health supplement with Glucosamine, Chondroitin, and MSM",
    dosageForm: "Tablet",
    stock: 45,
    isFeatured: true,
    keywords: ["joint health", "glucosamine", "MSM", "supplements"],
    sku: "SKU-MOVEFREE-001",
    activeIngredients: [
      { name: "Glucosamine HCl", amount: "1500 mg" },
      { name: "Chondroitin Sulfate", amount: "200 mg" },
      { name: "MSM", amount: "1500 mg" }
    ],
    warnings: [
      "Consult doctor if pregnant or nursing",
      "Contains shellfish"
    ],
    directions: "Take 3 tablets daily with meals",
    contraindications: ["Shellfish allergy"],
    sideEffects: ["Mild stomach upset", "Nausea"],
    storage: "Store at room temperature",
    tagline: "Keep Moving Freely"
  }),

  createProduct({
    name: "Flintstones Complete Multivitamin 60ct",
    price: 11.99,
    imageKey: 'flintstones-complete-60ct',
    category: VITAMINS,  // Changed from CHILDRENS
    subcategoryIndex: 4, // Children's Vitamins
    item: "Children's Vitamins",
    itemSlug: "childrens-vitamins",
    shortDescription: "Complete children's multivitamin",
    description: "Supports healthy growth and development with essential vitamins and minerals",
    dosageForm: "Chewable Tablet",
    stock: 120,
    isFeatured: true,
    keywords: ["children's vitamins", "multivitamin", "supplements"],
    sku: "SKU-FLINTSTONES-001",
    activeIngredients: [
      { name: "Vitamin C", amount: "60 mg" },
      { name: "Vitamin D", amount: "600 IU" },
      { name: "Vitamin B12", amount: "6 mcg" }
    ],
    warnings: [
      "Keep out of reach of children",
      "Do not exceed recommended serving"
    ],
    directions: "Children 2-3 years: 1/2 tablet daily, Children 4+ years: 1 tablet daily",
    contraindications: ["Iron overload disorders"],
    sideEffects: ["None when used as directed"],
    storage: "Store in a cool, dry place",
    tagline: "Complete Nutrition for Growing Kids"
  }),

  createProduct({
    name: "PediaSure Grow & Gain Kids Nutritional Shake Vanilla",
    price: 2.99,
    imageKey: 'pediasure-grow-gain-kids-nutritional-shake-vanilla',
    category: VITAMINS,  // Changed from CHILDRENS
    subcategoryIndex: 4, // Children's Vitamins
    item: "Children's Vitamins",
    itemSlug: "childrens-vitamins",
    shortDescription: "Complete nutrition shake for kids",
    description: "PediaSure Grow & Gain Kids Nutritional Shake is specially designed to help kids grow and gain weight.",
    dosageForm: "Liquid",
    stock: 150,
    isFeatured: true,
    keywords: ["nutritional shake", "kids vitamins", "growth support"],
    sku: "SKU-PEDIASURE-001",
    activeIngredients: [
      { name: "Protein Blend", amount: "7g" },
      { name: "Vitamin D", amount: "25%" },
      { name: "Calcium", amount: "30%" }
    ],
    warnings: [
      "Not for children under 2 years",
      "Consult doctor if underweight"
    ],
    directions: "Shake well and serve cold",
    contraindications: ["Dairy allergy"],
    sideEffects: ["None when used as directed"],
    storage: "Refrigerate after opening",
    tagline: "Children's Care"
  })
] 