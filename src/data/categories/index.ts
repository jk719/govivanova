// Export flat structure
export * from './flat'

// Export nested structure with renamed functions
export {
  CATEGORIES,
  getNestedCategoryBySlug as getCategoryBySlug,
  getNestedSubcategoryBySlug as getSubcategoryBySlug
} from './nested'

// Export utilities with renamed functions
export {
  generateSlug,
  getFlatCategoryBySlug,
  getFlatItemBySlug,
  getAllCategories,
  getAllItems,
  isCategoryValid,
  isItemValid,
  getCategoryPath,
  type Category,
  type CategoryWithoutItems
} from './utils'

// Re-export the default categories array
export { categories as default } from './flat' 