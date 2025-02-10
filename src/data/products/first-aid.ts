import { createProduct } from './utils'
import { FIRST_AID } from '../categories/flat'
import type { Product } from '@/types'

export const firstAidProducts: Partial<Product>[] = [
  createProduct({
    name: "BAND-AID BANDAGES KIDS HELLO KITTY ASSORTED 20CT",
    price: 5.99,
    imageKey: 'band-aid-bandages-kids-hello-kitty-assorted-20ct',
    category: FIRST_AID,
    subcategoryIndex: 0, // Bandages & Dressings
    item: "Bandages & Dressings",
    itemSlug: "bandages-dressings",
    shortDescription: "Fun Hello Kitty designed bandages",
    description: "Introducing BAND-AID BANDAGES KIDS HELLO KITTY ASSORTED in a pack of 20! Give your child a smile with these fun and colorful bandages.",
    dosageForm: "Bandage",
    stock: 100,
    isFeatured: true,
    keywords: ["bandages", "kids", "hello kitty", "first aid"],
    sku: "SKU-BANDAID-001",
    activeIngredients: [],
    warnings: [
      "For external use only",
      "Stop use if irritation develops"
    ],
    directions: "Clean wound area before applying",
    contraindications: ["None"],
    sideEffects: ["None when used as directed"],
    storage: "Store in a cool, dry place",
    tagline: "Quick Relief & First Aid"
  }),

  createProduct({
    name: "Band-Aid Flexible Fabric Bandages 100ct",
    price: 7.99,
    imageKey: 'band-aid-flexible-fabric',
    category: FIRST_AID,
    subcategoryIndex: 0, // Bandages & Dressings
    item: "Band-Aid",
    itemSlug: "band-aid",
    shortDescription: "Flexible wound protection",
    description: "Comfortable, flexible protection for minor cuts and scrapes",
    dosageForm: "Medical Supply",
    stock: 150,
    isFeatured: true,
    keywords: ["bandages", "first aid", "wound care"],
    sku: "SKU-BANDAID-001",
    activeIngredients: [],
    warnings: [
      "For external use only",
      "Change bandage daily"
    ],
    directions: "Clean wound area before applying. Replace daily or when wet.",
    contraindications: ["Deep wounds", "Animal bites"],
    sideEffects: ["Skin irritation in sensitive individuals"],
    storage: "Store in a cool, dry place",
    tagline: "Trusted Wound Care"
  }),

  createProduct({
    name: "Neosporin Original Antibiotic Ointment 1oz",
    price: 6.99,
    imageKey: 'neosporin-original',
    category: FIRST_AID,
    subcategoryIndex: 1, // Antiseptics & Disinfectants
    item: "Neosporin",
    itemSlug: "neosporin",
    shortDescription: "Triple antibiotic protection",
    description: "Helps prevent infection in minor cuts, scrapes, and burns",
    dosageForm: "Ointment",
    stock: 100,
    isFeatured: true,
    keywords: ["antibiotic", "wound care", "infection prevention"],
    sku: "SKU-NEOSPORIN-001",
    activeIngredients: [
      { name: "Bacitracin Zinc", amount: "400 units" },
      { name: "Neomycin", amount: "3.5 mg" },
      { name: "Polymyxin B", amount: "5000 units" }
    ],
    warnings: [
      "For external use only",
      "Stop use if irritation occurs"
    ],
    directions: "Clean affected area and apply small amount 1-3 times daily",
    contraindications: ["Deep wounds", "Animal bites"],
    sideEffects: ["Allergic reactions in some individuals"],
    storage: "Store at room temperature",
    tagline: "Maximum Infection Protection"
  }),

  createProduct({
    name: "Johnson's First Aid Gauze Pads 4x4 25ct",
    price: 4.99,
    imageKey: 'johnsons-gauze-pads',
    category: FIRST_AID,
    subcategoryIndex: 2, // Medical Tape & Gauze
    item: "Johnson's",
    itemSlug: "johnsons",
    shortDescription: "Sterile wound dressing",
    description: "Sterile, absorbent pads for wound care and dressing changes",
    dosageForm: "Medical Supply",
    stock: 120,
    isFeatured: false,
    keywords: ["gauze", "wound care", "dressing"],
    sku: "SKU-JOHNSONS-001",
    activeIngredients: [],
    warnings: [
      "Single use only",
      "Discard if package is damaged"
    ],
    directions: "Clean wound before applying. Change as needed or directed.",
    contraindications: ["None when used as directed"],
    sideEffects: ["None known"],
    storage: "Store in a cool, dry place",
    tagline: "Professional Wound Care"
  }),

  createProduct({
    name: "Solarcaine Cool Aloe Burn Relief 6oz",
    price: 8.99,
    imageKey: 'solarcaine-aloe',
    category: FIRST_AID,
    subcategoryIndex: 3, // Burn Relief Products
    item: "Solarcaine",
    itemSlug: "solarcaine",
    shortDescription: "Cooling burn relief spray",
    description: "Fast pain relief for minor burns, sunburn, and skin irritations",
    dosageForm: "Spray",
    stock: 80,
    isFeatured: false,
    keywords: ["burn relief", "aloe", "pain relief"],
    sku: "SKU-SOLARCAINE-001",
    activeIngredients: [
      { name: "Lidocaine HCl", amount: "0.5%" },
      { name: "Aloe Vera", amount: "2.5%" }
    ],
    warnings: [
      "For external use only",
      "Do not use on severe burns"
    ],
    directions: "Spray on affected area up to 3-4 times daily",
    contraindications: ["Deep burns", "Open wounds"],
    sideEffects: ["Temporary stinging"],
    storage: "Store at room temperature",
    tagline: "Instant Burn Relief"
  }),

  createProduct({
    name: "ACE Elastic Bandage with Clips 4\"",
    price: 6.99,
    imageKey: 'ace-elastic-bandage',
    category: FIRST_AID,
    subcategoryIndex: 0, // Bandages & Dressings
    item: "ACE",
    itemSlug: "ace",
    shortDescription: "Reusable compression wrap",
    description: "Provides compression and support for sprains, strains, and sports injuries",
    dosageForm: "Medical Supply",
    stock: 95,
    isFeatured: false,
    keywords: ["elastic bandage", "compression", "sports injury"],
    sku: "SKU-ACE-001",
    activeIngredients: [],
    warnings: [
      "Do not wrap too tightly",
      "Remove if numbness occurs"
    ],
    directions: "Wrap affected area with even pressure, secure with clips",
    contraindications: ["Poor circulation", "Deep vein thrombosis"],
    sideEffects: ["Skin irritation if too tight"],
    storage: "Store in a cool, dry place",
    tagline: "Trusted Support"
  }),

  createProduct({
    name: "Curad Sterile Alcohol Prep Pads 100ct",
    price: 3.99,
    imageKey: 'curad-alcohol-pads',
    category: FIRST_AID,
    subcategoryIndex: 1, // Antiseptics & Disinfectants
    item: "Curad",
    itemSlug: "curad",
    shortDescription: "Sterile skin preparation",
    description: "Individual alcohol pads for cleaning and disinfecting skin",
    dosageForm: "Medical Supply",
    stock: 200,
    isFeatured: false,
    keywords: ["alcohol pads", "antiseptic", "skin prep"],
    sku: "SKU-CURAD-001",
    activeIngredients: [
      { name: "Isopropyl Alcohol", amount: "70%" }
    ],
    warnings: [
      "For external use only",
      "Flammable until dry"
    ],
    directions: "Tear open packet and wipe area to be cleaned",
    contraindications: ["Open wounds", "Sensitive skin"],
    sideEffects: ["Temporary stinging"],
    storage: "Store at room temperature",
    tagline: "Clean & Sterile"
  }),

  createProduct({
    name: "TheraPearl Hot/Cold Pack Universal",
    price: 12.99,
    imageKey: 'therapearl-pack',
    category: FIRST_AID,
    subcategoryIndex: 4, // Cold Packs
    item: "TheraPearl",
    itemSlug: "therapearl",
    shortDescription: "Reusable therapy pack",
    description: "Flexible hot/cold therapy pack for pain relief and injury treatment",
    dosageForm: "Medical Supply",
    stock: 60,
    isFeatured: true,
    keywords: ["cold pack", "hot pack", "pain relief"],
    sku: "SKU-THERAPEARL-001",
    activeIngredients: [],
    warnings: [
      "Do not apply directly to skin",
      "Do not microwave more than recommended"
    ],
    directions: "Cold: Freeze for 2 hours. Heat: Microwave in 10-second intervals",
    contraindications: ["Sensitivity to cold/heat"],
    sideEffects: ["None when used as directed"],
    storage: "Store at room temperature",
    tagline: "Flexible Pain Relief"
  }),

  createProduct({
    name: "Betadine Antiseptic Solution 8oz",
    price: 9.99,
    imageKey: 'betadine-solution',
    category: FIRST_AID,
    subcategoryIndex: 1, // Antiseptics & Disinfectants
    item: "Betadine",
    itemSlug: "betadine",
    shortDescription: "Professional antiseptic",
    description: "Broad-spectrum antiseptic for wound cleaning and infection prevention",
    dosageForm: "Solution",
    stock: 70,
    isFeatured: false,
    keywords: ["antiseptic", "wound care", "infection prevention"],
    sku: "SKU-BETADINE-001",
    activeIngredients: [
      { name: "Povidone-iodine", amount: "10%" }
    ],
    warnings: [
      "For external use only",
      "May stain skin and fabric"
    ],
    directions: "Apply to affected area 1-3 times daily",
    contraindications: ["Iodine allergy", "Thyroid conditions"],
    sideEffects: ["Temporary skin staining", "Irritation"],
    storage: "Store at room temperature",
    tagline: "Professional Strength Protection"
  }),

  createProduct({
    name: "Mueller Sports Knee Brace Large",
    price: 24.99,
    imageKey: 'mueller-knee-brace',
    category: FIRST_AID,
    subcategoryIndex: 2, // Bandages & Braces
    item: "Bandages & Braces",
    itemSlug: "bandages-braces",
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
    name: "Dr. Scholl's Athlete's Foot Treatment",
    price: 8.99,
    imageKey: 'dr-scholls-athletes-foot',
    category: FIRST_AID,
    subcategoryIndex: 1, // Antiseptics & Disinfectants
    item: "Antiseptics & Disinfectants",
    itemSlug: "antiseptics-disinfectants",
    shortDescription: "Antifungal foot treatment",
    description: "Relieves itching, burning, and cracking of athlete's foot",
    dosageForm: "Cream",
    stock: 55,
    isFeatured: false,
    keywords: ["athlete's foot", "antifungal", "foot care"],
    sku: "SKU-DRSCHOLLS-001",
    activeIngredients: [
      { name: "Tolnaftate", amount: "1%" }
    ],
    warnings: [
      "For external use only",
      "Do not use on broken skin"
    ],
    directions: "Apply twice daily or as directed",
    contraindications: ["Open wounds"],
    sideEffects: ["Mild irritation"],
    storage: "Store at room temperature",
    tagline: "Healthy Feet Relief"
  }),

  createProduct({
    name: "Dramamine Motion Sickness Relief Original Formula 36ct",
    price: 8.99,
    imageKey: 'dramamine-original',
    category: FIRST_AID,
    subcategoryIndex: 5, // Travel Medicine
    item: "Travel Medicine",
    itemSlug: "travel-medicine",
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