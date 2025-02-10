import { v2 as cloudinary } from 'cloudinary'
import type { UploadApiResponse } from 'cloudinary'
import { env } from './env'

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
})

export async function uploadImage(
  file: string,
  folder: string = 'products'
): Promise<UploadApiResponse> {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      transformation: [
        { width: 800, height: 800, crop: 'limit' },
        { quality: 'auto' },
        { fetch_format: 'auto' }
      ]
    })
    return result
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error)
    throw error
  }
}

export async function deleteImage(public_id: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(public_id)
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error)
    throw error
  }
}

export default cloudinary 