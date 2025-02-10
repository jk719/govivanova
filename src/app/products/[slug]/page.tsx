import { notFound } from 'next/navigation'
import Image from 'next/image'
import { productService } from '@/modules/products/service'
import { Metadata } from 'next'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await productService.getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-4 sm:py-8">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
        {/* Product Image */}
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-xl sm:text-3xl font-bold">{product.name}</h1>
          <p className="text-sm sm:text-base text-gray-600">{product.shortDescription}</p>
          
          <div className="border-t border-b py-3 sm:py-4 my-4 sm:my-6">
            <div className="flex justify-between items-center">
              <span className="text-xl sm:text-2xl font-bold">${product.price.toFixed(2)}</span>
              <span className={`text-sm px-3 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <dl className="divide-y">
              <div className="py-2">
                <dt className="font-medium">Brand</dt>
                <dd className="text-gray-600">{product.productDetails.brand}</dd>
              </div>
              <div className="py-2">
                <dt className="font-medium">Dosage Form</dt>
                <dd className="text-gray-600">{product.dosageForm}</dd>
              </div>
              <div className="py-2">
                <dt className="font-medium">Category</dt>
                <dd className="text-gray-600">{product.categoryPath}</dd>
              </div>
            </dl>
          </div>

          {/* Full Description */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Specifications</h2>
            <dl className="divide-y">
              <div className="py-2">
                <dt className="font-medium">Usage</dt>
                <dd className="text-gray-600">{product.specifications.usage}</dd>
              </div>
              <div className="py-2">
                <dt className="font-medium">Age Group</dt>
                <dd className="text-gray-600">{product.specifications.ageGroup}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  )
}

// Add metadata generation
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await productService.getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.'
    }
  }

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.shortDescription,
  }
} 