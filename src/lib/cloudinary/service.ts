import { CloudinaryUrls } from './types'
import { cloudinaryConfig } from './config'
import cloudinaryUrls from './urls.json'

class CloudinaryService {
  private urls: CloudinaryUrls = {}
  private config = cloudinaryConfig

  constructor() {
    this.urls = cloudinaryUrls
  }

  getImageUrl(filename: string): string {
    return this.urls[filename] || this.urls['placeholder.svg']
  }

  getPlaceholderUrl(): string {
    return this.urls['placeholder.svg']
  }

  getProductImageUrl(productName: string): string {
    // Try to find a matching image URL
    const normalizedName = productName.toLowerCase().replace(/\s+/g, '-')
    const matchingKey = Object.keys(this.urls).find(key => 
      key.toLowerCase().includes(normalizedName)
    )
    return matchingKey ? this.urls[matchingKey] : this.getPlaceholderUrl()
  }
}

export const cloudinaryService = new CloudinaryService() 