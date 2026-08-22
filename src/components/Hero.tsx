'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Background gradient effects */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
            <Sparkles size={16} className="text-indigo-400" />
            <span className="text-sm text-slate-300">Discover amazing mods today</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            Your Gateway to <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Unlimited Mods</span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore thousands of high-quality mods, connect with creators, and enhance your gaming experience. All in one beautiful platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition hover:shadow-indigo-500/50 flex items-center justify-center space-x-2">
              <span>Explore Mods</span>
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition border border-slate-700">
              Browse Collections
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-slate-700">
            <div>
              <div className="text-3xl font-bold text-indigo-400">50K+</div>
              <p className="text-slate-400 text-sm">Mods Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">100K+</div>
              <p className="text-slate-400 text-sm">Active Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">5M+</div>
              <p className="text-slate-400 text-sm">Downloads</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
