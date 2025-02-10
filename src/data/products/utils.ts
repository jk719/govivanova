import type { Product } from '@/types'
import type { Category } from '../categories/utils'
import { PRODUCT_IMAGES } from '../images'

type CreateProductParams = {
  name: string
  price: number
  imageKey: keyof typeof PRODUCT_IMAGES
  category: Category
  subcategoryIndex: number
  item: string
  itemSlug: string
  shortDescription: string
  description: string
  dosageForm: string
  stock: number
  isFeatured: boolean
  keywords: string[]
  sku: string
  activeIngredients: Array<{ name: string; amount: string }>
  warnings: string[]
  directions: string
  contraindications: string[]
  sideEffects: string[]
  storage: string
  tagline: string
}

export const createProduct = ({
  name,
  price,
  imageKey,
  category,
  subcategoryIndex,
  item,
  itemSlug,
  ...rest
}: CreateProductParams): Partial<Product> => {
  const subcategory = category.items[subcategoryIndex]

  return {
    name,
    price,
    image: PRODUCT_IMAGES[imageKey].full,
    thumbnail: PRODUCT_IMAGES[imageKey].thumbnail,
    placeholder: PRODUCT_IMAGES[imageKey].placeholder,
    category: category.name,
    subcategory: subcategory.name,
    item,
    categorySlug: category.slug,
    subcategorySlug: subcategory.slug,
    itemSlug,
    categoryPath: `${category.name} > ${subcategory.name} > ${item}`,
    slug: imageKey,
    categoryTagline: category.tagline,
    ...rest
  }
} 