'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onQuickView?: (product: Product) => void
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-square bg-gray-50">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        <Image
          src={imageError ? '/images/placeholder.png' : product.image}
          alt={product.name}
          fill
          className={`object-contain p-4 transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority
          onError={() => setImageError(true)}
          onLoad={() => setIsLoading(false)}
        />

        {/* Quick view button */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 rounded-full
                     text-sm font-medium shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Quick View
          </button>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
            Add
          </button>
        </div>
        
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Stock status */}
        <div className="mt-2">
          {product.stock > 0 ? (
            <span className="text-sm text-green-600">In Stock</span>
          ) : (
            <span className="text-sm text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  )
} 