import { createProduct } from './utils'
import { PAIN_FEVER } from '@/data/categories/flat'
import type { Product } from '@/types'

export const painFeverProducts: Partial<Product>[] = [
  createProduct({
    name: "Tylenol Extra Strength Caplets 24ct",
    price: 12.99,
    imageKey: 'tylenol-extra-strength-500mg-caplets-24ct',
    category: PAIN_FEVER,
    subcategoryIndex: 0, // Oral Pain Relief
    item: "Tylenol",
    itemSlug: "tylenol",
    shortDescription: "Fast-acting pain relief",
    description: "Provides temporary relief of minor aches and pains and reduces fever",
    dosageForm: "Tablet",
    stock: 100,
    isFeatured: true,
    keywords: ["pain relief", "fever reducer", "tylenol"],
    sku: "SKU-TYLENOL-001",
    activeIngredients: [
      { name: "Acetaminophen", amount: "500 mg" }
    ],
    warnings: ["Do not exceed recommended dose"],
    directions: "Take 2 caplets every 6 hours while symptoms last",
    contraindications: ["Liver disease"],
    sideEffects: ["Nausea", "Stomach pain"],
    storage: "Store at room temperature",
    tagline: "Fast Relief from Pain"
  }),

  createProduct({
    name: "Advil Ibuprofen Pain Reliever 160ct",
    price: 18.99,
    imageKey: 'advil-ibuprofen-pain-reliever',
    category: PAIN_FEVER,
    subcategoryIndex: 0, // Oral Pain Relief
    item: "Advil",
    itemSlug: "advil",
    shortDescription: "Long-lasting pain relief",
    description: "Temporarily relieves minor aches and pains and reduces fever",
    dosageForm: "Liquid Gel",
    stock: 75,
    isFeatured: true,
    keywords: ["pain relief", "fever reducer", "advil", "ibuprofen"],
    sku: "SKU-ADVIL-001",
    activeIngredients: [
      { name: "Ibuprofen", amount: "200 mg" }
    ],
    warnings: ["Do not use if allergic to aspirin or NSAIDs"],
    directions: "Take 1 capsule every 4 to 6 hours while symptoms last",
    contraindications: ["Stomach bleeding", "Heart disease"],
    sideEffects: ["Stomach pain", "Heartburn"],
    storage: "Store at room temperature",
    tagline: "Advanced Pain Relief"
  }),

  createProduct({
    name: "Aleve Naproxen Sodium Caplets 90ct",
    price: 14.99,
    imageKey: 'aleve-naproxen-sodium',
    category: PAIN_FEVER,
    subcategoryIndex: 0, // Oral Pain Relief
    item: "Aleve",
    itemSlug: "aleve",
    shortDescription: "12-hour pain relief",
    description: "All day pain relief for muscle aches, joint pain, and fever",
    dosageForm: "Caplet",
    stock: 60,
    isFeatured: false,
    keywords: ["pain relief", "fever reducer", "aleve", "naproxen"],
    sku: "SKU-ALEVE-001",
    activeIngredients: [
      { name: "Naproxen Sodium", amount: "220 mg" }
    ],
    warnings: [
      "Do not use if allergic to aspirin or NSAIDs",
      "May increase risk of heart attack or stroke"
    ],
    directions: "Take 1 caplet every 8-12 hours while symptoms last",
    contraindications: ["Heart disease", "High blood pressure"],
    sideEffects: ["Stomach pain", "Heartburn", "Nausea"],
    storage: "Store at room temperature",
    tagline: "All Day Strong"
  }),

  createProduct({
    name: "Bayer Low Dose Aspirin 81mg 120ct",
    price: 11.99,
    imageKey: 'bayer-aspirin-low-dose',
    category: PAIN_FEVER,
    subcategoryIndex: 0, // Oral Pain Relief
    item: "Bayer",
    itemSlug: "bayer",
    shortDescription: "Heart health aspirin",
    description: "Low dose aspirin for daily heart health support",
    dosageForm: "Tablet",
    stock: 120,
    isFeatured: false,
    keywords: ["aspirin", "heart health", "pain relief", "bayer"],
    sku: "SKU-BAYER-001",
    activeIngredients: [
      { name: "Aspirin", amount: "81 mg" }
    ],
    warnings: [
      "Do not use if allergic to aspirin",
      "Consult doctor before starting daily aspirin regimen"
    ],
    directions: "Take 1 tablet daily or as directed by doctor",
    contraindications: ["Bleeding disorders", "Aspirin allergy"],
    sideEffects: ["Stomach upset", "Bleeding risk"],
    storage: "Store at room temperature",
    tagline: "Trusted Heart Care"
  }),

  createProduct({
    name: "Voltaren Arthritis Pain Gel 50g",
    price: 12.99,
    imageKey: 'voltaren-topical-gel',
    category: PAIN_FEVER,
    subcategoryIndex: 1, // Topical Pain Relief
    item: "Voltaren",
    itemSlug: "voltaren",
    shortDescription: "Topical arthritis pain relief",
    description: "Prescription-strength arthritis pain relief in an easy-to-apply gel",
    dosageForm: "Gel",
    stock: 65,
    isFeatured: true,
    keywords: ["arthritis", "pain relief", "topical", "NSAIDs"],
    sku: "SKU-VOLTAREN-001",
    activeIngredients: [
      { name: "Diclofenac Sodium", amount: "1%" }
    ],
    warnings: [
      "For external use only",
      "Do not use with other NSAIDs",
      "Stop use if skin irritation occurs"
    ],
    directions: "Apply 4 times daily to affected areas. Do not exceed 4g per joint.",
    contraindications: ["Aspirin allergy", "During or after heart surgery"],
    sideEffects: ["Skin irritation", "Itching", "Rash"],
    storage: "Store at room temperature",
    tagline: "Move More, Feel Better"
  }),

  createProduct({
    name: "Bengay Ultra Strength Cream 2oz",
    price: 8.99,
    imageKey: 'bengay-ultra-strength',
    category: PAIN_FEVER,
    subcategoryIndex: 1, // Topical Pain Relief
    item: "Bengay",
    itemSlug: "bengay",
    shortDescription: "Fast-acting pain relief cream",
    description: "Ultra strength pain relieving cream for sore muscles and joints",
    dosageForm: "Cream",
    stock: 80,
    isFeatured: false,
    keywords: ["pain relief", "muscle pain", "joint pain", "topical"],
    sku: "SKU-BENGAY-001",
    activeIngredients: [
      { name: "Methyl Salicylate", amount: "30%" },
      { name: "Menthol", amount: "10%" },
      { name: "Camphor", amount: "4%" }
    ],
    warnings: [
      "For external use only",
      "Do not bandage",
      "Do not apply heat"
    ],
    directions: "Apply to affected area not more than 3 to 4 times daily",
    contraindications: ["Open wounds", "Sensitive skin"],
    sideEffects: ["Skin irritation", "Burning sensation"],
    storage: "Store at room temperature",
    tagline: "Ultra Strength Relief"
  }),

  createProduct({
    name: "Excedrin Migraine Pain Relief 100ct",
    price: 15.99,
    imageKey: 'excedrin-migraine-pain-relief-100ct',
    category: PAIN_FEVER,
    subcategoryIndex: 3, // Migraine Relief
    item: "Excedrin",
    itemSlug: "excedrin",
    shortDescription: "Fast migraine relief",
    description: "Provides relief from migraine pain and associated symptoms",
    dosageForm: "Caplet",
    stock: 85,
    isFeatured: true,
    keywords: ["migraine", "headache", "pain relief", "excedrin"],
    sku: "SKU-EXCEDRIN-001",
    activeIngredients: [
      { name: "Acetaminophen", amount: "250 mg" },
      { name: "Aspirin", amount: "250 mg" },
      { name: "Caffeine", amount: "65 mg" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "Contains aspirin and caffeine"
    ],
    directions: "Take 2 caplets with water at first sign of migraine",
    contraindications: ["Aspirin allergy", "Liver disease"],
    sideEffects: ["Stomach upset", "Nervousness"],
    storage: "Store at room temperature",
    tagline: "Powerful Migraine Relief"
  }),

  createProduct({
    name: "Alka-Seltzer Plus Day & Night Multi-Symptom Cold & Flu Liquid Gels 20ct",
    price: 9.99,
    imageKey: 'alka-seltzer-plus-day-night-multi-symptom-cold-flu-liquid-gels-20ct',
    category: PAIN_FEVER,
    subcategoryIndex: 0, // Oral Pain Relief
    item: "Oral Pain Relief",
    itemSlug: "oral-pain-relief",
    shortDescription: "Day and night cold & flu relief",
    description: "Get quick relief from your cold and flu symptoms with these liquid gels for both day and night use.",
    dosageForm: "Liquid Gel",
    stock: 85,
    isFeatured: true,
    keywords: ["cold relief", "flu relief", "pain relief"],
    sku: "SKU-ALKASELTZER-002",
    activeIngredients: [
      { name: "Acetaminophen", amount: "325 mg" },
      { name: "Phenylephrine HCl", amount: "5 mg" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "Do not use with other acetaminophen products"
    ],
    directions: "Take 2 liquid gels every 4-6 hours",
    contraindications: ["Liver disease", "High blood pressure"],
    sideEffects: ["Drowsiness (night formula)", "Nervousness"],
    storage: "Store at room temperature",
    tagline: "Pain-Free Living"
  }),

  createProduct({
    name: "Move Free Advanced Plus MSM 120ct",
    price: 29.99,
    imageKey: 'move-free-advanced',
    category: PAIN_FEVER,
    subcategoryIndex: 4, // Arthritis Pain Relief
    item: "Move Free",
    itemSlug: "move-free",
    shortDescription: "Joint health supplement",
    description: "Advanced joint health supplement with Glucosamine, Chondroitin, and MSM",
    dosageForm: "Tablet",
    stock: 45,
    isFeatured: true,
    keywords: ["joint health", "arthritis", "glucosamine", "MSM"],
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
    name: "Coricidin HBP Maximum Strength Flu 24ct",
    price: 13.99,
    imageKey: 'coricidin-hbp-max',
    category: PAIN_FEVER,
    subcategoryIndex: 2, // Fever Reducers
    item: "Coricidin",
    itemSlug: "coricidin",
    shortDescription: "HBP-safe fever relief",
    description: "Maximum strength fever and flu relief safe for people with high blood pressure",
    dosageForm: "Tablet",
    stock: 55,
    isFeatured: false,
    keywords: ["fever reducer", "high blood pressure", "flu relief"],
    sku: "SKU-CORICIDIN-001",
    activeIngredients: [
      { name: "Acetaminophen", amount: "325 mg" },
      { name: "Chlorpheniramine Maleate", amount: "2 mg" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "Safe for high blood pressure"
    ],
    directions: "Take 2 tablets every 4-6 hours",
    contraindications: ["Liver disease"],
    sideEffects: ["Drowsiness", "Dry mouth"],
    storage: "Store at room temperature",
    tagline: "Safe Fever Relief for HBP"
  }),

  createProduct({
    name: "Chloraseptic Sore Throat Spray Cherry 6oz",
    price: 7.99,
    imageKey: 'chloraseptic-sore-throat-spray-cherry',
    category: PAIN_FEVER,
    subcategoryIndex: 2, // Throat Pain Relief
    item: "Throat Pain Relief",
    itemSlug: "throat-pain-relief",
    shortDescription: "Fast sore throat relief",
    description: "Fast-acting relief from sore throat and mouth pain",
    dosageForm: "Spray",
    stock: 85,
    isFeatured: false,
    keywords: ["sore throat", "throat spray", "pain relief"],
    sku: "SKU-CHLORASEPTIC-001",
    activeIngredients: [
      { name: "Phenol", amount: "1.4%" }
    ],
    warnings: [
      "Temporary relief only",
      "See doctor if sore throat is severe"
    ],
    directions: "Spray directly on sore area every 2 hours",
    contraindications: ["None known"],
    sideEffects: ["Temporary numbness"],
    storage: "Store at room temperature",
    tagline: "Instant Throat Relief"
  }),

  createProduct({
    name: "Vicks VapoRub Topical Cough Suppressant 3.53oz",
    price: 7.99,
    imageKey: 'vicks-vaporub',
    category: PAIN_FEVER,
    subcategoryIndex: 3, // Topical Pain Relief
    item: "Topical Relief",
    itemSlug: "topical-relief",
    shortDescription: "Medicated topical ointment",
    description: "Relieves cough and muscle aches with medicated vapors",
    dosageForm: "Ointment",
    stock: 85,
    isFeatured: true,
    keywords: ["cough relief", "muscle aches", "congestion"],
    sku: "SKU-VICKS-001",
    activeIngredients: [
      { name: "Camphor", amount: "4.8%" },
      { name: "Eucalyptus Oil", amount: "1.2%" },
      { name: "Menthol", amount: "2.6%" }
    ],
    warnings: [
      "For external use only",
      "Do not heat or microwave"
    ],
    directions: "Rub a thick layer on chest and throat",
    contraindications: ["Under 2 years old"],
    sideEffects: ["Skin irritation if used incorrectly"],
    storage: "Store at room temperature",
    tagline: "Soothing Vapor Relief"
  }),

  createProduct({
    name: "Children's Motrin Oral Suspension Berry 4oz",
    price: 8.99,
    imageKey: 'childrens-motrin-berry',
    category: PAIN_FEVER,
    subcategoryIndex: 0, // Oral Pain Relief
    item: "Children's Pain Relief",
    itemSlug: "childrens-pain-relief",
    shortDescription: "Children's fever reducer",
    description: "Provides up to 8 hours of fever and pain relief for children",
    dosageForm: "Liquid",
    stock: 70,
    isFeatured: true,
    keywords: ["children's pain relief", "fever reducer", "ibuprofen"],
    sku: "SKU-MOTRIN-001",
    activeIngredients: [
      { name: "Ibuprofen", amount: "100 mg/5mL" }
    ],
    warnings: [
      "Use weight/age chart for proper dosing",
      "Do not use more than directed"
    ],
    directions: "Use provided dosing cup, follow age/weight chart",
    contraindications: ["Under 6 months old"],
    sideEffects: ["Upset stomach"],
    storage: "Store at room temperature",
    tagline: "Kid's Fever Relief"
  })
] 