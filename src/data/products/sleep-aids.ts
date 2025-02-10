import { createProduct } from './utils'
import { SLEEP_AIDS } from '../categories/flat'
import type { Product } from '@/types'

export const sleepAidsProducts: Partial<Product>[] = [
  createProduct({
    name: "Unisom SleepTabs Doxylamine Succinate Tablets 16ct",
    price: 8.99,
    imageKey: 'unisom-sleeptabs-doxylamine-succinate-tablets-16ct',
    category: SLEEP_AIDS,
    subcategoryIndex: 3, // OTC Sleep Tablets
    item: "OTC Sleep Tablets",
    itemSlug: "otc-sleep-tablets",
    shortDescription: "Sleep aid tablets",
    description: "Help you fall asleep faster and stay asleep longer",
    dosageForm: "Tablet",
    stock: 75,
    isFeatured: true,
    keywords: ["sleep aid", "insomnia", "sleep tablets"],
    sku: "SKU-UNISOM-001",
    activeIngredients: [
      { name: "Doxylamine Succinate", amount: "25mg" }
    ],
    warnings: [
      "May cause drowsiness",
      "Do not drive or operate machinery"
    ],
    directions: "Take 1 tablet 30 minutes before bedtime",
    contraindications: ["Glaucoma", "Respiratory conditions"],
    sideEffects: ["Drowsiness", "Dry mouth"],
    storage: "Store at room temperature",
    tagline: "Restful Nights"
  }),
  createProduct({
    name: "Natrol Kids Melatonin Berry Gummies 90ct",
    price: 14.99,
    imageKey: 'natrol-kids-melatonin-berry-gummies-90ct',
    category: SLEEP_AIDS,
    subcategoryIndex: 2, // Children's Sleep Aids
    item: "Children's Sleep Aids",
    itemSlug: "childrens-sleep-aids",
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
    name: "Nature's Bounty Melatonin 5mg 90ct",
    price: 11.99,
    imageKey: 'natures-bounty-melatonin',
    category: SLEEP_AIDS,
    subcategoryIndex: 0, // Sleep Support
    item: "Sleep Support",
    itemSlug: "sleep-support",
    shortDescription: "Natural sleep support",
    description: "Helps with occasional sleeplessness and jet lag",
    dosageForm: "Tablet",
    stock: 85,
    isFeatured: false,
    keywords: ["sleep aid", "melatonin", "natural supplement"],
    sku: "SKU-NATURESBOUNTY-001",
    activeIngredients: [
      { name: "Melatonin", amount: "5 mg" }
    ],
    warnings: [
      "May cause drowsiness",
      "Not for use while driving"
    ],
    directions: "Take one tablet 30-60 minutes before bedtime",
    contraindications: ["Autoimmune conditions", "Depression"],
    sideEffects: ["Drowsiness", "Vivid dreams"],
    storage: "Store in a cool, dry place",
    tagline: "Rest Naturally"
  })
] 