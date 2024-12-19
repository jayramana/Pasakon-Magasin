import { ShineEffect } from './shineeffect'
import { Star } from 'lucide-react'

export function BestsellerBadge() {
  return (
    <ShineEffect className="inline-flex items-center bg-yellow-400 text-yellow-900 text-xs font-medium px-2 py-0.5 rounded">
      <Star className="w-3 h-3 mr-1" />
      <span className="relative z-[2]">Bestseller</span>
    </ShineEffect>
  )
}

