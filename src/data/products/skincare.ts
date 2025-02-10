import { createProduct } from './utils'
import { SKINCARE } from '../categories/flat'
import type { Product } from '@/types'

export const skincareProducts: Partial<Product>[] = [
  createProduct({
    name: "CeraVe Hydrating Facial Cleanser 12oz",
    price: 14.99,
    imageKey: 'cerave-hydrating-cleanser',
    category: SKINCARE,
    subcategoryIndex: 0, // Cleansers
    item: "CeraVe",
    itemSlug: "cerave",
    shortDescription: "Gentle facial cleanser",
    description: "Non-foaming cleanser that hydrates while removing dirt and makeup",
    dosageForm: "Liquid",
    stock: 100,
    isFeatured: true,
    keywords: ["cleanser", "facial care", "hydrating"],
    sku: "SKU-CERAVE-001",
    activeIngredients: [
      { name: "Ceramides", amount: "1-3-6-II" },
      { name: "Hyaluronic Acid", amount: "1%" }
    ],
    warnings: [
      "Avoid contact with eyes",
      "For external use only"
    ],
    directions: "Apply to damp skin, massage gently, rinse thoroughly",
    contraindications: ["Open wounds"],
    sideEffects: ["Rare allergic reactions"],
    storage: "Store at room temperature",
    tagline: "Gentle, Effective Cleansing"
  }),

  createProduct({
    name: "Neutrogena Oil-Free Moisturizer SPF 35",
    price: 12.99,
    imageKey: 'neutrogena-moisturizer-spf',
    category: SKINCARE,
    subcategoryIndex: 1, // Moisturizers
    item: "Neutrogena",
    itemSlug: "neutrogena",
    shortDescription: "Daily facial moisturizer",
    description: "Lightweight, oil-free moisturizer with broad spectrum sun protection",
    dosageForm: "Cream",
    stock: 85,
    isFeatured: true,
    keywords: ["moisturizer", "sunscreen", "oil-free"],
    sku: "SKU-NEUTROGENA-001",
    activeIngredients: [
      { name: "Avobenzone", amount: "3%" },
      { name: "Octisalate", amount: "5%" }
    ],
    warnings: [
      "For external use only",
      "Avoid contact with eyes"
    ],
    directions: "Apply liberally 15 minutes before sun exposure",
    contraindications: ["Sunscreen allergies"],
    sideEffects: ["May cause eye irritation"],
    storage: "Store at room temperature",
    tagline: "Light Protection, All Day"
  }),

  createProduct({
    name: "The Ordinary Vitamin C Serum 30ml",
    price: 16.99,
    imageKey: 'ordinary-vitamin-c',
    category: SKINCARE,
    subcategoryIndex: 2, // Serums
    item: "The Ordinary",
    itemSlug: "the-ordinary",
    shortDescription: "Brightening vitamin C serum",
    description: "Pure L-Ascorbic Acid 23% for brightening and anti-aging",
    dosageForm: "Serum",
    stock: 60,
    isFeatured: false,
    keywords: ["vitamin c", "brightening", "anti-aging"],
    sku: "SKU-ORDINARY-001",
    activeIngredients: [
      { name: "L-Ascorbic Acid", amount: "23%" }
    ],
    warnings: [
      "Use sunscreen during daytime",
      "May increase sun sensitivity"
    ],
    directions: "Apply a few drops in the morning before moisturizer",
    contraindications: ["Sensitive skin", "Active breakouts"],
    sideEffects: ["Mild tingling"],
    storage: "Store in a cool, dark place",
    tagline: "Pure, Potent Vitamin C"
  }),

  createProduct({
    name: "La Roche-Posay Anthelios SPF 60",
    price: 29.99,
    imageKey: 'laroche-anthelios',
    category: SKINCARE,
    subcategoryIndex: 3, // Sunscreens
    item: "La Roche-Posay",
    itemSlug: "laroche-posay",
    shortDescription: "Advanced sun protection",
    description: "Broad spectrum SPF 60 sunscreen with antioxidants",
    dosageForm: "Lotion",
    stock: 75,
    isFeatured: true,
    keywords: ["sunscreen", "sun protection", "broad spectrum"],
    sku: "SKU-LAROCHE-001",
    activeIngredients: [
      { name: "Avobenzone", amount: "3%" },
      { name: "Homosalate", amount: "15%" }
    ],
    warnings: [
      "Reapply every 2 hours",
      "For external use only"
    ],
    directions: "Apply liberally 15 minutes before sun exposure",
    contraindications: ["Known sunscreen allergies"],
    sideEffects: ["May cause eye irritation"],
    storage: "Store at room temperature",
    tagline: "Superior Sun Protection"
  }),

  createProduct({
    name: "Paula's Choice 2% BHA Exfoliant",
    price: 29.99,
    imageKey: 'paulas-choice-bha',
    category: SKINCARE,
    subcategoryIndex: 4, // Exfoliators
    item: "Paula's Choice",
    itemSlug: "paulas-choice",
    shortDescription: "Gentle chemical exfoliant",
    description: "Leave-on exfoliant for unclogging pores and smoothing skin",
    dosageForm: "Liquid",
    stock: 50,
    isFeatured: false,
    keywords: ["exfoliant", "BHA", "pore care"],
    sku: "SKU-PAULASCHOICE-001",
    activeIngredients: [
      { name: "Salicylic Acid", amount: "2%" }
    ],
    warnings: [
      "Use sunscreen during day",
      "Start with once daily use"
    ],
    directions: "Apply once daily after cleansing",
    contraindications: ["Open wounds", "Sensitive skin"],
    sideEffects: ["Mild peeling", "Initial purging"],
    storage: "Store at room temperature",
    tagline: "Clear, Smooth Skin"
  })
] 