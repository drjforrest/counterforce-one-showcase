import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  return (
    <nav className="bg-yankees-blue/95 backdrop-blur-sm text-baby-powder py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/counterforce-logo-transparent.png"
              alt="Counterforce-One Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-baby-powder">Counterforce-One</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="#overview" 
              className="text-baby-powder hover:text-tigers-eye transition-colors"
            >
              Overview
            </Link>
            <Link 
              href="#findings" 
              className="text-baby-powder hover:text-tigers-eye transition-colors"
            >
              Findings
            </Link>
            <Link 
              href="#methodology" 
              className="text-baby-powder hover:text-tigers-eye transition-colors"
            >
              Methodology
            </Link>
            <Link 
              href="/docs" 
              className="bg-cadet-blue text-baby-powder px-4 py-2 rounded-md hover:bg-medium-vermilion transition-colors"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}