"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarRating } from "@/components/ui/star-rating"

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
  videoUrl?: string
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, videoUrl, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5 md:p-8",
          className
        )}
        {...props}
      >
        <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20">
          "
        </div>

        <div className="flex flex-col gap-4 justify-between h-full">
          {rating > 0 && (
            <StarRating rating={rating} size={16} />
          )}

          {videoUrl && (
            <div className="mb-4">
              {videoUrl.includes('youtube.com/embed') ? (
                <iframe
                  className="w-full rounded-lg aspect-video"
                  src={videoUrl}
                  title="Video testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <video
                  className="w-full rounded-lg cursor-pointer"
                  controls
                  preload="metadata"
                  onClick={(e) => {
                    const video = e.target as HTMLVideoElement;
                    if (video.paused) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          <p className="text-pretty text-base text-muted-foreground">
            {testimonial}
          </p>

          <div className="flex items-center gap-4 justify-start">
            <div className="flex items-center gap-4">
              {image && (
                <Avatar>
                  <AvatarImage src={image} alt={name} height={48} width={48} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-semibold text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground">
                  {role}
                  {company && ` @ ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial }