import { Product } from '@/types'
import { getProducts, getProductBySlug, getFeaturedProducts } from '@/lib/db/products'
import type { ProductFilters, ProductSort } from './types'
import connectDB from '@/lib/db/mongodb'
import { Product as ProductModel } from '@/lib/db/schema'
import { uploadImage } from '@/lib/cloudinary/upload'

export class ProductService {
  async getProducts(filters?: ProductFilters, sort?: ProductSort): Promise<Product[]> {
    const products = await getProducts()
    return this.filterAndSortProducts(products, filters, sort)
  }

  async getProductById(id: string): Promise<Product | null> {
    await connectDB()
    return ProductModel.findById(id).lean()
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    return getProductBySlug(slug)
  }

  async createProduct(
    data: Omit<Product, '_id' | 'createdAt' | 'updatedAt'>,
    image?: File
  ): Promise<Product> {
    await connectDB()

    // Handle image upload if provided
    if (image) {
      const imageUrl = await uploadImage(image)
      data.image = imageUrl
    }

    const product = await ProductModel.create(data)
    return product.toObject()
  }

  async updateProduct(
    id: string, 
    data: Partial<Product>,
    image?: File
  ): Promise<Product | null> {
    await connectDB()

    // Handle image upload if provided
    if (image) {
      const imageUrl = await uploadImage(image)
      data.image = imageUrl
    }

    const product = await ProductModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    ).lean()

    return product
  }

  async deleteProduct(id: string): Promise<boolean> {
    await connectDB()
    const result = await ProductModel.findByIdAndDelete(id)
    return !!result
  }

  async searchProducts(query: string): Promise<Product[]> {
    await connectDB()
    return ProductModel.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } }
    )
    .sort({ score: { $meta: 'textScore' } })
    .lean()
  }

  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    await connectDB()
    return ProductModel.find({ categorySlug }).lean()
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return getFeaturedProducts()
  }

  private filterAndSortProducts(
    products: Product[],
    filters?: ProductFilters,
    sort?: ProductSort
  ): Product[] {
    let filtered = [...products]

    if (filters) {
      if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category)
      }
      if (filters.minPrice) {
        filtered = filtered.filter(p => p.price >= filters.minPrice!)
      }
      if (filters.maxPrice) {
        filtered = filtered.filter(p => p.price <= filters.maxPrice!)
      }
      if (filters.inStock) {
        filtered = filtered.filter(p => p.stock > 0)
      }
      if (filters.search) {
        const search = filters.search.toLowerCase()
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
        )
      }
    }

    if (sort) {
      filtered.sort((a, b) => {
        const aVal = a[sort.field]
        const bVal = b[sort.field]
        const modifier = sort.direction === 'asc' ? 1 : -1
        return aVal > bVal ? modifier : -modifier
      })
    }

    return filtered
  }
}

export const productService = new ProductService() 