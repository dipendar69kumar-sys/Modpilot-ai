'use client'

import { useState } from 'react'
import ModCard from './ModCard'
import { Search, Filter } from 'lucide-react'

const mockMods = [
  {
    id: 1,
    name: 'Enhanced Graphics Pack',
    author: 'VisualStudio',
    rating: 4.8,
    downloads: 125000,
    description: 'Ultimate visual enhancement for ultra-realistic graphics',
    category: 'Graphics',
    image: 'https://via.placeholder.com/300x200?text=Graphics+Pack',
    tags: ['graphics', 'visual', 'hd'],
  },
  {
    id: 2,
    name: 'Quality of Life Improvements',
    author: 'GameMaster',
    rating: 4.9,
    downloads: 98000,
    description: 'Essential QoL improvements for better gameplay',
    category: 'Gameplay',
    image: 'https://via.placeholder.com/300x200?text=QoL+Mod',
    tags: ['gameplay', 'quality', 'improvements'],
  },
  {
    id: 3,
    name: 'Advanced Weapon System',
    author: 'WeaponSmith',
    rating: 4.7,
    downloads: 87000,
    description: 'Completely revamped weapon mechanics and balance',
    category: 'Gameplay',
    image: 'https://via.placeholder.com/300x200?text=Weapons',
    tags: ['combat', 'weapons', 'gameplay'],
  },
  {
    id: 4,
    name: 'Immersive Audio Overhaul',
    author: 'SoundDesigner',
    rating: 4.6,
    downloads: 65000,
    description: 'Spatial audio and enhanced sound effects',
    category: 'Audio',
    image: 'https://via.placeholder.com/300x200?text=Audio+Mod',
    tags: ['audio', 'sound', 'immersive'],
  },
  {
    id: 5,
    name: 'Character Creation Expanded',
    author: 'CharacterArtist',
    rating: 4.9,
    downloads: 112000,
    description: 'Extensive customization options for character creation',
    category: 'Content',
    image: 'https://via.placeholder.com/300x200?text=Characters',
    tags: ['character', 'customization', 'content'],
  },
  {
    id: 6,
    name: 'World Expansion Pack',
    author: 'MapBuilder',
    rating: 4.8,
    downloads: 95000,
    description: 'Massive new areas and environments to explore',
    category: 'Content',
    image: 'https://via.placeholder.com/300x200?text=World+Expansion',
    tags: ['world', 'content', 'expansion'],
  },
]

export default function ModGrid() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Graphics', 'Gameplay', 'Audio', 'Content', 'Utilities']

  const filteredMods = mockMods.filter(mod => {
    const matchesSearch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mod.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || mod.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Popular Mods</h2>
          <p className="text-slate-400">Discover thousands of high-quality mods for your games</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search mods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-white rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700"
            />
            <Search size={20} className="absolute left-4 top-3.5 text-slate-500" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedCategory === category
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mods Grid */}
        {filteredMods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMods.map(mod => (
              <ModCard key={mod.id} mod={mod} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No mods found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}
