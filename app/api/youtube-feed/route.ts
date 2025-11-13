import { NextResponse } from 'next/server'

// YouTube Channel IDs
const CHANNELS = {
  bookedin: {
    id: 'UCwUgatPkBj-CROEB_MJAh5A',
    name: 'BookedIn.ai Tutorials',
    category: 'BookedIn.ai'
  },
  samin: {
    id: 'UCzGcYErpBX4ldvv0l7MWLfw',
    name: 'AI Business Automation',
    category: 'AI & Automation'
  }
}

export async function GET() {
  try {
    // Fetch from both channels
    const [bookedinVideos, saminVideos] = await Promise.all([
      fetchChannelVideos(CHANNELS.bookedin),
      fetchChannelVideos(CHANNELS.samin)
    ])

    // Combine and sort by published date (newest first)
    const allVideos = [...bookedinVideos, ...saminVideos].sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })

    return NextResponse.json({
      videos: allVideos,
      categories: {
        bookedin: bookedinVideos,
        automation: saminVideos
      }
    })
  } catch (error) {
    console.error('Error fetching YouTube RSS:', error)
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    )
  }
}

async function fetchChannelVideos(channel: typeof CHANNELS.bookedin) {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channel.id}`
    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      console.error(`Failed to fetch ${channel.name}`)
      return []
    }

    const xmlText = await response.text()
    const videos = parseYouTubeRSS(xmlText, channel.category)

    return videos
  } catch (error) {
    console.error(`Error fetching ${channel.name}:`, error)
    return []
  }
}

function parseYouTubeRSS(xml: string, category: string) {
  const videos: Array<{
    id: string
    title: string
    description: string
    thumbnail: string
    publishedAt: string
    category: string
  }> = []

  // Extract video entries using regex (simple XML parsing)
  const entryRegex = /<entry>(.*?)<\/entry>/gs
  const entries = xml.match(entryRegex) || []

  for (const entry of entries) {
    // Extract video ID
    const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)
    const videoId = videoIdMatch ? videoIdMatch[1] : null

    // Extract title
    const titleMatch = entry.match(/<title>(.*?)<\/title>/)
    const title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/, '$1') : 'Untitled'

    // Extract description
    const descMatch = entry.match(/<media:description>(.*?)<\/media:description>/)
    let description = descMatch ? descMatch[1] : ''
    
    // Clean up CDATA
    description = description.replace(/<!\[CDATA\[(.*?)\]\]>/s, '$1')
    
    // Truncate description to first 150 characters
    if (description.length > 150) {
      description = description.substring(0, 150) + '...'
    }

    // Extract published date
    const publishedMatch = entry.match(/<published>(.*?)<\/published>/)
    const publishedAt = publishedMatch ? publishedMatch[1] : ''

    if (videoId) {
      videos.push({
        id: videoId,
        title: title.trim(),
        description: description.trim() || 'Watch this tutorial to learn more',
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        publishedAt,
        category
      })
    }
  }

  return videos
}

