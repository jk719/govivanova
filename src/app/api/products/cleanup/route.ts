import { NextResponse } from 'next/server'
import { Product } from '@/lib/db/schema'
import connectDB from '@/lib/db/mongodb'

export async function GET() {
  try {
    await connectDB()
    await Product.deleteMany({})
    
    return NextResponse.json({ 
      success: true, 
      message: 'All products deleted successfully'
    })
  } catch (error) {
    console.error('Cleanup Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete products' },
      { status: 500 }
    )
  }
} 