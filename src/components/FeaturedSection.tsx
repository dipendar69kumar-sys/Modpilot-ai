'use client'

import { Flame, TrendingUp, Star } from 'lucide-react'

export default function FeaturedSection() {
  return (
    <section className="py-16 px-4 border-y border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trending */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition">
            <div className="flex items-center space-x-3 mb-4">
              <Flame size={24} className="text-orange-500" />
              <h3 className="text-xl font-bold text-white">Trending Now</h3>
            </div>
            <p className="text-slate-400 mb-4">Hottest mods this week</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">Ultra Graphics Mod</span>
                <span className="text-orange-400 text-sm">↑ 150%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">Advanced Combat</span>
                <span className="text-orange-400 text-sm">↑ 120%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">Immersive World</span>
                <span className="text-orange-400 text-sm">↑ 95%</span>
              </div>
            </div>
          </div>

          {/* Most Downloaded */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp size={24} className="text-indigo-500" />
              <h3 className="text-xl font-bold text-white">Most Downloaded</h3>
            </div>
            <p className="text-slate-400 mb-4">Most popular this month</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">Quality of Life</span>
                <span className="text-indigo-400 text-sm">2.1M</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">UI Enhancement</span>
                <span className="text-indigo-400 text-sm">1.8M</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">Performance Plus</span>
                <span className="text-indigo-400 text-sm">1.5M</span>
              </div>
            </div>
          </div>

          {/* Top Rated */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-yellow-500/50 transition">
            <div className="flex items-center space-x-3 mb-4">
              <Star size={24} className="text-yellow-500" />
              <h3 className="text-xl font-bold text-white">Top Rated</h3>
            </div>
            <p className="text-slate-400 mb-4">Community&apos;s favorite mods</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">Essential Pack</span>
                <span className="text-yellow-400 text-sm">4.9★</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">Visual Perfection</span>
                <span className="text-yellow-400 text-sm">4.8★</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition cursor-pointer">
                <span className="text-white font-semibold">Gameplay Remix</span>
                <span className="text-yellow-400 text-sm">4.7★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
