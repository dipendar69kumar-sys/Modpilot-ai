'use client'

import { Star, Download, Heart } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface Mod {
  id: number
  name: string
  author: string
  rating: number
  downloads: number
  description: string
  category: string
  image: string
  tags: string[]
}

interface ModCardProps {
  mod: Mod
}

export default function ModCard({ mod }: ModCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="group bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition hover:shadow-xl hover:shadow-indigo-500/10">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-900 aspect-video">
        <img
          src={mod.image}
          alt={mod.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
        
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-slate-900/80 rounded-lg hover:bg-slate-800 transition"
        >
          <Heart
            size={18}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Author */}
        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{mod.name}</h3>
        <p className="text-sm text-slate-400 mb-3">by {mod.author}</p>

        {/* Description */}
        <p className="text-sm text-slate-300 mb-4 line-clamp-2">{mod.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {mod.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {mod.tags.length > 2 && (
            <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
              +{mod.tags.length - 2}
            </span>
          )}
        </div>

        {/* Rating and Downloads */}
        <div className="flex items-center justify-between mb-4 pb-4 border-t border-slate-700">
          <div className="flex items-center space-x-2 mt-4">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-white">{mod.rating}</span>
            <span className="text-xs text-slate-500">(4.2k reviews)</span>
          </div>
          <div className="flex items-center space-x-1 mt-4 text-slate-400">
            <Download size={16} />
            <span className="text-sm">{(mod.downloads / 1000).toFixed(0)}k</span>
          </div>
        </div>

        {/* Install Button */}
        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition hover:shadow-indigo-500/50 font-medium">
          Install
        </button>
      </div>
    </div>
  )
}
