import ProductForm from '@/components/products/ProductForm'

export default function ManageProductPage() {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    // We'll implement this later
    console.log('Form data:', Object.fromEntries(formData))
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Add New Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </main>
  )
} 