import React from 'react'
import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  maxRating?: number
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => {
        const fillPercentage = Math.max(Math.min((rating - index) * 100, 100), 0)
        return (
          <div key={index} className="relative">
            <Star className="w-6 h-6 text-teal-400" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="w-6 h-6 text-teal-400 fill-teal-400" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

