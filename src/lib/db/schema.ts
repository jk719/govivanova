import mongoose from 'mongoose'
import type { Product } from '@/types'

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  image: { type: String },
  isFeatured: { type: Boolean, default: false },
  image: { type: String, required: true },
  thumbnail: { type: String, required: true },
  placeholder: { type: String, required: true },
  subcategory: { type: String, required: true },
  item: { type: String, required: true },
  categorySlug: { type: String, required: true },
  subcategorySlug: { type: String, required: true },
  itemSlug: { type: String, required: true },
  categoryPath: { type: String, required: true },
  shortDescription: { type: String, required: true },
  dosageForm: { type: String, required: true },
  keywords: [{ type: String }],
  sku: { type: String, required: true, unique: true },
  activeIngredients: [{
    name: { type: String, required: true },
    amount: { type: String, required: true }
  }],
  warnings: [{ type: String }],
  directions: { type: String, required: true },
  contraindications: [{ type: String }],
  sideEffects: [{ type: String }],
  storage: { type: String, required: true },
  tagline: { type: String, required: true },
  categoryTagline: { type: String, required: true }
}, {
  timestamps: true
})

// Add text index for search
productSchema.index({ name: 'text', description: 'text' })

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema) 