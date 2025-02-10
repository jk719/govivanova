import Link from 'next/link'
import type { Category, Product } from '@/types'
import ProductCard from './ProductCard'

interface CategorySectionProps {
  category: Category
  products: Product[]
  isLast?: boolean
}

export default function CategorySection({ category, products, isLast }: CategorySectionProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="italic">{category.tagline}</span>
          {category.itemCount && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{category.itemCount}</span>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {!isLast && (
        <div className="mt-12 mb-12 border-b border-gray-200" />
      )}
    </section>
  )
} 