import { NextResponse } from 'next/server'
import { Product } from '@/lib/db/schema'
import connectDB from '@/lib/db/mongodb'

const testProducts = [
  {
    name: "Sudafed PE Pressure & Pain Max Strength Caplets 24ct",
    price: 11.49,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392385/viva-pharmacy/products/fin13geits8ozadglcch.png",
    category: "Allergy Care",
    subcategory: "Pain Relief",
    item: "Sudafed",
    categorySlug: "allergy-care",
    subcategorySlug: "pain-relief",
    itemSlug: "sudafed",
    categoryPath: "Allergy Care > Pain Relief > Sudafed",
    shortDescription: "Experience fast and effective relief with Sudafed PE Pressure & Pain",
    description: "Fast-acting allergy relief medication...",
    dosageForm: "Caplet",
    stock: 100,
    isFeatured: true,
    keywords: ["allergy", "pain relief", "sudafed"],
    sku: "SKU-SUDAFED-001",
    slug: "sudafed-pe-pressure-pain-max-strength-caplets-24ct"
  },
  {
    name: "Benadryl Allergy Dye-Free Liquigels 24ct",
    price: 10.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392322/viva-pharmacy/products/qmiemnwabu8bzg8ramtd.png",
    category: "Allergy Care",
    subcategory: "Antihistamines",
    item: "Benadryl",
    categorySlug: "allergy-care",
    subcategorySlug: "antihistamines",
    itemSlug: "benadryl",
    categoryPath: "Allergy Care > Antihistamines > Benadryl",
    shortDescription: "Fast-acting allergy relief",
    description: "Provides quick relief from allergy symptoms...",
    dosageForm: "Liquigel",
    stock: 150,
    isFeatured: true,
    keywords: ["allergy", "antihistamine", "benadryl"],
    sku: "SKU-BENADRYL-001",
    slug: "benadryl-allergy-dye-free-liquigels-24ct"
  },
  {
    name: "Zyrtec 24-Hour Allergy Relief 30ct",
    price: 24.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392322/viva-pharmacy/products/zyrtec.png",
    category: "Allergy Care",
    subcategory: "Antihistamines",
    item: "Zyrtec",
    categorySlug: "allergy-care",
    subcategorySlug: "antihistamines",
    itemSlug: "zyrtec",
    categoryPath: "Allergy Care > Antihistamines > Zyrtec",
    shortDescription: "24-hour allergy relief",
    description: "Long-lasting allergy relief...",
    dosageForm: "Tablet",
    stock: 75,
    isFeatured: true,
    keywords: ["allergy", "antihistamine", "zyrtec"],
    sku: "SKU-ZYRTEC-001",
    slug: "zyrtec-24-hour-allergy-relief-30ct"
  },
  {
    name: "Claritin 24 Hour Non-Drowsy Allergy Relief 20ct",
    price: 19.99,
    image: "https://res.cloudinary.com/dv3cd1aoy/image/upload/v1737392322/viva-pharmacy/products/claritin.png",
    category: "Allergy Care",
    subcategory: "Antihistamines",
    item: "Claritin",
    categorySlug: "allergy-care",
    subcategorySlug: "antihistamines",
    itemSlug: "claritin",
    categoryPath: "Allergy Care > Antihistamines > Claritin",
    shortDescription: "Non-drowsy allergy relief",
    description: "24-hour non-drowsy allergy relief...",
    dosageForm: "Tablet",
    stock: 90,
    isFeatured: true,
    keywords: ["allergy", "antihistamine", "claritin"],
    sku: "SKU-CLARITIN-001",
    slug: "claritin-24-hour-non-drowsy-allergy-relief-20ct"
  }
]

export async function GET() {
  try {
    await connectDB()
    
    // Clear existing products
    await Product.deleteMany({})
    
    // Insert test products
    await Product.insertMany(testProducts)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test products created successfully',
      count: testProducts.length 
    })
  } catch (error) {
    console.error('Error creating test products:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create test products' },
      { status: 500 }
    )
  }
} 