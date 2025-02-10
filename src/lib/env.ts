const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
} as const

// Validate environment variables
const requiredEnvs = [
  'MONGODB_URI',
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
] as const

for (const key of requiredEnvs) {
  if (!env[key]) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
}

export { env } 