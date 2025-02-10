import { Product } from '@/types'
import { Product as ProductModel } from './schema'
import { products as localProducts } from '@/data/products'
import connectDB from './mongodb'
import { Cache } from '../cache'
import { z } from 'zod'

// Type guard
export function isProduct(value: unknown): value is Product {
  return productSchema.safeParse(value).success
}

// Validation schema
const productSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  price: z.number().positive(),
  image: z.string().url().optional(),
  category: z.string(),
  stock: z.number().int().min(0),
  isFeatured: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
})

// Cache instances
const productsCache = new Cache<Product[]>(5) // 5 minutes TTL
const productCache = new Cache<Product>(5)

// Error classes
export class ProductError extends Error {
  constructor(message: string, public cause?: unknown) {
    super(message)
    this.name = 'ProductError'
  }
}

export class ValidationError extends ProductError {
  constructor(message: string, public errors: z.ZodError) {
    super(message)
    this.name = 'ValidationError'
  }
}

// Helper function to validate product data
function validateProduct(data: unknown): Product {
  try {
    return productSchema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Invalid product data', error)
    }
    throw error
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    // Check cache first
    const cached = productsCache.get('all')
    if (cached) return cached

    await connectDB()
    const products = await ProductModel.find().lean()
    
    // Validate products
    const validatedProducts = products.map(validateProduct)
    
    // If no products in DB and in development, return local data
    if (validatedProducts.length === 0 && process.env.NODE_ENV === 'development') {
      console.log('No products in DB, using local data')
      const localValidated = localProducts.map(validateProduct)
      productsCache.set('all', localValidated)
      return localValidated
    }
    
    // Cache and return validated products
    productsCache.set('all', validatedProducts)
    return validatedProducts
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error
    }
    
    console.error('Error fetching products:', error)
    if (process.env.NODE_ENV === 'development') {
      console.log('Falling back to local data')
      const localValidated = localProducts.map(validateProduct)
      return localValidated
    }
    
    throw new ProductError('Failed to fetch products', error)
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    // Check cache first
    const cached = productCache.get(`slug:${slug}`)
    if (cached) return cached

    await connectDB()
    const product = await ProductModel.findOne({ slug }).lean()
    
    // If no product in DB and in development, check local data
    if (!product && process.env.NODE_ENV === 'development') {
      const localProduct = localProducts.find(p => p.slug === slug)
      if (localProduct) {
        const validated = validateProduct(localProduct)
        productCache.set(`slug:${slug}`, validated)
        return validated
      }
      return null
    }
    
    if (!product) return null
    
    // Validate and cache product
    const validated = validateProduct(product)
    productCache.set(`slug:${slug}`, validated)
    return validated
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error
    }
    
    console.error('Error fetching product:', error)
    if (process.env.NODE_ENV === 'development') {
      const localProduct = localProducts.find(p => p.slug === slug)
      if (localProduct) {
        return validateProduct(localProduct)
      }
    }
    
    throw new ProductError(`Failed to fetch product with slug: ${slug}`, error)
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    // Check cache first
    const cached = productsCache.get('featured')
    if (cached) return cached

    await connectDB()
    const products = await ProductModel.find({ isFeatured: true }).lean()
    
    // Validate products
    const validatedProducts = products.map(validateProduct)
    
    // If no featured products in DB and in development, return from local data
    if (validatedProducts.length === 0 && process.env.NODE_ENV === 'development') {
      const localFeatured = localProducts
        .filter(p => p.isFeatured)
        .map(validateProduct)
      
      productsCache.set('featured', localFeatured)
      return localFeatured
    }
    
    // Cache and return validated products
    productsCache.set('featured', validatedProducts)
    return validatedProducts
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error
    }
    
    console.error('Error fetching featured products:', error)
    if (process.env.NODE_ENV === 'development') {
      const localFeatured = localProducts
        .filter(p => p.isFeatured)
        .map(validateProduct)
      return localFeatured
    }
    
    throw new ProductError('Failed to fetch featured products', error)
  }
} 