import { createProduct } from './utils'
import { ALLERGY } from '../categories/flat'
import type { Product } from '@/types'

export const allergyProducts: Partial<Product>[] = [
  createProduct({
    name: "Zyrtec 24 Hour Allergy Relief 30ct",
    price: 24.99,
    imageKey: 'zyrtec-24hr-30ct',
    category: ALLERGY,
    subcategoryIndex: 0, // Antihistamines
    item: "Zyrtec",
    itemSlug: "zyrtec",
    shortDescription: "24-hour allergy relief",
    description: "Provides 24-hour relief from indoor and outdoor allergies",
    dosageForm: "Tablet",
    stock: 85,
    isFeatured: true,
    keywords: ["allergy relief", "antihistamine", "indoor allergies", "outdoor allergies"],
    sku: "SKU-ZYRTEC-001",
    activeIngredients: [
      { name: "Cetirizine HCl", amount: "10 mg" }
    ],
    warnings: [
      "May cause drowsiness",
      "Do not exceed recommended dose"
    ],
    directions: "Take one tablet daily",
    contraindications: ["Kidney disease", "Liver disease"],
    sideEffects: ["Drowsiness", "Dry mouth", "Fatigue"],
    storage: "Store at room temperature",
    tagline: "Live Allergy Free"
  }),

  createProduct({
    name: "Flonase Allergy Relief Spray 120ct",
    price: 21.99,
    imageKey: 'flonase-allergy-120ct',
    category: ALLERGY,
    subcategoryIndex: 1, // Nasal Sprays
    item: "Flonase",
    itemSlug: "flonase",
    shortDescription: "Complete allergy relief",
    description: "Relieves nasal congestion, sneezing, runny nose, and itchy nose",
    dosageForm: "Nasal Spray",
    stock: 60,
    isFeatured: true,
    keywords: ["nasal spray", "allergy relief", "congestion"],
    sku: "SKU-FLONASE-001",
    activeIngredients: [
      { name: "Fluticasone Propionate", amount: "50 mcg" }
    ],
    warnings: [
      "Do not use if you have glaucoma",
      "Consult doctor if you have recent nose problems"
    ],
    directions: "2 sprays in each nostril once daily",
    contraindications: ["Glaucoma", "Recent nasal surgery"],
    sideEffects: ["Nosebleeds", "Throat irritation"],
    storage: "Store at room temperature",
    tagline: "Be Greater Than Allergies"
  }),

  createProduct({
    name: "Visine Allergy Eye Drops 0.5oz",
    price: 11.99,
    imageKey: 'visine-allergy-drops',
    category: ALLERGY,
    subcategoryIndex: 2, // Eye Drops
    item: "Visine",
    itemSlug: "visine",
    shortDescription: "Fast eye allergy relief",
    description: "Relieves red, itchy, watery eyes due to allergies",
    dosageForm: "Eye Drops",
    stock: 75,
    isFeatured: false,
    keywords: ["eye drops", "allergy relief", "red eyes"],
    sku: "SKU-VISINE-001",
    activeIngredients: [
      { name: "Ketotifen", amount: "0.025%" }
    ],
    warnings: [
      "Remove contact lenses before use",
      "Wait 10 minutes before reinserting contacts"
    ],
    directions: "1-2 drops in affected eye(s) up to twice daily",
    contraindications: ["Eye infection", "Recent eye surgery"],
    sideEffects: ["Burning", "Stinging", "Eye irritation"],
    storage: "Store at room temperature",
    tagline: "See Clearly Again"
  }),

  createProduct({
    name: "Claritin 24 Hour Non-Drowsy 30ct",
    price: 19.99,
    imageKey: 'claritin-24hr-30ct',
    category: ALLERGY,
    subcategoryIndex: 0, // Antihistamines
    item: "Claritin",
    itemSlug: "claritin",
    shortDescription: "Non-drowsy allergy relief",
    description: "24-hour relief from indoor and outdoor allergies without drowsiness",
    dosageForm: "Tablet",
    stock: 90,
    isFeatured: true,
    keywords: ["allergy relief", "non-drowsy", "antihistamine"],
    sku: "SKU-CLARITIN-001",
    activeIngredients: [
      { name: "Loratadine", amount: "10 mg" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "If pregnant or breastfeeding, ask a health professional before use"
    ],
    directions: "Take one tablet daily with water",
    contraindications: ["Liver disease"],
    sideEffects: ["Headache", "Dry mouth"],
    storage: "Store at room temperature",
    tagline: "Clear Days Ahead"
  }),

  createProduct({
    name: "Allegra 24 Hour Allergy Relief 45ct",
    price: 26.99,
    imageKey: 'allegra-24hr-45ct',
    category: ALLERGY,
    subcategoryIndex: 0, // Antihistamines
    item: "Allegra",
    itemSlug: "allegra",
    shortDescription: "Fast-acting allergy relief",
    description: "Non-drowsy 24-hour relief from seasonal allergies and hay fever",
    dosageForm: "Tablet",
    stock: 70,
    isFeatured: false,
    keywords: ["allergy relief", "non-drowsy", "antihistamine", "hay fever"],
    sku: "SKU-ALLEGRA-001",
    activeIngredients: [
      { name: "Fexofenadine HCl", amount: "180 mg" }
    ],
    warnings: [
      "Do not exceed recommended dose",
      "Do not take with fruit juices"
    ],
    directions: "Take one tablet daily with water",
    contraindications: ["Kidney disease"],
    sideEffects: ["Headache", "Back pain"],
    storage: "Store at room temperature",
    tagline: "Freedom from Allergies"
  }),

  createProduct({
    name: "Honeywell HEPA Air Purifier",
    price: 149.99,
    imageKey: 'honeywell-hepa-purifier',
    category: ALLERGY,
    subcategoryIndex: 4, // Air Purifiers
    item: "Honeywell",
    itemSlug: "honeywell",
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
  }),

  createProduct({
    name: "MyAllergyTest Home Testing Kit",
    price: 39.99,
    imageKey: 'myallergytest-kit',
    category: ALLERGY,
    subcategoryIndex: 3, // Allergy Testing Kits
    item: "MyAllergyTest",
    itemSlug: "myallergytest",
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
    name: "Nasacort Allergy 24HR Spray",
    price: 19.99,
    imageKey: 'nasacort-24hr',
    category: ALLERGY,
    subcategoryIndex: 1, // Nasal Sprays
    item: "Nasacort",
    itemSlug: "nasacort",
    shortDescription: "Scent-free nasal spray",
    description: "24-hour relief from nasal allergy symptoms with no scent or harsh taste",
    dosageForm: "Nasal Spray",
    stock: 55,
    isFeatured: false,
    keywords: ["nasal spray", "allergy relief", "scent-free"],
    sku: "SKU-NASACORT-001",
    activeIngredients: [
      { name: "Triamcinolone Acetonide", amount: "55 mcg" }
    ],
    warnings: [
      "Do not use if you have nasal bleeding",
      "Stop use if you develop nose bleeds"
    ],
    directions: "1-2 sprays in each nostril once daily",
    contraindications: ["Recent nasal surgery", "Nasal infections"],
    sideEffects: ["Nose bleeds", "Sore throat"],
    storage: "Store at room temperature",
    tagline: "Powerful, Scent-free Relief"
  }),

  createProduct({
    name: "NeilMed Sinus Rinse Complete Kit 1ct",
    price: 14.99,
    imageKey: 'neilmed-sinus-rinse-complete-kit-1ct',
    category: ALLERGY,
    subcategoryIndex: 1, // Nasal Sprays
    item: "NeilMed",
    itemSlug: "neilmed",
    shortDescription: "Complete sinus rinse system",
    description: "Cleanse your sinuses with this complete kit including squeeze bottle and pre-measured packets",
    dosageForm: "Kit",
    stock: 75,
    isFeatured: true,
    keywords: ["sinus rinse", "nasal irrigation", "sinus care"],
    sku: "SKU-NEILMED-001",
    activeIngredients: [
      { name: "Sodium Chloride", amount: "0.9%" },
      { name: "Sodium Bicarbonate", amount: "trace" }
    ],
    warnings: [
      "Use only distilled or boiled water",
      "Do not use if you have ear infections"
    ],
    directions: "Mix one packet with 240mL lukewarm water, use as directed",
    contraindications: ["Complete nasal obstruction", "Ear infection"],
    sideEffects: ["Mild nasal irritation"],
    storage: "Store in a clean, dry place",
    tagline: "Natural Sinus Relief"
  }),

  createProduct({
    name: "Flonase Sensimist 24HR Allergy Relief Scent Free Nasal Spray 0.34oz",
    price: 23.99,
    imageKey: 'flonase-sensimist-24hr-allergy-relief-scent-free-nasal-spray-0.34oz',
    category: ALLERGY,
    subcategoryIndex: 1, // Nasal Sprays
    item: "Nasal Sprays",
    itemSlug: "nasal-sprays",
    shortDescription: "24-hour scent-free allergy relief",
    description: "Experience relief from your allergies with Flonase Sensimist 24HR Allergy Relief Nasal Spray. Scent-free and long-lasting.",
    dosageForm: "Nasal Spray",
    stock: 65,
    isFeatured: true,
    keywords: ["allergy relief", "nasal spray", "scent-free"],
    sku: "SKU-FLONASE-001",
    activeIngredients: [
      { name: "Fluticasone Propionate", amount: "27.5mcg" }
    ],
    warnings: [
      "Do not use if you have nasal bleeding",
      "Consult doctor if symptoms persist"
    ],
    directions: "2 sprays in each nostril daily",
    contraindications: ["Recent nasal surgery", "Tuberculosis infection"],
    sideEffects: ["Nosebleeds", "Throat irritation"],
    storage: "Store at room temperature",
    tagline: "Breathe Easy"
  }),

  createProduct({
    name: "Children's Flonase Sensimist 60 Sprays",
    price: 19.99,
    imageKey: 'childrens-flonase-sensimist-60-sprays',
    category: ALLERGY,
    subcategoryIndex: 1, // Nasal Sprays
    item: "Nasal Sprays",
    itemSlug: "nasal-sprays",
    shortDescription: "Gentle allergy relief for kids",
    description: "Relieve your child's allergy symptoms with Children's Flonase Sensimist. This gentle, scent-free nasal spray provides 24-hour relief.",
    dosageForm: "Nasal Spray",
    stock: 55,
    isFeatured: true,
    keywords: ["children's allergy", "nasal spray", "pediatric"],
    sku: "SKU-FLONASE-002",
    activeIngredients: [
      { name: "Fluticasone Propionate", amount: "27.5mcg" }
    ],
    warnings: [
      "For children 4 years and older",
      "Consult pediatrician before use"
    ],
    directions: "1-2 sprays in each nostril daily",
    contraindications: ["Under 4 years old", "Nasal infections"],
    sideEffects: ["Mild nosebleeds", "Nasal irritation"],
    storage: "Store at room temperature",
    tagline: "Kid-Friendly Allergy Relief"
  }),

  createProduct({
    name: "Afrin Original Nasal Spray 0.5oz",
    price: 8.99,
    imageKey: 'afrin-original-nasal-spray',
    category: ALLERGY,
    subcategoryIndex: 1, // Nasal Sprays
    item: "Nasal Sprays",
    itemSlug: "nasal-sprays",
    shortDescription: "12-hour nasal congestion relief",
    description: "Fast-acting nasal decongestant spray provides up to 12 hours of relief",
    dosageForm: "Nasal Spray",
    stock: 65,
    isFeatured: false,
    keywords: ["nasal spray", "congestion", "decongestant"],
    sku: "SKU-AFRIN-001",
    activeIngredients: [
      { name: "Oxymetazoline HCl", amount: "0.05%" }
    ],
    warnings: [
      "Do not use for more than 3 days",
      "May cause rebound congestion"
    ],
    directions: "2-3 sprays in each nostril every 12 hours",
    contraindications: ["High blood pressure", "Heart disease"],
    sideEffects: ["Burning", "Stinging", "Sneezing"],
    storage: "Store at room temperature",
    tagline: "Breathe Freely Again"
  }),

  createProduct({
    name: "Children's Benadryl Allergy Liquid 4oz",
    price: 8.99,
    imageKey: 'childrens-benadryl-liquid',
    category: ALLERGY,
    subcategoryIndex: 0, // Antihistamines
    item: "Antihistamines",
    itemSlug: "antihistamines",
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
  })
] 