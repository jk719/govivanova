'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { ProductFilters, ProductSort } from '@/modules/products/types'

interface ProductSearchProps {
  onSearch: (filters: ProductFilters) => void
  onSort: (sort: ProductSort) => void
}

export default function ProductSearch({ onSearch, onSort }: ProductSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '')
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({ search: searchTerm })
    router.push(`/products?q=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="flex gap-4 mb-4">
        <input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="flex flex-wrap gap-4">
        <select
          onChange={(e) => onSort({ field: 'price', direction: e.target.value as 'asc' | 'desc' })}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <select
          onChange={(e) => onSearch({ category: e.target.value })}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Categories</option>
          <option value="PAIN_FEVER">Pain & Fever</option>
          <option value="DIGESTIVE">Digestive Health</option>
          <option value="ALLERGY">Allergy Care</option>
          {/* Add more categories */}
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => onSearch({ inStock: e.target.checked })}
            className="w-4 h-4 rounded text-blue-600"
          />
          In Stock Only
        </label>
      </div>
    </div>
  )
} 