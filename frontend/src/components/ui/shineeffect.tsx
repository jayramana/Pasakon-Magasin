import React from 'react'

interface ShineEffectProps {
  children: React.ReactNode
  className?: string
}

export function ShineEffect({ children, className = '' }: ShineEffectProps) {
  return (
    <div className={`relative inline-flex overflow-hidden ${className}`}>
      {children}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="shine-effect" />
      </div>
    </div>
  )
}

