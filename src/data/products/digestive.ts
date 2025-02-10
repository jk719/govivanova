import { createProduct } from './utils'
import { DIGESTIVE } from '../categories/flat'
import type { Product } from '@/types'

export const digestiveProducts: Partial<Product>[] = [
  createProduct({
    name: "MYLANTA ANTACID CLASSIC LIQ 12OZ",
    price: 9.99,
    imageKey: 'mylanta-antacid-classic-liq-12oz',
    category: DIGESTIVE,
    subcategoryIndex: 0, // Antacids
    item: "Antacids",
    itemSlug: "antacids",
    shortDescription: "Fast heartburn relief",
    description: "This classic antacid liquid by Mylanta quickly neutralizes stomach acid, providing fast and effective relief.",
    dosageForm: "Liquid",
    stock: 90,
    isFeatured: true,
    keywords: ["antacid", "heartburn", "indigestion"],
    sku: "SKU-MYLANTA-002",
    activeIngredients: [
      { name: "Aluminum Hydroxide", amount: "400 mg" },
      { name: "Magnesium Hydroxide", amount: "400 mg" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "If pregnant, consult doctor"
    ],
    directions: "Take 2-4 teaspoons as needed",
    contraindications: ["Kidney disease"],
    sideEffects: ["Chalky taste"],
    storage: "Store at room temperature",
    tagline: "Happy Tummy"
  }),

  createProduct({
    name: "Pepcid Maximum Strength 8ct",
    price: 9.99,
    imageKey: 'pepcid-max',
    category: DIGESTIVE,
    subcategoryIndex: 0, // Antacids
    item: "Pepcid",
    itemSlug: "pepcid",
    shortDescription: "Maximum strength acid reducer",
    description: "Fast-acting relief of heartburn and acid indigestion",
    dosageForm: "Tablet",
    stock: 85,
    isFeatured: true,
    keywords: ["heartburn", "acid reducer", "indigestion"],
    sku: "SKU-PEPCID-001",
    activeIngredients: [
      { name: "Famotidine", amount: "20 mg" }
    ],
    warnings: [
      "Do not use if you have trouble swallowing",
      "Do not use with other acid reducers"
    ],
    directions: "Take 1 tablet with a glass of water",
    contraindications: ["Kidney disease", "Liver disease"],
    sideEffects: ["Headache", "Dizziness", "Constipation"],
    storage: "Store at room temperature",
    tagline: "Fast Heartburn Relief"
  }),

  createProduct({
    name: "Alka-Seltzer Extra Strength 24ct",
    price: 8.99,
    imageKey: 'alka-seltzer-extra',
    category: DIGESTIVE,
    subcategoryIndex: 0, // Antacids
    item: "Alka-Seltzer",
    itemSlug: "alka-seltzer",
    shortDescription: "Fast relief antacid",
    description: "Relief from heartburn, acid indigestion, and upset stomach",
    dosageForm: "Effervescent Tablet",
    stock: 100,
    isFeatured: false,
    keywords: ["antacid", "heartburn", "upset stomach"],
    sku: "SKU-ALKASELTZER-002",
    activeIngredients: [
      { name: "Anhydrous Citric Acid", amount: "1000 mg" },
      { name: "Sodium Bicarbonate", amount: "1916 mg" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "High sodium content"
    ],
    directions: "Dissolve 2 tablets in 4 oz water before taking",
    contraindications: ["Sodium-restricted diet"],
    sideEffects: ["Burping", "Gas"],
    storage: "Store in a dry place",
    tagline: "Plop Plop, Fizz Fizz"
  }),

  createProduct({
    name: "Imodium Multi-Symptom 18ct",
    price: 11.99,
    imageKey: 'imodium-multi-symptom-18ct',
    category: DIGESTIVE,
    subcategoryIndex: 2, // Anti-Diarrheal
    item: "Imodium",
    itemSlug: "imodium",
    shortDescription: "Complete diarrhea relief",
    description: "Relieves diarrhea, gas, bloating, cramps, and pressure",
    dosageForm: "Caplet",
    stock: 65,
    isFeatured: true,
    keywords: ["anti-diarrheal", "stomach relief", "gas relief"],
    sku: "SKU-IMODIUM-001",
    activeIngredients: [
      { name: "Loperamide HCl", amount: "2 mg" },
      { name: "Simethicone", amount: "125 mg" }
    ],
    warnings: [
      "Do not use if you have bloody diarrhea",
      "Stop use if diarrhea lasts more than 2 days"
    ],
    directions: "Take 2 caplets initially, then 1 after each loose stool",
    contraindications: ["Acute dysentery", "Ulcerative colitis"],
    sideEffects: ["Constipation", "Stomach pain"],
    storage: "Store at room temperature",
    tagline: "Complete Relief"
  }),

  createProduct({
    name: "Florastor Daily Probiotic 20ct",
    price: 24.99,
    imageKey: 'florastor-kids',
    category: DIGESTIVE,
    subcategoryIndex: 3, // Probiotics
    item: "Florastor",
    itemSlug: "florastor",
    shortDescription: "Daily digestive support",
    description: "Helps maintain healthy digestion and supports immune system",
    dosageForm: "Capsule",
    stock: 40,
    isFeatured: true,
    keywords: ["probiotic", "digestive health", "immune support"],
    sku: "SKU-FLORASTOR-001",
    activeIngredients: [
      { name: "Saccharomyces boulardii lyo", amount: "250 mg" }
    ],
    warnings: [
      "Consult doctor if immunocompromised",
      "Keep out of reach of children"
    ],
    directions: "Take 1-2 capsules daily with or without food",
    contraindications: ["Yeast allergy"],
    sideEffects: ["Mild gas", "Bloating"],
    storage: "Store in a cool, dry place",
    tagline: "Balance Your Gut"
  }),

  createProduct({
    name: "Dulcolax Gentle Relief 25ct",
    price: 9.99,
    imageKey: 'dulcolax-gentle-25ct',
    category: DIGESTIVE,
    subcategoryIndex: 1, // Laxatives
    item: "Dulcolax",
    itemSlug: "dulcolax",
    shortDescription: "Gentle overnight relief",
    description: "Gentle, predictable overnight relief from occasional constipation",
    dosageForm: "Tablet",
    stock: 75,
    isFeatured: false,
    keywords: ["laxative", "constipation relief", "overnight relief"],
    sku: "SKU-DULCOLAX-001",
    activeIngredients: [
      { name: "Bisacodyl", amount: "5 mg" }
    ],
    warnings: [
      "Do not use when abdominal pain is present",
      "Do not use for more than 7 days"
    ],
    directions: "Take 1-3 tablets in a single daily dose",
    contraindications: ["Intestinal blockage", "Acute stomach pain"],
    sideEffects: ["Stomach cramps", "Nausea"],
    storage: "Store at room temperature",
    tagline: "Gentle, Predictable Relief"
  }),

  createProduct({
    name: "Beano Ultra 30ct",
    price: 7.99,
    imageKey: 'beano-ultra-30ct',
    category: DIGESTIVE,
    subcategoryIndex: 4, // Digestive Enzymes
    item: "Beano",
    itemSlug: "beano",
    shortDescription: "Prevents gas from food",
    description: "Prevents gas, bloating, and discomfort from gas-causing foods",
    dosageForm: "Tablet",
    stock: 90,
    isFeatured: false,
    keywords: ["gas relief", "enzyme", "digestive aid"],
    sku: "SKU-BEANO-001",
    activeIngredients: [
      { name: "Alpha-galactosidase enzyme", amount: "300 GALU" }
    ],
    warnings: [
      "Take before first bite of gas-causing foods",
      "Not for use with galactosemia"
    ],
    directions: "Take 2-3 tablets with first bite of problem foods",
    contraindications: ["Galactosemia"],
    sideEffects: ["None known when used as directed"],
    storage: "Store in a cool, dry place",
    tagline: "Enjoy Foods Again"
  }),

  createProduct({
    name: "Phillips Milk of Magnesia Original Liquid 12oz",
    price: 7.99,
    imageKey: 'phillips-milk-of-magnesia-original-liquid-12oz',
    category: DIGESTIVE,
    subcategoryIndex: 1, // Laxatives
    item: "Laxatives",
    itemSlug: "laxatives",
    shortDescription: "Gentle relief from constipation",
    description: "Experience fast relief from stomach discomfort with this trusted formula.",
    dosageForm: "Liquid",
    stock: 75,
    isFeatured: true,
    keywords: ["laxative", "constipation", "stomach relief"],
    sku: "SKU-PHILLIPS-001",
    activeIngredients: [
      { name: "Magnesium Hydroxide", amount: "1200 mg/15 mL" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "Drink plenty of water"
    ],
    directions: "Take 2-4 tablespoons once daily",
    contraindications: ["Kidney disease", "Magnesium-restricted diet"],
    sideEffects: ["Diarrhea", "Stomach cramps"],
    storage: "Store at room temperature",
    tagline: "Gentle, Effective Relief"
  }),

  createProduct({
    name: "Culturelle Kids Probiotic Packets 30ct",
    price: 19.99,
    imageKey: 'culturelle-kids-probiotic',
    category: DIGESTIVE,
    subcategoryIndex: 3, // Probiotics
    item: "Probiotics",
    itemSlug: "probiotics",
    shortDescription: "Daily digestive support for kids",
    description: "Supports digestive and immune health with proven probiotic strain",
    dosageForm: "Powder Packet",
    stock: 45,
    isFeatured: false,
    keywords: ["probiotics", "digestive health", "kids health"],
    sku: "SKU-CULTURELLE-001",
    activeIngredients: [
      { name: "Lactobacillus rhamnosus GG", amount: "5 billion CFU" }
    ],
    warnings: [
      "Store away from heat and moisture",
      "Consult doctor if your child has immune system problems"
    ],
    directions: "Mix one packet daily with cold food or beverage",
    contraindications: ["Severe immune deficiency"],
    sideEffects: ["Mild gas or bloating initially"],
    storage: "Store in a cool, dry place",
    tagline: "Support Their Growing Gut"
  }),

  createProduct({
    name: "Pedialyte AdvancedCare Plus Berry Frost 1L",
    price: 6.99,
    imageKey: 'pedialyte-advancedcare-plus-berry-frost',
    category: DIGESTIVE,  // Changed from CHILDRENS
    subcategoryIndex: 2, // Digestive Health
    item: "Digestive Health",
    itemSlug: "digestive-health",
    shortDescription: "Advanced rehydration solution",
    description: "Medical-grade hydration with PreActiv Prebiotics for digestive health support",
    dosageForm: "Liquid",
    stock: 100,
    isFeatured: true,
    keywords: ["hydration", "electrolytes", "digestive health"],
    sku: "SKU-PEDIALYTE-001",
    activeIngredients: [
      { name: "Electrolytes", amount: "Multiple" },
      { name: "PreActiv Prebiotics", amount: "Proprietary" }
    ],
    warnings: [
      "Not for children under 1 year",
      "Consult doctor if diarrhea lasts more than 24 hours"
    ],
    directions: "Sip small amounts frequently as needed",
    contraindications: ["Kidney disease"],
    sideEffects: ["None when used as directed"],
    storage: "Refrigerate after opening",
    tagline: "Advanced Hydration"
  }),

  createProduct({
    name: "Dramamine Motion Sickness Relief Original Formula 36ct",
    price: 8.99,
    imageKey: 'dramamine-original',
    category: DIGESTIVE,  // Changed from FIRST_AID
    subcategoryIndex: 5, // Motion Sickness
    item: "Motion Sickness",
    itemSlug: "motion-sickness",
    shortDescription: "Motion sickness relief",
    description: "Original formula for prevention and treatment of motion sickness",
    dosageForm: "Tablet",
    stock: 75,
    isFeatured: false,
    keywords: ["motion sickness", "travel medicine", "nausea relief"],
    sku: "SKU-DRAMAMINE-002",
    activeIngredients: [
      { name: "Dimenhydrinate", amount: "50 mg" }
    ],
    warnings: [
      "May cause drowsiness",
      "Do not drive or operate machinery"
    ],
    directions: "Take 1-2 tablets every 4-6 hours",
    contraindications: ["Glaucoma", "Enlarged prostate"],
    sideEffects: ["Drowsiness", "Dry mouth"],
    storage: "Store at room temperature",
    tagline: "Travel Comfort"
  })
] 