import { createProduct } from './utils'
import { HOME_HEALTH } from '../categories/flat'
import type { Product } from '@/types'

export const homeHealthProducts: Partial<Product>[] = [
  createProduct({
    name: "Omron Upper Arm Blood Pressure Monitor",
    price: 69.99,
    imageKey: 'omron-bp-monitor',
    category: HOME_HEALTH,
    subcategoryIndex: 0, // Blood Pressure Monitors
    item: "Omron",
    itemSlug: "omron",
    shortDescription: "Digital BP monitor",
    description: "Accurate, easy-to-use blood pressure monitor for home use with irregular heartbeat detection",
    dosageForm: "Medical Device",
    stock: 40,
    isFeatured: true,
    keywords: ["blood pressure", "heart health", "monitoring"],
    sku: "SKU-OMRON-001",
    activeIngredients: [],
    warnings: [
      "Consult doctor for irregular readings",
      "Not for professional medical use"
    ],
    directions: "Follow included instructions for proper cuff placement and measurement",
    contraindications: ["None when used as directed"],
    sideEffects: ["None known"],
    storage: "Store in a clean, dry place",
    tagline: "Monitor Your Heart Health"
  }),

  createProduct({
    name: "OneTouch Ultra Test Strips 50ct",
    price: 49.99,
    imageKey: 'onetouch-test-strips',
    category: HOME_HEALTH,
    subcategoryIndex: 1, // Diabetes Care Supplies
    item: "OneTouch",
    itemSlug: "onetouch",
    shortDescription: "Glucose test strips",
    description: "Accurate blood glucose monitoring strips for OneTouch Ultra meters",
    dosageForm: "Medical Supply",
    stock: 100,
    isFeatured: true,
    keywords: ["diabetes", "glucose testing", "blood sugar"],
    sku: "SKU-ONETOUCH-001",
    activeIngredients: [],
    warnings: [
      "For single use only",
      "Store in original vial"
    ],
    directions: "Use with OneTouch Ultra meters only. See meter manual for instructions.",
    contraindications: ["None"],
    sideEffects: ["None"],
    storage: "Store in a cool, dry place",
    tagline: "Accurate Results Every Time"
  }),

  createProduct({
    name: "JOBST Compression Stockings Medium",
    price: 34.99,
    imageKey: 'jobst-compression',
    category: HOME_HEALTH,
    subcategoryIndex: 2, // Compression Stockings
    item: "JOBST",
    itemSlug: "jobst",
    shortDescription: "Medical compression socks",
    description: "Graduated compression stockings for improved circulation and leg health",
    dosageForm: "Medical Supply",
    stock: 65,
    isFeatured: false,
    keywords: ["compression", "circulation", "leg health"],
    sku: "SKU-JOBST-001",
    activeIngredients: [],
    warnings: [
      "Remove if numbness occurs",
      "Measure legs for proper fit"
    ],
    directions: "Put on first thing in morning when legs are least swollen",
    contraindications: ["Severe arterial disease", "Skin infections"],
    sideEffects: ["Mild discomfort initially"],
    storage: "Store at room temperature",
    tagline: "Better Circulation, Better Health"
  }),

  createProduct({
    name: "Drive Medical Folding Walker",
    price: 39.99,
    imageKey: 'drive-walker',
    category: HOME_HEALTH,
    subcategoryIndex: 3, // Mobility Aids
    item: "Drive Medical",
    itemSlug: "drive-medical",
    shortDescription: "Adjustable folding walker",
    description: "Lightweight aluminum walker with easy-fold mechanism for storage and transport",
    dosageForm: "Medical Device",
    stock: 30,
    isFeatured: false,
    keywords: ["walker", "mobility aid", "senior care"],
    sku: "SKU-DRIVE-001",
    activeIngredients: [],
    warnings: [
      "Check stability before each use",
      "Do not exceed weight capacity"
    ],
    directions: "Adjust height to user's wrist level when standing straight",
    contraindications: ["Severe balance issues without supervision"],
    sideEffects: ["None when used properly"],
    storage: "Store in dry place",
    tagline: "Support You Can Trust"
  }),

  createProduct({
    name: "Mueller Sports Knee Brace Large",
    price: 24.99,
    imageKey: 'mueller-knee-brace',
    category: HOME_HEALTH,
    subcategoryIndex: 4, // Braces & Supports
    item: "Mueller",
    itemSlug: "mueller",
    shortDescription: "Adjustable knee support",
    description: "Provides stability and compression for weak or injured knees",
    dosageForm: "Medical Supply",
    stock: 85,
    isFeatured: true,
    keywords: ["knee brace", "joint support", "sports medicine"],
    sku: "SKU-MUELLER-001",
    activeIngredients: [],
    warnings: [
      "Do not wear while sleeping",
      "Remove if circulation is impaired"
    ],
    directions: "Center brace on kneecap and secure straps comfortably",
    contraindications: ["Circulation problems", "Skin conditions"],
    sideEffects: ["Skin irritation if worn too tight"],
    storage: "Store in a clean, dry place",
    tagline: "Move With Confidence"
  }),

  createProduct({
    name: "Honeywell HEPA Air Purifier",
    price: 149.99,
    imageKey: 'honeywell-hepa-purifier',
    category: HOME_HEALTH,
    subcategoryIndex: 2, // Air Quality
    item: "Air Quality",
    itemSlug: "air-quality",
    shortDescription: "True HEPA air purifier",
    description: "Captures up to 99.97% of airborne particles including pollen, dust, and pet dander",
    dosageForm: "Device",
    stock: 25,
    isFeatured: true,
    keywords: ["air purifier", "HEPA", "allergen removal", "dust", "pollen"],
    sku: "SKU-HONEYWELL-001",
    activeIngredients: [],
    warnings: [
      "Keep away from water",
      "Replace filter every 12 months"
    ],
    directions: "Place in room and operate continuously for best results",
    contraindications: [],
    sideEffects: [],
    storage: "Store in dry place",
    tagline: "Breathe Cleaner Air"
  })
] 