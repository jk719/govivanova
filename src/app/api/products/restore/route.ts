import { NextResponse } from 'next/server'
import { productService } from '@/modules/products/service'
import { initialProducts } from '@/data/products'

export async function GET() {
  try {
    const products = await productService.restoreProducts(initialProducts)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Products restored successfully',
      count: products.length
    })
  } catch (error) {
    console.error('Restore Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to restore products' },
      { status: 500 }
    )
  }
} 