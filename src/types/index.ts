export type ProductCategory = 
  | 'PAIN_FEVER'
  | 'DIGESTIVE'
  | 'ALLERGY'
  | 'CHILDRENS'
  | 'VITAMINS'
  | 'FIRST_AID'
  | 'HOME_HEALTH'
  | 'SKINCARE'
  | 'HAIR'
  | 'ORAL'

export interface Product {
  _id: string
  name: string
  slug: string
  description: string
  price: number
  category: string
  stock: number
  image?: string
  isFeatured?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface Category {
  name: string       // e.g., "Breathe Easy"
  tagline: string    // e.g., "Allergy Care"
  slug: string
  itemCount?: string // e.g., "9 items"
  items: {
    name: string
    slug: string
  }[]
}

export interface ActiveIngredient {
  id: string
  name: string
  description: string
}

export interface CloudinaryImage {
  public_id: string
  url: string
  thumbnail_url?: string
}

export interface CloudinaryUploadResult {
  public_id: string
  secure_url: string
  format: string
  width: number
  height: number
  resource_type: string
  created_at: string
  bytes: number
  type: string
  url: string
} 