export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square bg-gray-200 animate-pulse rounded-lg" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4" />
          <div className="h-4 bg-gray-200 animate-pulse rounded w-full" />
          <div className="h-4 bg-gray-200 animate-pulse rounded w-full" />
        </div>
      </div>
    </main>
  )
} 