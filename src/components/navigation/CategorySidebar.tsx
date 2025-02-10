'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Category } from '@/types'

interface CategorySidebarProps {
  categories: Category[]
  activeCategory?: string
  onFilterChange: (filters: Record<string, any>) => void
}

export default function CategorySidebar({ 
  categories, 
  activeCategory,
  onFilterChange 
}: CategorySidebarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get('minPrice') || '',
    max: searchParams.get('maxPrice') || ''
  })

  const handlePriceChange = () => {
    onFilterChange({
      minPrice: priceRange.min ? Number(priceRange.min) : undefined,
      maxPrice: priceRange.max ? Number(priceRange.max) : undefined
    })
  }

  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-20">
        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <button
                  onClick={() => router.push(`/products/${category.slug}`)}
                  className={`text-sm w-full text-left py-2 px-3 rounded-lg
                    ${category.slug === activeCategory
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {category.name}
                </button>
                
                {category.slug === activeCategory && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {category.items.map((item) => (
                      <li key={item.slug}>
                        <button
                          onClick={() => router.push(
                            `/products/${category.slug}/${item.slug}`
                          )}
                          className="text-sm text-gray-600 hover:text-blue-600 py-1 px-3"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Price Range</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange(prev => ({
                  ...prev,
                  min: e.target.value
                }))}
                className="w-full px-3 py-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({
                  ...prev,
                  max: e.target.value
                }))}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <button
              onClick={handlePriceChange}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 