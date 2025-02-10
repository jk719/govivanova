import { painFeverProducts } from './pain-fever'
import { digestiveProducts } from './digestive'
import { allergyProducts } from './allergy'
import { childrensProducts } from './childrens'
import { vitaminsProducts } from './vitamins'
import { firstAidProducts } from './first-aid'
import { homeHealthProducts } from './home-health'
import { skincareProducts } from './skincare'
import { hairProducts } from './hair'
import { oralProducts } from './oral'
import { mensGroomingProducts } from './mens-grooming'
import { feminineCareProducts } from './feminine-care'
import { sleepAidsProducts } from './sleep-aids'
import { smokingCessationProducts } from './smoking-cessation'
import { eyeCareProducts } from './eye-care'
import { footCareProducts } from './foot-care'
import { weightManagementProducts } from './weight-management'
import { testingKitsProducts } from './testing-kits'

import type { Product } from '@/types'

export const allProducts = [
  ...painFeverProducts,
  ...digestiveProducts,
  ...allergyProducts,
  ...childrensProducts,
  ...vitaminsProducts,
  ...firstAidProducts,
  ...homeHealthProducts,
  ...skincareProducts,
  ...hairProducts,
  ...oralProducts,
  ...mensGroomingProducts,
  ...feminineCareProducts,
  ...sleepAidsProducts,
  ...smokingCessationProducts,
  ...eyeCareProducts,
  ...footCareProducts,
  ...weightManagementProducts,
  ...testingKitsProducts
]

// Helper functions
export const getProductBySlug = (slug: string) => {
  return allProducts.find(product => product.slug === slug)
}

export const getProductsByCategory = (categorySlug: string) => {
  return allProducts.filter(product => product.categorySlug === categorySlug)
}

export const getFeaturedProducts = () => {
  return allProducts.filter(product => product.isFeatured)
}

// Export only what's needed
export {
  allProducts,
  getProductBySlug,
  getProductsByCategory,
  getFeaturedProducts
} 