'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Home, Download, Users, Zap } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MP</span>
            </div>
            <span className="hidden sm:inline text-xl font-bold text-white">ModPilot AI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-slate-300 hover:text-white transition">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link href="/mods" className="flex items-center space-x-2 text-slate-300 hover:text-white transition">
              <Download size={18} />
              <span>Mods</span>
            </Link>
            <Link href="/ai" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition font-semibold">
              <Zap size={18} />
              <span>AI Chat</span>
            </Link>
            <Link href="/community" className="flex items-center space-x-2 text-slate-300 hover:text-white transition">
              <Users size={18} />
              <span>Community</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search mods..."
                className="w-full bg-slate-800 text-white rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-slate-500" />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white transition">Sign In</button>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition hover:shadow-indigo-500/50">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-slate-700 pt-4">
            <Link href="/" className="block text-slate-300 hover:text-white">Home</Link>
            <Link href="/mods" className="block text-slate-300 hover:text-white">Mods</Link>
            <Link href="/ai" className="block text-yellow-400 hover:text-yellow-300 font-semibold">AI Chat</Link>
            <Link href="/community" className="block text-slate-300 hover:text-white">Community</Link>
            <div className="pt-4 space-y-2">
              <button className="w-full text-slate-300 hover:text-white py-2">Sign In</button>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
