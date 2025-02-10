import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
      <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
      <Link 
        href="/products" 
        className="text-blue-500 hover:text-blue-700"
      >
        Back to Products
      </Link>
    </main>
  )
} 