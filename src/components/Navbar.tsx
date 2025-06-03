'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-purple-800 text-purple-100 shadow-md p-2">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-purple-100 hover:text-purple-300">UMB</Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-purple-100 focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`md:flex md:items-center md:gap-6 absolute md:static left-0 top-16 w-full md:w-auto bg-purple-900 md:bg-transparent px-4 md:px-0 transition-all ${open ? 'flex flex-col' : 'hidden'}`}>
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 md:py-0 hover:text-purple-300 ${
                pathname === href ? 'text-purple-300 font-semibold' : ''
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
