'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Main Header Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold flex items-center gap-2">
            Viva Pharmacy
            <span className="text-xs text-secondary">Nova Health</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 1 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 1 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
              </svg>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-primary-dark rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/products"
              className={`text-sm hover:text-secondary transition-colors
                ${pathname === '/products' ? 'text-secondary' : ''}`}
            >
              Products
            </Link>
            <Link 
              href="/products/manage"
              className={`text-sm hover:text-secondary transition-colors
                ${pathname === '/products/manage' ? 'text-secondary' : ''}`}
            >
              Add Product
            </Link>
            <Link href="/cart" className="text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 1 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 1 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
              </svg>
            </Link>
            <Link 
              href="/signin" 
              className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-dark transition-colors text-sm"
            >
              Sign In
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-4 py-4 border-t border-primary-light md:hidden animate-slide-down">
            <div className="flex flex-col gap-4">
              <Link 
                href="/products"
                className={`text-sm hover:text-secondary transition-colors
                  ${pathname === '/products' ? 'text-secondary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/products/manage"
                className={`text-sm hover:text-secondary transition-colors
                  ${pathname === '/products/manage' ? 'text-secondary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Add Product
              </Link>
              <Link 
                href="/signin" 
                className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-dark transition-colors text-sm text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 