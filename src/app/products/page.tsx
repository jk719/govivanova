import { Suspense } from 'react'
import { productService } from '@/modules/products/service'
import { categories } from '@/data/categories'
import ProductGrid from '@/components/products/ProductGrid'
import CategoryNav from '@/components/navigation/CategoryNav'
import CategorySidebar from '@/components/navigation/CategorySidebar'
import Breadcrumb from '@/components/navigation/Breadcrumb'
import ProductSearch from '@/components/products/ProductSearch'

export default async function ProductsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const products = await productService.getProducts({
    category: searchParams.category,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    search: searchParams.q
  })

  const breadcrumbItems = [
    { name: 'Products', href: '/products' }
  ]

  return (
    <>
      <CategoryNav categories={categories} />
      
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="flex gap-8 mt-8">
          <CategorySidebar 
            categories={categories}
            onFilterChange={() => {}}
          />
          
          <div className="flex-1">
            <ProductSearch 
              onSearch={() => {}}
              onSort={() => {}}
            />
            
            <Suspense fallback={<div>Loading...</div>}>
              <ProductGrid products={products} />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
} 