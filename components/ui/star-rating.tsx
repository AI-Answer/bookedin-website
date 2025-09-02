"use client"

import React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating?: number
  maxRating?: number
  size?: number
  className?: string
  showRating?: boolean
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxRating = 5,
  size = 16,
  className,
  showRating = false
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={cn(
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          )}
        />
      ))}
      {showRating && (
        <span className="ml-2 text-sm text-muted-foreground">
          {rating}/{maxRating}
        </span>
      )}
    </div>
  )
}
