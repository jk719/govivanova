// GET /api/products - List products
// POST /api/products - Create product
// GET /api/products/[id] - Get single product
// PUT /api/products/[id] - Update product
// DELETE /api/products/[id] - Delete product 

import { NextResponse } from 'next/server'
import { connectDB, Product } from '@/lib/db/mongodb'
import { products } from '@/data/products'

export async function GET() {
  try {
    await connectDB()
    const allProducts = await Product.find({})
    return NextResponse.json(allProducts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST() {
  try {
    await connectDB()
    await Product.deleteMany({}) // Clear existing products
    const result = await Product.insertMany(products)
    return NextResponse.json({ message: 'Products seeded successfully', count: result.length })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to seed products' }, { status: 500 })
  }
} 