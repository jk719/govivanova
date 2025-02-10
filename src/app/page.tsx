import { getSortedCategories } from '@/data/categories/flat'
import { products } from '@/data/products'
import CategorySection from '@/components/products/CategorySection'

export default function Home() {
  const sortedCategories = getSortedCategories()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        {sortedCategories.map((category, index) => {
          const categoryProducts = products.filter(
            product => product.category === category.slug
          )

          return (
            <CategorySection
              key={category.slug}
              category={category}
              products={categoryProducts}
              isLast={index === sortedCategories.length - 1}
            />
          )
        })}
      </div>
    </main>
  )
} 