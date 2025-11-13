'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play, ArrowLeft, ExternalLink } from 'lucide-react'

// YouTube Channel ID for @bookedinai
const YOUTUBE_CHANNEL_ID = 'UCwUgatPkBj-CROEB_MJAh5A'

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  category: string
}

export default function TutorialsPage() {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null)
  const [videos, setVideos] = React.useState<Video[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')

  React.useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true)
        // Fetch from YouTube RSS feed via our API route
        const response = await fetch('/api/youtube-feed')

        if (!response.ok) {
          throw new Error('Failed to fetch videos')
        }

        const data = await response.json()
        setVideos(data.videos)
        setError(null)
      } catch (err) {
        console.error('Error fetching videos:', err)
        setError('Unable to load videos. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  // Filter videos by category
  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(video => video.category === selectedCategory)

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(videos.map(v => v.category)))]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/bookedin.svg" alt="BookedIn" className="h-8 w-auto" />
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Video Tutorials & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Learn BookedIn.ai and AI business automation with our comprehensive video guides
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.youtube.com/@bookedinai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                BookedIn.ai Channel
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.youtube.com/@SaminYasar_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                AI Automation Channel
              </a>
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        {!loading && !error && categories.length > 1 && (
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Videos' : category}
              </Button>
            ))}
          </div>
        )}

        {/* Video Player (if video selected) */}
        {selectedVideo && (
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                onClick={() => setSelectedVideo(null)}
              >
                Close Video
              </Button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <p className="text-muted-foreground">Loading videos...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
              <ExternalLink className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unable to load videos</h3>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button asChild>
              <a
                href="https://www.youtube.com/@bookedinai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit YouTube Channel
              </a>
            </Button>
          </div>
        )}

        {/* Video Grid */}
        {!loading && !error && filteredVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-4 shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {video.category}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {video.description}
              </p>
            </div>
            ))}
          </div>
        )}

        {/* Empty State (if no videos in filter) */}
        {!loading && !error && filteredVideos.length === 0 && videos.length > 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Play className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No videos in this category</h3>
            <p className="text-muted-foreground mb-6">
              Try selecting a different category
            </p>
            <Button onClick={() => setSelectedCategory('all')}>
              Show All Videos
            </Button>
          </div>
        )}

        {/* Empty State (if no videos at all) */}
        {!loading && !error && videos.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Play className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No videos yet</h3>
            <p className="text-muted-foreground mb-6">
              Check back soon for new tutorials and guides
            </p>
            <Button asChild>
              <a
                href="https://www.youtube.com/@bookedinai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start building your AI sales agent today and convert more leads into customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://dashboard.bookedin.ai/register">
                Try the Platform
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/book">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <img src="/bookedin.svg" alt="BookedIn" className="h-6 w-auto" />
              <span className="text-sm text-muted-foreground">
                © 2025 BookedIn.ai. All rights reserved.
              </span>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/book" className="text-sm text-muted-foreground hover:text-foreground">
                Book Demo
              </Link>
              <a
                href="https://www.youtube.com/@bookedinai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

