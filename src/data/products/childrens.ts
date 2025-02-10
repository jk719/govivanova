import { createProduct } from './utils'
import { CHILDRENS } from '../categories/flat'
import type { Product } from '@/types'

export const childrensProducts: Partial<Product>[] = [
  createProduct({
    name: "Children's Tylenol Oral Suspension 4oz",
    price: 8.99,
    imageKey: 'childrens-tylenol-oral-suspension',
    category: CHILDRENS,
    subcategoryIndex: 1, // Pain & Fever Relievers
    item: "Tylenol",
    itemSlug: "tylenol",
    shortDescription: "Children's fever & pain relief",
    description: "Relieves minor aches, pains and fever in children ages 2-11",
    dosageForm: "Liquid",
    stock: 100,
    isFeatured: true,
    keywords: ["children's medicine", "fever reducer", "pain relief"],
    sku: "SKU-CHILDTYLENOL-001",
    activeIngredients: [
      { name: "Acetaminophen", amount: "160 mg/5mL" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "Use only enclosed dosing cup"
    ],
    directions: "Dose by weight/age - see dosing chart",
    contraindications: ["Liver disease"],
    sideEffects: ["None when used as directed"],
    storage: "Store at room temperature",
    tagline: "Trusted Fever Care"
  }),

  createProduct({
    name: "Children's Motrin Oral Suspension 4oz",
    price: 9.99,
    imageKey: 'childrens-motrin-suspension',
    category: CHILDRENS,
    subcategoryIndex: 1, // Pain & Fever Relievers
    item: "Motrin",
    itemSlug: "motrin",
    shortDescription: "Long-lasting fever relief",
    description: "Up to 8 hours of fever relief for children ages 2-11",
    dosageForm: "Liquid",
    stock: 85,
    isFeatured: true,
    keywords: ["children's medicine", "ibuprofen", "fever reducer"],
    sku: "SKU-CHILDMOTRIN-001",
    activeIngredients: [
      { name: "Ibuprofen", amount: "100 mg/5mL" }
    ],
    warnings: [
      "Do not use more than directed",
      "Consult doctor for children under 2"
    ],
    directions: "Use weight/age chart for proper dosing",
    contraindications: ["Aspirin allergy", "Stomach problems"],
    sideEffects: ["Upset stomach"],
    storage: "Store at room temperature",
    tagline: "Longer Lasting Relief"
  }),

  createProduct({
    name: "Children's Zyrtec Allergy Syrup 4oz",
    price: 14.99,
    imageKey: 'childrens-zyrtec-syrup',
    category: CHILDRENS,
    secondaryCategories: [ALLERGY],
    subcategoryIndex: 2, // Allergy Relief
    item: "Zyrtec",
    itemSlug: "zyrtec",
    shortDescription: "24-hour allergy relief",
    description: "Relief from indoor and outdoor allergies for children 2 years and older",
    dosageForm: "Syrup",
    stock: 70,
    isFeatured: false,
    keywords: ["children's allergy", "antihistamine", "allergy relief"],
    sku: "SKU-CHILDZYRTEC-001",
    activeIngredients: [
      { name: "Cetirizine HCl", amount: "5 mg/5mL" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "May cause drowsiness"
    ],
    directions: "Once daily dosing based on age",
    contraindications: ["Kidney disease"],
    sideEffects: ["Drowsiness", "Dry mouth"],
    storage: "Store at room temperature",
    tagline: "Kid's Allergy Relief"
  }),

  createProduct({
    name: "Children's Delsym Cough Suppressant 4oz",
    price: 12.99,
    imageKey: 'childrens-delsym-cough',
    category: CHILDRENS,
    subcategoryIndex: 0, // Cough & Cold Remedies
    item: "Delsym",
    itemSlug: "delsym",
    shortDescription: "12-hour cough relief",
    description: "Long-lasting cough suppressant for children ages 4 and older",
    dosageForm: "Liquid",
    stock: 60,
    isFeatured: false,
    keywords: ["cough medicine", "cough suppressant", "children's"],
    sku: "SKU-CHILDDELSYM-001",
    activeIngredients: [
      { name: "Dextromethorphan Polistirex", amount: "30 mg/5mL" }
    ],
    warnings: [
      "Do not use if you have chronic cough",
      "Do not use with other cough medicines"
    ],
    directions: "Use enclosed dosing cup, dose by age/weight",
    contraindications: ["Chronic cough", "Asthma"],
    sideEffects: ["Mild drowsiness"],
    storage: "Store at room temperature",
    tagline: "Long-Lasting Cough Relief"
  }),

  createProduct({
    name: "Flintstones Complete Multivitamin 60ct",
    price: 11.99,
    imageKey: 'flintstones-complete-60ct',
    category: CHILDRENS,
    subcategoryIndex: 6, // Vitamins
    item: "Flintstones",
    itemSlug: "flintstones",
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
    name: "Culturelle Kids Probiotic Packets 30ct",
    price: 19.99,
    imageKey: 'culturelle-kids-probiotic',
    category: CHILDRENS,
    subcategoryIndex: 4, // Probiotics
    item: "Culturelle",
    itemSlug: "culturelle",
    shortDescription: "Daily digestive support",
    description: "Supports digestive and immune health with proven probiotic strain",
    dosageForm: "Powder Packet",
    stock: 45,
    isFeatured: false,
    keywords: ["probiotics", "digestive health", "immune support"],
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
    name: "L'il Critters Immune C Plus Zinc 60ct",
    price: 13.99,
    imageKey: 'lil-critters-immune-c',
    category: CHILDRENS,
    subcategoryIndex: 6, // Vitamins
    item: "L'il Critters",
    itemSlug: "lil-critters",
    shortDescription: "Immune support gummies",
    description: "Delicious gummy vitamins with Vitamin C and Zinc for immune support",
    dosageForm: "Gummy",
    stock: 80,
    isFeatured: false,
    keywords: ["immune support", "vitamin c", "zinc", "gummies"],
    sku: "SKU-LILCRITTERS-001",
    activeIngredients: [
      { name: "Vitamin C", amount: "125 mg" },
      { name: "Zinc", amount: "7.5 mg" }
    ],
    warnings: [
      "Keep out of reach of children",
      "Do not exceed suggested serving"
    ],
    directions: "Children 2-3 years: 1 gummy daily, Children 4+ years: 2 gummies daily",
    contraindications: ["Zinc sensitivity"],
    sideEffects: ["None when used as directed"],
    storage: "Store in a cool, dry place",
    tagline: "Tasty Immune Support"
  }),

  createProduct({
    name: "Children's Benadryl Allergy Liquid 4oz",
    price: 8.99,
    imageKey: 'childrens-benadryl-liquid',
    category: CHILDRENS,
    subcategoryIndex: 2, // Allergy Relief
    item: "Benadryl",
    itemSlug: "benadryl",
    shortDescription: "Fast allergy relief",
    description: "Fast-acting relief from allergies and cold symptoms for children",
    dosageForm: "Liquid",
    stock: 65,
    isFeatured: false,
    keywords: ["allergy relief", "antihistamine", "children's medicine"],
    sku: "SKU-CHILDBENADRYL-001",
    activeIngredients: [
      { name: "Diphenhydramine HCl", amount: "12.5 mg/5mL" }
    ],
    warnings: [
      "May cause marked drowsiness",
      "Do not exceed recommended dose"
    ],
    directions: "Use age/weight chart for proper dosing",
    contraindications: ["Children under 6 years"],
    sideEffects: ["Drowsiness", "Dry mouth"],
    storage: "Store at room temperature",
    tagline: "Relief When They Need It"
  }),

  createProduct({
    name: "PediaSure Grow & Gain Kids Nutritional Shake Vanilla",
    price: 2.99,
    imageKey: 'pediasure-grow-gain-kids-nutritional-shake-vanilla',
    category: CHILDRENS,
    subcategoryIndex: 3, // Hydration & Nutrition
    item: "Hydration & Nutrition",
    itemSlug: "hydration-nutrition",
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
  }),

  createProduct({
    name: "PediaSure Grow & Gain Kids Nutritional Shake Chocolate",
    price: 2.99,
    imageKey: 'pediasure-grow-gain-kids-nutritional-shake-chocolate',
    category: CHILDRENS,
    subcategoryIndex: 3, // Hydration & Nutrition
    item: "Hydration & Nutrition",
    itemSlug: "hydration-nutrition",
    shortDescription: "Chocolate flavored nutrition shake",
    description: "Fuel your child's growth with PediaSure Grow & Gain Kids Nutritional Shake in delicious chocolate flavor.",
    dosageForm: "Liquid",
    stock: 150,
    isFeatured: true,
    keywords: ["nutritional shake", "kids vitamins", "growth support"],
    sku: "SKU-PEDIASURE-002",
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
  }),

  createProduct({
    name: "Natrol Kids Melatonin Berry Gummies 90ct",
    price: 14.99,
    imageKey: 'natrol-kids-melatonin-berry-gummies-90ct',
    category: CHILDRENS,
    subcategoryIndex: 5, // Sleep Support
    item: "Sleep Support",
    itemSlug: "sleep-support",
    shortDescription: "Kid-friendly sleep support",
    description: "Help promote peaceful and restful sleep with these delicious berry-flavored melatonin gummies.",
    dosageForm: "Gummy",
    stock: 80,
    isFeatured: true,
    keywords: ["sleep aid", "melatonin", "kids gummies"],
    sku: "SKU-NATROL-001",
    activeIngredients: [
      { name: "Melatonin", amount: "1mg" }
    ],
    warnings: [
      "Not for children under 4",
      "Do not exceed recommended dose"
    ],
    directions: "Take 1 gummy 30-60 minutes before bedtime",
    contraindications: ["Known melatonin sensitivity"],
    sideEffects: ["Drowsiness"],
    storage: "Store in a cool, dry place",
    tagline: "Sweet Dreams"
  }),

  createProduct({
    name: "Florastor Kids Probiotic Packets, 20 CT",
    price: 32.99,
    imageKey: 'florastor-kids-probiotic-packets-20-ct',
    category: CHILDRENS,
    subcategoryIndex: 4, // Probiotics
    item: "Probiotics",
    itemSlug: "probiotics",
    shortDescription: "Daily probiotic support for kids",
    description: "Support your child's digestive health with these easy-to-use probiotic packets.",
    dosageForm: "Powder",
    stock: 60,
    isFeatured: true,
    keywords: ["probiotics", "digestive health", "kids health"],
    sku: "SKU-FLORASTOR-001",
    activeIngredients: [
      { name: "Saccharomyces boulardii lyo", amount: "250mg" }
    ],
    warnings: [
      "Not for children under 2",
      "Consult doctor if immunocompromised"
    ],
    directions: "Mix one packet with food or drink daily",
    contraindications: ["Yeast allergy"],
    sideEffects: ["Mild digestive discomfort initially"],
    storage: "Store at room temperature",
    tagline: "Happy Tummy, Happy Child"
  }),

  createProduct({
    name: "Zarbee's Children's Cough & Mucus Night Syrup",
    price: 11.99,
    imageKey: 'zarbees-childrens-cough-mucus-night-syrup-4oz',
    category: CHILDRENS,
    subcategoryIndex: 0, // Cough & Cold Remedies
    item: "Cough & Cold Remedies",
    itemSlug: "cough-cold-remedies",
    shortDescription: "Natural nighttime cough relief",
    description: "Get a peaceful night's sleep with Zarbee's Children's Cough & Mucus Night Syrup. Made with natural ingredients.",
    dosageForm: "Syrup",
    stock: 70,
    isFeatured: true,
    keywords: ["cough syrup", "natural", "children's medicine"],
    sku: "SKU-ZARBEES-001",
    activeIngredients: [
      { name: "Dark Honey", amount: "Natural" },
      { name: "Ivy Leaf Extract", amount: "Proprietary" }
    ],
    warnings: [
      "Do not use in children under 12 months",
      "Keep out of reach of children"
    ],
    directions: "Use enclosed dosing cup, dose by age/weight",
    contraindications: ["Honey allergy", "Under 12 months"],
    sideEffects: ["None known when used as directed"],
    storage: "Store at room temperature",
    tagline: "Natural Nighttime Relief"
  }),

  createProduct({
    name: "Zarbee's Children's Cough & Mucus Day Syrup",
    price: 11.99,
    imageKey: 'zarbees-childrens-cough-mucus-day-syrup-4oz',
    category: CHILDRENS,
    subcategoryIndex: 0, // Cough & Cold Remedies
    item: "Cough & Cold Remedies",
    itemSlug: "cough-cold-remedies",
    shortDescription: "Natural daytime cough relief",
    description: "Natural daytime cough and congestion relief made with natural ingredients.",
    dosageForm: "Syrup",
    stock: 70,
    isFeatured: true,
    keywords: ["cough syrup", "natural", "children's medicine"],
    sku: "SKU-ZARBEES-002",
    activeIngredients: [
      { name: "Dark Honey", amount: "Natural" },
      { name: "Ivy Leaf Extract", amount: "Proprietary" }
    ],
    warnings: [
      "Do not use in children under 12 months",
      "Keep out of reach of children"
    ],
    directions: "Use enclosed dosing cup, dose by age/weight",
    contraindications: ["Honey allergy", "Under 12 months"],
    sideEffects: ["None known when used as directed"],
    storage: "Store at room temperature",
    tagline: "Natural Daytime Relief"
  }),

  createProduct({
    name: "HYLAND'S KIDS Mucus Cough NT GRP LIQ 4OZ",
    price: 13.99,
    imageKey: 'hylands-kids-mucus-cough-nt-grp-liq-4oz',
    category: CHILDRENS,
    subcategoryIndex: 0, // Cough & Cold Remedies
    item: "Cough & Cold Remedies",
    itemSlug: "cough-cold-remedies",
    shortDescription: "Homeopathic cough relief",
    description: "Specially formulated to help relieve cough and congestion in children.",
    dosageForm: "Liquid",
    stock: 65,
    isFeatured: true,
    keywords: ["homeopathic", "cough relief", "children's medicine"],
    sku: "SKU-HYLANDS-001",
    activeIngredients: [
      { name: "Homeopathic Blend", amount: "Proprietary" }
    ],
    warnings: [
      "If symptoms persist, consult doctor",
      "Keep out of reach of children"
    ],
    directions: "Follow age-specific dosing on package",
    contraindications: ["None known"],
    sideEffects: ["None known when used as directed"],
    storage: "Store at room temperature",
    tagline: "Gentle Nighttime Relief"
  }),

  createProduct({
    name: "Hyland's Kids Cough & Mucus Daytime Grape Liquid 4o",
    price: 9.99,
    imageKey: 'hyland-s-kids-cough-mucus-daytime-grape-liquid-4o',
    category: CHILDRENS,
    subcategoryIndex: 0, // Cough & Cold Remedies
    item: "Cough & Cold Remedies",
    itemSlug: "cough-cold-remedies",
    shortDescription: "Daytime cough relief",
    description: "Support your child's respiratory health with this homeopathic daytime formula.",
    dosageForm: "Liquid",
    stock: 65,
    isFeatured: true,
    keywords: ["homeopathic", "cough relief", "children's medicine"],
    sku: "SKU-HYLANDS-002",
    activeIngredients: [
      { name: "Homeopathic Blend", amount: "Proprietary" }
    ],
    warnings: [
      "If symptoms persist, consult doctor",
      "Keep out of reach of children"
    ],
    directions: "Follow age-specific dosing on package",
    contraindications: ["None known"],
    sideEffects: ["None known when used as directed"],
    storage: "Store at room temperature",
    tagline: "Natural Daytime Relief"
  }),

  createProduct({
    name: "Children's Mucinex Day/Night Multi-Symptom Cold & Flu Liquid",
    price: 17.99,
    imageKey: 'childrens-mucinex-day-night',
    category: CHILDRENS,
    subcategoryIndex: 0, // Cough & Cold Remedies
    item: "Cough & Cold Remedies",
    itemSlug: "cough-cold-remedies",
    shortDescription: "24-hour cold & flu relief",
    description: "Day and night relief from cold and flu symptoms for children",
    dosageForm: "Liquid",
    stock: 60,
    isFeatured: true,
    keywords: ["cold relief", "flu relief", "children's medicine"],
    sku: "SKU-MUCINEX-004",
    activeIngredients: [
      { name: "Acetaminophen", amount: "325 mg/10mL" },
      { name: "Dextromethorphan HBr", amount: "10 mg/10mL" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "Do not use with other acetaminophen products"
    ],
    directions: "Use enclosed dosing cup, dose by age/weight",
    contraindications: ["Liver problems", "Under 4 years old"],
    sideEffects: ["Drowsiness (night formula)"],
    storage: "Store at room temperature",
    tagline: "Children's Care"
  }),

  createProduct({
    name: "Pedialyte AdvancedCare Plus Berry Frost 1L",
    price: 6.99,
    imageKey: 'pedialyte-advancedcare-plus-berry-frost',
    category: CHILDRENS,
    subcategoryIndex: 3, // Hydration & Nutrition
    item: "Hydration & Nutrition",
    itemSlug: "hydration-nutrition",
    shortDescription: "Advanced rehydration solution",
    description: "Medical-grade hydration with PreActiv Prebiotics for children",
    dosageForm: "Liquid",
    stock: 100,
    isFeatured: true,
    keywords: ["hydration", "electrolytes", "children's health"],
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
  })
] 