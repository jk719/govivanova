import { createProduct } from './utils'
import { ORAL } from '../categories/flat'
import type { Product } from '@/types'

export const oralProducts: Partial<Product>[] = [
  createProduct({
    name: "Colgate Total Whitening Toothpaste 5.1oz",
    price: 4.99,
    imageKey: 'colgate-total-whitening',
    category: ORAL,
    subcategoryIndex: 0, // Toothpaste
    item: "Colgate",
    itemSlug: "colgate",
    shortDescription: "Whitening and cavity protection",
    description: "Advanced formula fights cavities, gingivitis, and stains",
    dosageForm: "Paste",
    stock: 150,
    isFeatured: true,
    keywords: ["toothpaste", "whitening", "cavity protection"],
    sku: "SKU-COLGATE-001",
    activeIngredients: [
      { name: "Sodium Fluoride", amount: "0.24%" },
      { name: "Triclosan", amount: "0.3%" }
    ],
    warnings: [
      "Do not swallow",
      "Keep out of reach of children under 6"
    ],
    directions: "Brush teeth thoroughly after meals or at least twice a day",
    contraindications: ["Fluoride sensitivity"],
    sideEffects: ["None when used as directed"],
    storage: "Store at room temperature",
    tagline: "Complete Oral Protection"
  }),

  createProduct({
    name: "Oral-B Pro 1000 Electric Toothbrush",
    price: 49.99,
    imageKey: 'oralb-pro-1000',
    category: ORAL,
    subcategoryIndex: 1, // Toothbrushes
    item: "Oral-B",
    itemSlug: "oral-b",
    shortDescription: "Rechargeable electric toothbrush",
    description: "Professional clean with 3D cleaning action and pressure sensor",
    dosageForm: "Device",
    stock: 45,
    isFeatured: true,
    keywords: ["toothbrush", "electric", "dental care"],
    sku: "SKU-ORALB-001",
    activeIngredients: [],
    warnings: [
      "Charge fully before first use",
      "Replace brush head every 3 months"
    ],
    directions: "Brush for 2 minutes twice daily",
    contraindications: ["None known"],
    sideEffects: ["Mild gum sensitivity initially"],
    storage: "Store in a dry place",
    tagline: "Clinically Proven Clean"
  }),

  createProduct({
    name: "Listerine Cool Mint Mouthwash 1L",
    price: 7.99,
    imageKey: 'listerine-cool-mint',
    category: ORAL,
    subcategoryIndex: 2, // Mouthwash
    item: "Listerine",
    itemSlug: "listerine",
    shortDescription: "Antiseptic mouthwash",
    description: "Kills 99.9% of germs that cause bad breath, plaque, and gingivitis",
    dosageForm: "Liquid",
    stock: 90,
    isFeatured: false,
    keywords: ["mouthwash", "breath freshener", "germ kill"],
    sku: "SKU-LISTERINE-001",
    activeIngredients: [
      { name: "Eucalyptol", amount: "0.092%" },
      { name: "Thymol", amount: "0.064%" }
    ],
    warnings: [
      "Do not swallow",
      "Not for children under 12"
    ],
    directions: "Rinse for 30 seconds twice daily after brushing",
    contraindications: ["Open mouth sores"],
    sideEffects: ["Temporary taste alteration"],
    storage: "Store at room temperature",
    tagline: "Kill Bad Breath Germs"
  }),

  createProduct({
    name: "Glide Pro-Health Dental Floss 40m",
    price: 4.99,
    imageKey: 'glide-pro-health',
    category: ORAL,
    subcategoryIndex: 3, // Dental Floss
    item: "Glide",
    itemSlug: "glide",
    shortDescription: "Smooth dental floss",
    description: "Slides easily between teeth to remove plaque and food particles",
    dosageForm: "Floss",
    stock: 120,
    isFeatured: false,
    keywords: ["dental floss", "oral care", "plaque removal"],
    sku: "SKU-GLIDE-001",
    activeIngredients: [],
    warnings: [
      "Use with care to avoid gum injury",
      "Dispose of used floss properly"
    ],
    directions: "Break off 18 inches, wrap around fingers, and gently floss between teeth",
    contraindications: ["None known"],
    sideEffects: ["Minor gum irritation if used roughly"],
    storage: "Store at room temperature",
    tagline: "Effortless Cleaning"
  }),

  createProduct({
    name: "Sensodyne Pronamel Toothpaste 4oz",
    price: 6.99,
    imageKey: 'sensodyne-pronamel',
    category: ORAL,
    subcategoryIndex: 0, // Toothpaste
    item: "Sensodyne",
    itemSlug: "sensodyne",
    shortDescription: "Sensitive teeth protection",
    description: "Strengthens enamel and protects against sensitivity",
    dosageForm: "Paste",
    stock: 80,
    isFeatured: true,
    keywords: ["sensitive teeth", "enamel protection", "toothpaste"],
    sku: "SKU-SENSODYNE-001",
    activeIngredients: [
      { name: "Potassium Nitrate", amount: "5%" },
      { name: "Sodium Fluoride", amount: "0.15%" }
    ],
    warnings: [
      "Do not swallow",
      "Stop use if irritation occurs"
    ],
    directions: "Brush twice daily or as directed by dentist",
    contraindications: ["Fluoride sensitivity"],
    sideEffects: ["Temporary increase in sensitivity"],
    storage: "Store at room temperature",
    tagline: "Protect Sensitive Teeth"
  })
] 