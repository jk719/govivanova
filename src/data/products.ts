import type { Product } from '@/types'

export const initialProducts: Partial<Product>[] = [
  // Pain & Fever - Oral Pain Relief
  {
    name: "Tylenol Extra Strength Caplets 100ct",
    price: 12.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392385/viva-pharmacy/products/tylenol.png",
    category: "Pain & Fever",
    subcategory: "Oral Pain Relief",
    item: "Tylenol",
    categorySlug: "pain-fever",
    subcategorySlug: "oral-pain-relief",
    itemSlug: "tylenol",
    categoryPath: "Pain & Fever > Oral Pain Relief > Tylenol",
    shortDescription: "Fast-acting pain relief",
    description: "Provides temporary relief of minor aches and pains...",
    dosageForm: "Tablet",
    stock: 100,
    isFeatured: true,
    keywords: ["pain relief", "fever reducer", "tylenol"],
    sku: "SKU-TYLENOL-001",
    activeIngredients: [
      { name: "Acetaminophen", amount: "500 mg" }
    ],
    warnings: ["Do not exceed recommended dose"],
    directions: "Take 2 caplets every 6 hours",
    contraindications: ["Liver disease"],
    sideEffects: ["Nausea", "Stomach pain"],
    storage: "Store at room temperature",
    tagline: "Fast Relief from Pain",
    categoryTagline: "Pain-Free Living"
  },

  // Pain & Fever - Migraine Relief
  {
    name: "Excedrin Migraine Pain Relief 100ct",
    price: 15.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392385/viva-pharmacy/products/excedrin.png",
    category: "Pain & Fever",
    subcategory: "Migraine Relief",
    item: "Excedrin",
    categorySlug: "pain-fever",
    subcategorySlug: "migraine-relief",
    itemSlug: "excedrin",
    categoryPath: "Pain & Fever > Migraine Relief > Excedrin",
    shortDescription: "Fast migraine relief",
    description: "Provides relief from migraine pain and associated symptoms...",
    dosageForm: "Tablet",
    stock: 85,
    isFeatured: true,
    keywords: ["migraine", "headache", "pain relief"],
    sku: "SKU-EXCEDRIN-001",
    activeIngredients: [
      { name: "Acetaminophen", amount: "250 mg" },
      { name: "Aspirin", amount: "250 mg" },
      { name: "Caffeine", amount: "65 mg" }
    ],
    warnings: ["Do not exceed recommended dose", "Contains aspirin"],
    directions: "Take 2 tablets with water",
    contraindications: ["Bleeding disorders", "Aspirin allergy"],
    sideEffects: ["Upset stomach", "Nervousness"],
    storage: "Store at room temperature",
    tagline: "Powerful Migraine Relief",
    categoryTagline: "Pain-Free Living"
  },

  // Children's Medicine & Wellness
  {
    name: "Children's Motrin Oral Suspension 4oz",
    price: 8.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392385/viva-pharmacy/products/motrin.png",
    category: "Children's Medicine & Wellness",
    subcategory: "Pain & Fever Relievers",
    item: "Motrin",
    categorySlug: "childrens-medicine-wellness",
    subcategorySlug: "pain-fever-relievers",
    itemSlug: "motrin",
    categoryPath: "Children's Medicine & Wellness > Pain & Fever Relievers > Motrin",
    shortDescription: "Children's fever & pain relief",
    description: "Provides up to 8 hours of fever relief for children...",
    dosageForm: "Liquid",
    stock: 60,
    isFeatured: true,
    keywords: ["children", "fever", "pain relief"],
    sku: "SKU-MOTRIN-001",
    activeIngredients: [
      { name: "Ibuprofen", amount: "100 mg/5 mL" }
    ],
    warnings: ["Do not use more than directed", "Ask a doctor before use in children under 2 years"],
    directions: "See dosing chart based on child's weight",
    contraindications: ["Allergy to ibuprofen or NSAIDs"],
    sideEffects: ["Upset stomach", "Diarrhea"],
    storage: "Store at room temperature",
    tagline: "Safe Relief for Little Ones",
    categoryTagline: "Children's Care"
  },

  // Digestive Health
  {
    name: "Pepto-Bismol Original Liquid 8oz",
    price: 8.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392385/viva-pharmacy/products/pepto.png",
    category: "Digestive Health",
    subcategory: "Anti-Diarrheal",
    item: "Pepto-Bismol",
    categorySlug: "digestive-health",
    subcategorySlug: "anti-diarrheal",
    itemSlug: "pepto-bismol",
    categoryPath: "Digestive Health > Anti-Diarrheal > Pepto-Bismol",
    shortDescription: "Relief from digestive discomfort",
    description: "Provides relief from upset stomach, diarrhea...",
    dosageForm: "Liquid",
    stock: 75,
    isFeatured: true,
    keywords: ["stomach relief", "diarrhea", "indigestion"],
    sku: "SKU-PEPTO-001",
    activeIngredients: [
      { name: "Bismuth subsalicylate", amount: "525 mg" }
    ],
    warnings: ["Do not use if allergic to aspirin"],
    directions: "Take 2 tablespoons every 30-60 minutes",
    contraindications: ["Bleeding disorders"],
    sideEffects: ["Darkened tongue", "Darkened stool"],
    storage: "Store at room temperature",
    tagline: "Soothing Digestive Relief",
    categoryTagline: "Happy Tummy"
  },

  // Allergy Care
  {
    name: "Zyrtec 24-Hour Allergy Relief 30ct",
    price: 24.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392385/viva-pharmacy/products/zyrtec.png",
    category: "Allergy Care",
    subcategory: "Antihistamines",
    item: "Zyrtec",
    categorySlug: "allergy-care",
    subcategorySlug: "antihistamines",
    itemSlug: "zyrtec",
    categoryPath: "Allergy Care > Antihistamines > Zyrtec",
    shortDescription: "24-hour allergy relief",
    description: "Provides relief from indoor and outdoor allergies...",
    dosageForm: "Tablet",
    stock: 50,
    isFeatured: true,
    keywords: ["allergy", "antihistamine", "zyrtec"],
    sku: "SKU-ZYRTEC-001",
    activeIngredients: [
      { name: "Cetirizine HCl", amount: "10 mg" }
    ],
    warnings: ["May cause drowsiness"],
    directions: "Take one tablet daily",
    contraindications: ["Kidney disease"],
    sideEffects: ["Drowsiness", "Dry mouth"],
    storage: "Store in a cool, dry place",
    tagline: "24-Hour Allergy Protection",
    categoryTagline: "Breathe Easy"
  },

  // First Aid
  {
    name: "Band-Aid Flexible Fabric Bandages 100ct",
    price: 7.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392385/viva-pharmacy/products/bandaid.png",
    category: "First Aid",
    subcategory: "Bandages & Dressings",
    item: "Band-Aid",
    categorySlug: "first-aid",
    subcategorySlug: "bandages-dressings",
    itemSlug: "band-aid",
    categoryPath: "First Aid > Bandages & Dressings > Band-Aid",
    shortDescription: "Flexible wound protection",
    description: "Comfortable protection for minor cuts and scrapes...",
    dosageForm: "Other",
    stock: 200,
    isFeatured: true,
    keywords: ["bandages", "first aid", "wound care"],
    sku: "SKU-BANDAID-001",
    activeIngredients: [],
    warnings: ["For external use only"],
    directions: "Clean wound before applying",
    contraindications: [],
    sideEffects: ["May cause skin irritation in sensitive individuals"],
    storage: "Store in a cool, dry place",
    tagline: "Trusted Wound Care",
    categoryTagline: "Quick Relief & First Aid"
  }
]

