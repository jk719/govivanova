import mongoose from 'mongoose'
import { env } from '../env'
import { ProductSchema } from './schema'

declare global {
  var mongoose: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
    retryCount: number
  } | null
}

const MONGODB_URI = env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, retryCount: 0 }
}

const getBackoffTime = (retryCount: number) => Math.min(1000 * Math.pow(2, retryCount), 10000)

async function connectDB() {
  if (cached?.conn) {
    return cached.conn
  }

  if (!cached?.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }

    const connect = async (retryCount = 0) => {
      try {
        console.log(`Connecting to MongoDB... (Attempt ${retryCount + 1})`)
        const mongooseInstance = await mongoose.connect(MONGODB_URI, opts)
        cached!.retryCount = 0
        return mongooseInstance
      } catch (error) {
        if (retryCount < 3) {
          const backoffTime = getBackoffTime(retryCount)
          console.warn(`MongoDB connection failed. Retrying in ${backoffTime}ms...`)
          await new Promise(resolve => setTimeout(resolve, backoffTime))
          return connect(retryCount + 1)
        }
        throw error
      }
    }

    cached!.promise = connect(cached!.retryCount)
      .then(mongoose => {
        console.log('Successfully connected to MongoDB')
        
        // Monitor connection pool
        setInterval(() => {
          const poolSize = mongoose.connection.getClient().topology?.connections?.length || 0
          console.log(`Active MongoDB connections: ${poolSize}`)
        }, 60000)

        return mongoose
      })
      .catch(error => {
        console.error('MongoDB connection error:', {
          message: error.message,
          code: error.code,
          name: error.name
        })
        cached!.promise = null
        cached!.retryCount += 1
        throw error
      })
  }

  try {
    cached!.conn = await cached!.promise
  } catch (error) {
    if (error instanceof Error) {
      console.error('MongoDB connection failed:', {
        type: error.name,
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    }
    cached!.promise = null
    throw error
  }

  return cached!.conn
}

// Graceful shutdown handler
const gracefulShutdown = async () => {
  if (cached?.conn) {
    try {
      await cached.conn.disconnect()
      console.log('MongoDB disconnected gracefully')
    } catch (error) {
      console.error('MongoDB graceful shutdown failed:', error)
    }
  }
}

// Handle application termination
if (process.env.NODE_ENV !== 'development') {
  process.on('SIGTERM', gracefulShutdown)
  process.on('SIGINT', gracefulShutdown)
}

export default connectDB

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema) 