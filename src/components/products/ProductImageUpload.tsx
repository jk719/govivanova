'use client'

import { useState } from 'react'
import ImageUpload from '../common/ImageUpload'
import { uploadImage } from '@/lib/cloudinary/upload'

interface ProductImageUploadProps {
  initialImage?: string
  onUploadComplete: (imageUrl: string) => void
  onUploadError: (error: Error) => void
}

export default function ProductImageUpload({
  initialImage,
  onUploadComplete,
  onUploadError
}: ProductImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)

  const handleImageSelect = async (file: File) => {
    try {
      setIsUploading(true)
      const imageUrl = await uploadImage(file)
      onUploadComplete(imageUrl)
    } catch (error) {
      onUploadError(error instanceof Error ? error : new Error('Upload failed'))
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="relative">
      <ImageUpload
        initialImage={initialImage}
        onImageSelect={handleImageSelect}
      />
      {isUploading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  )
} 