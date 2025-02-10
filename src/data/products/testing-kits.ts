import { createProduct } from './utils'
import { TESTING_KITS } from '../categories/flat'
import type { Product } from '@/types'

export const testingKitsProducts: Partial<Product>[] = [
  createProduct({
    name: "MyAllergyTest Home Testing Kit",
    price: 39.99,
    imageKey: 'myallergytest-kit',
    category: TESTING_KITS,  // Changed from ALLERGY
    subcategoryIndex: 2, // Allergy Testing Kits
    item: "Allergy Testing Kits",
    itemSlug: "allergy-testing-kits",
    shortDescription: "At-home allergy testing",
    description: "Tests for 40 common indoor and outdoor allergens with lab analysis included",
    dosageForm: "Test Kit",
    stock: 30,
    isFeatured: false,
    keywords: ["allergy test", "allergen screening", "home testing"],
    sku: "SKU-MYALLERGYTEST-001",
    activeIngredients: [],
    warnings: [
      "For screening purposes only",
      "Consult healthcare provider for diagnosis"
    ],
    directions: "Follow enclosed instructions carefully for blood sample collection",
    contraindications: ["Active bleeding disorders"],
    sideEffects: ["Slight discomfort from finger prick"],
    storage: "Store at room temperature",
    tagline: "Know Your Triggers"
  }),
  createProduct({
    name: "Omron Upper Arm Blood Pressure Monitor",
    price: 69.99,
    imageKey: 'omron-bp-monitor',
    category: TESTING_KITS,  // Changed from HOME_HEALTH
    subcategoryIndex: 4, // Blood Pressure Monitors
    item: "Blood Pressure Monitors",
    itemSlug: "blood-pressure-monitors",
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
    tagline: "Monitor Your Health"
  }),
  createProduct({
    name: "Accu-Chek Guide Blood Glucose Monitoring System",
    price: 29.99,
    imageKey: 'accu-chek-guide',
    category: TESTING_KITS,
    subcategoryIndex: 3, // Blood Glucose Test Kits
    item: "Blood Glucose Test Kits",
    itemSlug: "blood-glucose-test-kits",
    shortDescription: "Easy blood glucose monitoring",
    description: "Accurate and easy-to-use blood glucose monitoring system for diabetes management",
    dosageForm: "Medical Device",
    stock: 50,
    isFeatured: true,
    keywords: ["diabetes", "glucose monitoring", "blood sugar"],
    sku: "SKU-ACCUCHEK-001",
    activeIngredients: [],
    warnings: [
      "Clean testing site before use",
      "For in vitro diagnostic use only"
    ],
    directions: "Follow user manual for proper testing procedure",
    contraindications: ["None"],
    sideEffects: ["Minor discomfort from finger prick"],
    storage: "Store test strips in original vial",
    tagline: "Simple Diabetes Management"
  })
] 