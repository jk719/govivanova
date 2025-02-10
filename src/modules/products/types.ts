import type { Product } from '@/types'

export interface ProductFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  search?: string
}

export interface ProductSort {
  field: keyof Product
  direction: 'asc' | 'desc'
}

export interface ProductSearchResult {
  product: Product
  score: number
}

export interface ProductService {
  getProducts(filters?: ProductFilters, sort?: ProductSort): Promise<Product[]>
  getProductById(id: string): Promise<Product | null>
  getProductBySlug(slug: string): Promise<Product | null>
  createProduct(product: Omit<Product, '_id' | 'createdAt' | 'updatedAt'>): Promise<Product>
  updateProduct(id: string, product: Partial<Product>): Promise<Product | null>
  deleteProduct(id: string): Promise<boolean>
} 