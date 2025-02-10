'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Product } from '@/types'
import ProductImageUpload from './ProductImageUpload'

interface ProductFormProps {
  initialData?: Partial<Product>
  onSubmit: (data: FormData) => Promise<void>
}

export default function ProductForm({ initialData, onSubmit }: ProductFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imageUrl, setImageUrl] = useState(initialData?.image)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(undefined)
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      if (imageUrl) {
        formData.append('image', imageUrl)
      }
      await onSubmit(formData)
      router.push('/products')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>
          <ProductImageUpload
            initialImage={imageUrl}
            onUploadComplete={setImageUrl}
            onUploadError={(error) => setError(error.message)}
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={initialData?.name}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              step="0.01"
              defaultValue={initialData?.price}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Add more form fields as needed */}
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save Product'}
        </button>
      </div>
    </form>
  )
} 