// Helper functions to manage products
export const getProductBySlug = (slug: string) => {
  return initialProducts.find(product => product.slug === slug)
}

export const getProductsByCategory = (categorySlug: string) => {
  return initialProducts.filter(product => product.categorySlug === categorySlug)
}

export const getFeaturedProducts = () => {
  return initialProducts.filter(product => product.isFeatured)
}

export const products: Product[] = [
  // Allergy Care Products
  {
    _id: 'benadryl-1',
    name: 'Benadryl Allergy Dye-Free Liquigels 24ct',
    slug: 'benadryl-allergy-dye-free-24ct',
    description: 'Experience fast-acting relief from your allergies with Benadryl Allergy Dye-Free Liquigels. These easy-to-swallow capsules provide powerful relief from sneezing, runny nose, and itchy eyes.',
    price: 10.99,
    category: 'allergy-care',
    stock: 50,
    image: 'https://res.cloudinary.com/dv3cd1aoy/image/upload/v1/viva-pharmacy/products/benadryl-allergy',
    isFeatured: true
  },
  {
    _id: 'xyzal-1',
    name: 'Xyzal 24HR Allergy 5mg Tablet 10ct',
    slug: 'xyzal-24hr-allergy-10ct',
    description: 'Relieve your allergy symptoms with Xyzal 24HR Allergy 5mg tablet. Provides 24-hour relief from indoor and outdoor allergies.',
    price: 11.99,
    category: 'allergy-care',
    stock: 40,
    image: 'https://res.cloudinary.com/dv3cd1aoy/image/upload/v1/viva-pharmacy/products/xyzal-allergy',
    isFeatured: true
  },
  {
    _id: 'zyrtec-1',
    name: 'Zyrtec 24-Hour Allergy Relief',
    slug: 'zyrtec-24-hour-allergy-relief',
    description: 'Say goodbye to sneezing and sniffles with Zyrtec 24-Hour Allergy Relief. Offers all-day relief from your worst allergy symptoms.',
    price: 15.99,
    category: 'allergy-care',
    stock: 35,
    image: 'https://res.cloudinary.com/dv3cd1aoy/image/upload/v1/viva-pharmacy/products/zyrtec-allergy',
    isFeatured: true
  },

  // Digestive Health Products
  {
    _id: 'pepcid-1',
    name: 'PEPCID MAX TABLET ORIGINAL 8CT',
    slug: 'pepcid-max-tablet-8ct',
    description: 'Relieve heartburn and acid indigestion with PEPCID MAX TABLET ORIGINAL. Maximum strength acid reducer for fast relief.',
    price: 8.99,
    category: 'digestive-health',
    stock: 60,
    image: 'https://res.cloudinary.com/dv3cd1aoy/image/upload/v1/viva-pharmacy/products/pepcid-max',
    isFeatured: true
  },
  {
    _id: 'prilosec-1',
    name: 'Prilosec OTC Heartburn Relief and Acid Reducer Tablets 14ct',
    slug: 'prilosec-otc-heartburn-14ct',
    description: 'Prilosec OTC provides fast and effective relief from heartburn and acid reflux. One pill a day for 24-hour relief.',
    price: 17.99,
    category: 'digestive-health',
    stock: 45,
    image: 'https://res.cloudinary.com/dv3cd1aoy/image/upload/v1/viva-pharmacy/products/prilosec-otc',
    isFeatured: true
  },
  {
    _id: 'pepto-1',
    name: 'Pepto Bismol Kids Gummies 24ct',
    slug: 'pepto-bismol-kids-gummies-24ct',
    description: 'Take care of your child\'s digestive health with Pepto Bismol Kids Gummies. Great-tasting relief for upset stomachs.',
    price: 11.99,
    category: 'digestive-health',
    stock: 55,
    image: 'https://res.cloudinary.com/dv3cd1aoy/image/upload/v1/viva-pharmacy/products/pepto-kids',
    isFeatured: true
  },
  {
    _id: 'imodium-1',
    name: 'Imodium Anti-Diarrheal Multi-Symptom Relief Caplets 18ct',
    slug: 'imodium-multi-symptom-18ct',
    description: 'Easily find multi-symptom relief with Imodium Anti-Diarrheal Caplets. Fast-acting relief for diarrhea and digestive discomfort.',
    price: 17.49,
    category: 'digestive-health',
    stock: 40,
    image: 'https://res.cloudinary.com/dv3cd1aoy/image/upload/v1/viva-pharmacy/products/imodium-multi',
    isFeatured: true
  }
] 