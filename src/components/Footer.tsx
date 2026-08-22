'use client'

import Link from 'next/link'
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
              <span className="text-lg font-bold text-white">ModPilot</span>
            </div>
            <p className="text-slate-400 text-sm">
              The ultimate platform for discovering and sharing high-quality game mods.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/mods" className="hover:text-white transition">Browse Mods</Link></li>
              <li><Link href="/upload" className="hover:text-white transition">Upload Mod</Link></li>
              <li><Link href="/creators" className="hover:text-white transition">For Creators</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/community" className="hover:text-white transition">Community</Link></li>
              <li><Link href="/forums" className="hover:text-white transition">Forums</Link></li>
              <li><Link href="/discord" className="hover:text-white transition">Discord</Link></li>
              <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-500 text-sm">© 2024 ModPilot. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
