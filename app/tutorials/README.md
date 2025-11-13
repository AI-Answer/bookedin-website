# How to Add YouTube Videos to the Tutorials Page

## Quick Guide

### Step 1: Get Your YouTube Video ID

From your YouTube video URL:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                 ↑
                          This is the Video ID
```

### Step 2: Add Video to the List

Open `bookedin-website/app/tutorials/page.tsx` and find the `videos` array (around line 10).

Add your video like this:

```typescript
const videos = [
  {
    id: 'dQw4w9WgXcQ',  // ← Your video ID
    title: 'How to Set Up Your First Agent',  // ← Video title
    description: 'Step-by-step guide to creating your first AI sales agent',  // ← Short description
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',  // ← Auto-generated thumbnail
  },
  // Add more videos below...
]
```

### Step 3: Save and Test

1. Save the file
2. Run `npm run dev` in the terminal
3. Visit `http://localhost:3000/tutorials`
4. Your video should appear!

## Example: Adding Multiple Videos

```typescript
const videos = [
  {
    id: 'abc123xyz',
    title: 'Getting Started with BookedIn.ai',
    description: 'Learn the basics in 10 minutes',
    thumbnail: 'https://img.youtube.com/vi/abc123xyz/maxresdefault.jpg',
  },
  {
    id: 'def456uvw',
    title: 'Advanced Automation Features',
    description: 'Master multi-channel automation',
    thumbnail: 'https://img.youtube.com/vi/def456uvw/maxresdefault.jpg',
  },
  {
    id: 'ghi789rst',
    title: 'Integration Tutorial',
    description: 'Connect with your CRM and tools',
    thumbnail: 'https://img.youtube.com/vi/ghi789rst/maxresdefault.jpg',
  },
]
```

## Tips

- **Thumbnail URL Pattern**: Always use `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
- **Order**: Videos appear in the order you list them (top to bottom, left to right)
- **Keep descriptions short**: 1-2 sentences work best
- **Update regularly**: Add new videos as you upload them to YouTube

## Need Help?

If you need to customize the page layout or styling, the main file is:
`bookedin-website/app/tutorials/page.tsx`

