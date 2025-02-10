'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import type { Category } from '@/types'

interface CategoryNavProps {
  categories: Category[]
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname()
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <li key={category.slug} className="relative group">
              <button
                onClick={() => setOpenCategory(
                  openCategory === category.slug ? null : category.slug
                )}
                className={`flex items-center gap-1 px-4 py-3 text-sm font-medium hover:text-blue-600
                  ${pathname.includes(category.slug) ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {category.name}
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {/* Dropdown */}
              {openCategory === category.slug && (
                <div className="absolute left-0 top-full z-20 w-64 bg-white shadow-lg rounded-lg py-2 animate-in fade-in slide-in-from-top-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products/${category.slug}/${item.slug}`}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50
                        ${pathname.includes(item.slug) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 