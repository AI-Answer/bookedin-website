'use client'

import React from 'react'

interface WistiaVideoProps {
  videoId: string
  className?: string
}

export default function WistiaVideo({ videoId, className = '' }: WistiaVideoProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Show placeholder during SSR to avoid hydration mismatch
    return (
      <div className={`aspect-video relative rounded-2xl bg-muted ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading video...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`aspect-video relative rounded-2xl ${className}`}>
      <div dangerouslySetInnerHTML={{
        __html: `
          <script src="https://fast.wistia.com/player.js" async></script>
          <script src="https://fast.wistia.com/embed/${videoId}.js" async type="module"></script>
          <style>wistia-player[media-id='${videoId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style>
          <wistia-player media-id="${videoId}" aspect="1.7777777777777777" class="absolute inset-0 w-full h-full rounded-2xl"></wistia-player>
        `
      }} />
    </div>
  )
}

