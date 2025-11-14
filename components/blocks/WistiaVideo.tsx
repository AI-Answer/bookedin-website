'use client'

import React from 'react'
import Script from 'next/script'

interface WistiaVideoProps {
  videoId: string
  className?: string
}

export default function WistiaVideo({ videoId, className = '' }: WistiaVideoProps) {
  const [mounted, setMounted] = React.useState(false)
  const [scriptLoaded, setScriptLoaded] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)

    // Check if Wistia is already loaded
    if (typeof window !== 'undefined' && (window as any)._wq) {
      setScriptLoaded(true)
    }
  }, [])

  if (!mounted) {
    // Show thumbnail during SSR to avoid hydration mismatch
    return (
      <div className={`aspect-video relative rounded-2xl bg-muted overflow-hidden ${className}`}>
        <img
          src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </div>
    )
  }

  return (
    <>
      {/* Load video-specific embed script with high priority */}
      <Script
        src={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`}
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      <div className={`wistia_responsive_padding aspect-video relative rounded-2xl overflow-hidden ${className}`}>
        <div className="wistia_responsive_wrapper absolute inset-0 w-full h-full">
          <div
            className={`wistia_embed wistia_async_${videoId} videoFoam=true w-full h-full`}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%'
            }}
          >
            {/* Thumbnail placeholder while video loads */}
            {!scriptLoaded && (
              <img
                src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

