'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { UploadIcon, XCircleIcon } from '@heroicons/react/24/outline'

interface ImageUploadProps {
  initialImage?: string
  onImageSelect: (file: File) => void
  onImageRemove?: () => void
}

export default function ImageUpload({ 
  initialImage, 
  onImageSelect,
  onImageRemove 
}: ImageUploadProps) {
  const [preview, setPreview] = useState(initialImage)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (file: File) => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      onImageSelect(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      handleFileSelect(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleRemove = () => {
    setPreview(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    onImageRemove?.()
  }

  return (
    <div className="w-full">
      {preview ? (
        <div className="relative aspect-square">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-contain rounded-lg"
          />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 text-red-500 hover:text-red-600"
          >
            <XCircleIcon className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`border-2 border-dashed rounded-lg p-8 text-center
            ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFileSelect(file)
            }}
            className="hidden"
          />
          
          <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop an image, or{' '}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-blue-500 hover:text-blue-600"
            >
              browse
            </button>
          </p>
        </div>
      )}
    </div>
  )
} 